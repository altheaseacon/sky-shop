// Загрузка популярных товаров для главной страницы
document.addEventListener("DOMContentLoaded", () => {
    // Берем первые 6 товаров как популярные
    const popularProducts = products.slice(0, 8);
    const container = document.getElementById("popularProducts");
    
    if (container) {
        container.innerHTML = popularProducts.map(p => `
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
        
        // Обработчики для кнопок "В корзину"
        document.querySelectorAll(".add-to-cart").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = parseInt(btn.dataset.id);
                const product = products.find(p => p.id === id);
                if (product) addToCart(product);
            });
        });
    }
    
    // Подписка на рассылку
    const subscribeForm = document.getElementById("subscribeForm");
    if (subscribeForm) {
        subscribeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = subscribeForm.querySelector("input").value;
            alert(`Спасибо за подписку, ${email}! Будем присылать лучшие акции.`);
            subscribeForm.reset();
        });
    }
});