const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = 'sky-shop-secret-key-2024';

// Middleware
app.use(cors());
app.use(express.json());

// Подключение к SQLite
const db = new sqlite3.Database('./database.sqlite');

// Создание таблиц
db.serialize(() => {
    // Таблица пользователей
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
    
    // Таблица корзин
    db.run(`
        CREATE TABLE IF NOT EXISTS carts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            items TEXT NOT NULL,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    `);
    
    // Таблица заказов
    db.run(`
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            items TEXT NOT NULL,
            total INTEGER NOT NULL,
            status TEXT DEFAULT 'new',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    `);
    
    console.log('✅ База данных инициализирована');
});

// ========== РЕГИСТРАЦИЯ ==========
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Заполните все поля' });
    }
    
    if (password.length < 6) {
        return res.status(400).json({ error: 'Пароль должен быть минимум 6 символов' });
    }
    
    try {
        // Хэшируем пароль
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Сохраняем пользователя
        db.run(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, hashedPassword],
            function(err) {
                if (err) {
                    if (err.message.includes('UNIQUE')) {
                        return res.status(400).json({ error: 'Email уже зарегистрирован' });
                    }
                    return res.status(500).json({ error: 'Ошибка сервера' });
                }
                
                // Создаем токен
                const token = jwt.sign({ id: this.lastID, email }, JWT_SECRET, { expiresIn: '30d' });
                
                res.json({
                    success: true,
                    token,
                    user: { id: this.lastID, name, email }
                });
            }
        );
    } catch (error) {
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// ========== ВХОД ==========
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ error: 'Заполните все поля' });
    }
    
    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
        if (err || !user) {
            return res.status(400).json({ error: 'Неверный email или пароль' });
        }
        
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Неверный email или пароль' });
        }
        
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '30d' });
        
        res.json({
            success: true,
            token,
            user: { id: user.id, name: user.name, email: user.email }
        });
    });
});

// ========== ПОЛУЧИТЬ ПРОФИЛЬ ==========
app.get('/api/profile', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Нет токена' });
    }
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        
        db.get('SELECT id, name, email, created_at FROM users WHERE id = ?', [decoded.id], (err, user) => {
            if (err || !user) {
                return res.status(404).json({ error: 'Пользователь не найден' });
            }
            res.json(user);
        });
    } catch (error) {
        res.status(401).json({ error: 'Неверный токен' });
    }
});

// ========== КОРЗИНА ==========
app.get('/api/cart', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Нет токена' });
    }
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        
        db.get('SELECT items FROM carts WHERE user_id = ?', [decoded.id], (err, cart) => {
            if (err) {
                return res.status(500).json({ error: 'Ошибка сервера' });
            }
            res.json({ items: cart ? JSON.parse(cart.items) : [] });
        });
    } catch (error) {
        res.status(401).json({ error: 'Неверный токен' });
    }
});

app.post('/api/cart', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const { items } = req.body;
    
    if (!token) {
        return res.status(401).json({ error: 'Нет токена' });
    }
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        
        db.run(
            `INSERT OR REPLACE INTO carts (user_id, items, updated_at) 
             VALUES (?, ?, CURRENT_TIMESTAMP)`,
            [decoded.id, JSON.stringify(items)],
            (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Ошибка сервера' });
                }
                res.json({ success: true });
            }
        );
    } catch (error) {
        res.status(401).json({ error: 'Неверный токен' });
    }
});

// ========== ЗАКАЗЫ ==========
app.post('/api/orders', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const { items, total } = req.body;
    
    if (!token) {
        return res.status(401).json({ error: 'Нет токена' });
    }
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        
        db.run(
            'INSERT INTO orders (user_id, items, total, status) VALUES (?, ?, ?, ?)',
            [decoded.id, JSON.stringify(items), total, 'new'],
            function(err) {
                if (err) {
                    return res.status(500).json({ error: 'Ошибка сервера' });
                }
                
                // Очищаем корзину
                db.run('DELETE FROM carts WHERE user_id = ?', [decoded.id]);
                
                res.json({ 
                    success: true, 
                    orderId: this.lastID,
                    message: 'Заказ оформлен! Наш менеджер свяжется с вами.'
                });
            }
        );
    } catch (error) {
        res.status(401).json({ error: 'Неверный токен' });
    }
});

// ========== ПОЛУЧИТЬ ЗАКАЗЫ ==========
app.get('/api/orders', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Нет токена' });
    }
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        
        db.all('SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC', [decoded.id], (err, orders) => {
            if (err) {
                return res.status(500).json({ error: 'Ошибка сервера' });
            }
            res.json(orders);
        });
    } catch (error) {
        res.status(401).json({ error: 'Неверный токен' });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на порту ${PORT}`);
    console.log(`📍 http://localhost:${PORT}`);
});