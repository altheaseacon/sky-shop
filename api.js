// API для работы с сервером
const API_URL = 'https://sky-shop-api.onrender.com/api';

// Токен пользователя
let authToken = localStorage.getItem('authToken');
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

// Сохраняем токен
function setAuthToken(token, user) {
    authToken = token;
    currentUser = user;
    localStorage.setItem('authToken', token);
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Очищаем токен
function clearAuth() {
    authToken = null;
    currentUser = null;
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
}

// Запросы к API
async function apiRequest(endpoint, options = {}) {
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };
    
    if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
    }
    
    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers
    });
    
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.error || 'Ошибка запроса');
    }
    
    return data;
}

// Регистрация
async function register(name, email, password) {
    const data = await apiRequest('/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password })
    });
    
    if (data.success) {
        setAuthToken(data.token, data.user);
    }
    
    return data;
}

// Вход
async function login(email, password) {
    const data = await apiRequest('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
    });
    
    if (data.success) {
        setAuthToken(data.token, data.user);
    }
    
    return data;
}

// Выход
function logout() {
    clearAuth();
    updateAuthUI();
}

// Получить профиль
async function getProfile() {
    if (!authToken) return null;
    return await apiRequest('/profile');
}

// Сохранить корзину
async function saveCart(items) {
    if (!authToken) return;
    await apiRequest('/cart', {
        method: 'POST',
        body: JSON.stringify({ items })
    });
}

// Загрузить корзину
async function loadCart() {
    if (!authToken) return [];
    const data = await apiRequest('/cart');
    return data.items || [];
}

// Оформить заказ
async function createOrder(items, total) {
    if (!authToken) throw new Error('Необходимо войти в аккаунт');
    return await apiRequest('/orders', {
        method: 'POST',
        body: JSON.stringify({ items, total })
    });
}

// Получить заказы
async function getOrders() {
    if (!authToken) return [];
    return await apiRequest('/orders');
}

// Обновить UI в зависимости от авторизации
function updateAuthUI() {
    const profileBtn = document.getElementById('profileBtn');
    const profileStatus = document.getElementById('profileStatus');
    const loginName = document.getElementById('loginName');
    const loginEmail = document.getElementById('loginEmail');
    
    if (currentUser) {
        if (profileBtn) profileBtn.innerHTML = `👤 ${currentUser.name}`;
        if (profileStatus) profileStatus.innerHTML = `✅ Вы вошли как: ${currentUser.name} (${currentUser.email})`;
        if (loginName) loginName.value = currentUser.name;
        if (loginEmail) loginEmail.value = currentUser.email;
    } else {
        if (profileBtn) profileBtn.innerHTML = '👤 Аккаунт';
        if (profileStatus) profileStatus.innerHTML = '👋 Войдите, чтобы сохранять корзину';
    }
}

// Экспортируем функции
window.api = {
    register,
    login,
    logout,
    getProfile,
    saveCart,
    loadCart,
    createOrder,
    getOrders,
    updateAuthUI,
    currentUser: () => currentUser,
    isAuthenticated: () => !!authToken
};