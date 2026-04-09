// Страница каталога
let currentCategory = "tabak";

function renderCatalog() {
    const filtered = products.filter(p => p.category === currentCategory);
    const container = document.getElementById("productsContainer");
    
    if (!container) return;
    
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-msg">🚫 Товаров в этой категории пока нет</div>';
        return;
    }
    
    container.innerHTML = filtered.map(p => `
        <div class="product-card">
            <div class="product-img">
                <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/200x150?text=Нет+фото'">
            </div>
            <div class="product-info">
                <div class="product-title">${p.name}</div>
                <div class="product-desc">${p.desc}</div>
                <div class="product-price">${p.price} ₽</div>
                <button class="add-to-cart" data-id="${p.id}">➕ В корзину</button>
            </div>
        </div>
    `).join("");
    
    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === id);
            if (product) addToCart(product);
        });
    });
}

function setActiveCategory(catId) {
    currentCategory = catId;
    renderCatalog();
    
    // Обновляем активный класс у кнопок
    document.querySelectorAll(".cat-btn").forEach(btn => {
        if (btn.getAttribute("data-cat") === catId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
    loadCart();
    loadProfile();
    
    // Получаем категорию из URL (если есть)
    const urlParams = new URLSearchParams(window.location.search);
    const catFromUrl = urlParams.get('cat');
    
    // Устанавливаем категорию (из URL или по умолчанию)
    if (catFromUrl && ["tabak", "zhevatabak", "odnorazki", "podiki", "liquid", "samokrutki"].includes(catFromUrl)) {
        currentCategory = catFromUrl;
    } else {
        currentCategory = "tabak";
    }
    
    renderCatalog();
    
    // Навигация по категориям - НАСТРАИВАЕМ ПРАВИЛЬНО
    const categoryButtons = document.querySelectorAll(".cat-btn");
    
    categoryButtons.forEach(btn => {
        // Устанавливаем активный класс для текущей категории
        if (btn.getAttribute("data-cat") === currentCategory) {
            btn.classList.add("active");
        }
        
        // Добавляем обработчик клика
        btn.addEventListener("click", function() {
            const catId = this.getAttribute("data-cat");
            setActiveCategory(catId);
        });
    });
    
    // Кнопки модалок
    const cartBtn = document.getElementById("cartBtn");
    const profileBtn = document.getElementById("profileBtn");
    
    if (cartBtn) {
        cartBtn.addEventListener("click", () => {
            renderCartModal();
            document.getElementById("cartModal").style.display = "flex";
        });
    }
    
    if (profileBtn) {
        profileBtn.addEventListener("click", openProfileModal);
    }
    
    // Закрытие модалок
    const closeCart = document.getElementById("closeCart");
    const closeProfile = document.getElementById("closeProfile");
    
    if (closeCart) {
        closeCart.addEventListener("click", () => {
            document.getElementById("cartModal").style.display = "none";
        });
    }
    
    if (closeProfile) {
        closeProfile.addEventListener("click", () => {
            document.getElementById("profileModal").style.display = "none";
        });
    }
    
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
            e.target.style.display = "none";
        }
    });
    
    const saveProfileBtn = document.getElementById("saveProfileBtn");
    const logoutProfileBtn = document.getElementById("logoutProfileBtn");
    const checkoutBtn = document.getElementById("checkoutBtn");
    
    if (saveProfileBtn) saveProfileBtn.addEventListener("click", saveProfileFromModal);
    if (logoutProfileBtn) logoutProfileBtn.addEventListener("click", logoutProfile);
    if (checkoutBtn) checkoutBtn.addEventListener("click", checkout);
});