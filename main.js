// ==================== КАТАЛОГ ТОВАРОВ ====================
// ВАЖНО: замените пути к картинкам на свои!
// Пример: "images/tabak/darkside_core.jpg"

const getImagePath = (category, filename) => {
    // Теперь используем реальные картинки из папки
    return `images/${category}/${filename}.jpg`};

const products = [
    // ========== ТАБАК ДЛЯ КАЛЬЯНА (оставляем как было) ==========
    { id: 1, name: "Darkside Core", category: "tabak", price: 890, desc: "Крепость 6/10, Unwashed/Boiled, жаростойкость выше среднего", img: getImagePath("tabak", "darkside_core") },
    { id: 2, name: "Darkside Shot", category: "tabak", price: 850, desc: "Крепость 3/10, миксованый табак (ягоды, фрукты, холодок)", img: getImagePath("tabak", "darkside_shot") },
    { id: 3, name: "MustHave", category: "tabak", price: 950, desc: "Крепость 5/10,Гипернатуральные вкусыМелкая нарезка бленда(за счет чего низкая жаростойкость)", img: getImagePath("tabak", "musthave") },
    { id: 4, name: "Muassel", category: "tabak", price: 790, desc: "Крепость 4/10, ферментация в меду, сочный вкус", img: getImagePath("tabak", "muassel") },
    { id: 5, name: "Brusko (Безтабачная смесь)", category: "tabak", price: 720, desc: "Крепость 2/10, листья розеллы, жидкий никотин", img: getImagePath("tabak", "brusko") },
    { id: 6, name: "Black Burn HIT", category: "tabak", price: 880, desc: "Крепость 3/10, яркая передача вкуса", img: getImagePath("tabak", "blackburn_hit") },
    { id: 95, name: "Black Burn", category: "tabak", price: 880, desc: "Крепость 6/10, Ферментируется в меду, 2 линейки shock-кислые выкусы 'что-то' - готовый микс  выше среднего жаростойкость", img: getImagePath("tabak", "blackburn")},
    { id: 7, name: "DEUS Натуральный", category: "tabak", price: 990, desc: "Крепость 7/10, высокая жаростойкость", img: getImagePath("tabak", "deus") },
    { id: 8, name: "Overdose", category: "tabak", price: 870, desc: "Крепость 8/10, ферментация в меду + жидкий никотин", img: getImagePath("tabak", "overdose") },
    { id: 94, name: "Сарма",category: "tabak", price: 820, desc: "Крепость 5/10, высокая жаростойкость, ностальгические вкусы, природная тематика", img: getImagePath("tabak", "sarma")},
    { id: 9, name: "Сарма 360", category: "tabak", price: 820, desc: "Крепость 8/10, высокая жаростойкость", img: getImagePath("tabak", "sarma360") },
    { id: 10, name: "Satyr", category: "tabak", price: 780, desc: "Крепость 7/10, дымный табак, крупная нарезка", img: getImagePath("tabak", "satyr") },
    { id: 11, name: "Palitra", category: "tabak", price: 750, desc: "Крепость 3/10, отлично подходит для миксов", img: getImagePath("tabak", "palitra") },
    { id: 12, name: "Trofimov", category: "tabak", price: 830, desc: "Крепость 8/10, ферментация с сигарным сырьем", img: getImagePath("tabak", "trofimov") },
    { id: 13, name: "Bonche", category: "tabak", price: 920, desc: "Крепость 7/10, сигарный лист из Карибского бассейна", img: getImagePath("tabak", "bonche") },
    { id: 14, name: "Dogma", category: "tabak", price: 860, desc: "Крепость 6/10, сигарный лист, натуральные вкусы", img: getImagePath("tabak", "dogma") },
    { id: 15, name: "Joy", category: "tabak", price: 790, desc: "Крепость 4/10, от Alpha Hookah, яркие ароматы", img: getImagePath("tabak", "joy") },
    { id: 16, name: "Jent", category: "tabak", price: 880, desc: "Крепость 6/10, экстракты трав и фруктов", img: getImagePath("tabak", "jent") },
    
    // ========== ЖЕВАТЕЛЬНЫЙ ТАБАК ==========
    { id: 17, name: "Siberia Black (40mg)", category: "zhevatabak", price: 550, desc: "Классический вкус, черная смородина, wide формат", img: getImagePath("zhevatabak", "siberia") },
    { id: 18, name: "Odens Cold Dry (20mg)", category: "zhevatabak", price: 480, desc: "Крепость ниже среднего, двойная мята/классика", img: getImagePath("zhevatabak", "odens") },
    { id: 19, name: "Iceberg Strong (70mg)", category: "zhevatabak", price: 590, desc: "Ментол, мята, фруктовая жвачка", img: getImagePath("zhevatabak", "iceberg") },
    { id: 20, name: "Corvus Blast (70mg)", category: "zhevatabak", price: 530, desc: "Очень крепкий, классический вкус", img: getImagePath("zhevatabak", "corvus") },
    { id: 21, name: "PODONKI Hard (70mg)", category: "zhevatabak", price: 620, desc: "Вкусы: ананас, черника, яблоко, с капсулой", img: getImagePath("zhevatabak", "podonki") },
    { id: 22, name: "EPOK Extra (70mg)", category: "zhevatabak", price: 510, desc: "Выбеленный табак, не оставляет цвета", img: getImagePath("zhevatabak", "epok") },
    { id: 23, name: "ADEX Easy Click (60mg)", category: "zhevatabak", price: 580, desc: "С капсулой, вкусы: яблоко+ментол, двойная мята", img: getImagePath("zhevatabak", "adex") },
    { id: 24, name: "RUSH (30mg)", category: "zhevatabak", price: 450, desc: "Без вкусов, wide/slim формат", img: getImagePath("zhevatabak", "rush") },
    { id: 25, name: "WOODS (40mg)", category: "zhevatabak", price: 490, desc: "Вкусы: original, cold dry, ice mint", img: getImagePath("zhevatabak", "woods") },
    { id: 26, name: "MOLECULA (40mg)", category: "zhevatabak", price: 520, desc: "CHERRY, MENTHOL-HARD, COLD DRY", img: getImagePath("zhevatabak", "molecula") },
    { id: 27, name: "LIT (50mg)", category: "zhevatabak", price: 470, desc: "MENTHOL-MEDIUM, POWERMINT-STRONG", img: getImagePath("zhevatabak", "lit") },
    { id: 28, name: "QVKS (70mg)", category: "zhevatabak", price: 500, desc: "cold dry, menthol, double mint", img: getImagePath("zhevatabak", "qvks") },

    // ========== ВСЕ ОДНОРАЗКИ (ПОЛНОСТЬЮ ИЗ ВАШЕГО ФАЙЛА) ==========
    { id: 29, name: "Iget XXL (1800 тяг)", category: "odnorazki", price: 890, desc: "Крепость 1/5, максимально лёгкие", img: getImagePath("odnorazki", "iget_xxl") },
    { id: 31, name: "Elfbar GH 23000", category: "odnorazki", price: 1490, desc: "Крепость 3/5, тройной койл для лучшей вкусопередачи", img: getImagePath("odnorazki", "elfbar_gh") },
    { id: 32, name: "Red Magic (7500 тяг)", category: "odnorazki", price: 1190, desc: "Крепость 3-4/5, тугая тяга, перезаряжаемая", img: getImagePath("odnorazki", "red_magic") },
    { id: 33, name: "Leafbar (8000 тяг)", category: "odnorazki", price: 1090, desc: "Крепость 4/5, тонкий дизайн, перезаряжаемая", img: getImagePath("odnorazki", "leafbar") },
    { id: 34, name: "Leafbar Platinum (8000 тяг)", category: "odnorazki", price: 1290, desc: "Крепость 3/5, экран с уровнем заряда и жидкости", img: getImagePath("odnorazki", "leafbar_platinum") },
    { id: 35, name: "Lil Kaif (9000 тяг)", category: "odnorazki", price: 1150, desc: "Крепость 2/5, регулировка обдува, легкая/средняя", img: getImagePath("odnorazki", "lil_kaif") },
    { id: 36, name: "Icon Gold Rush (8000 тяг)", category: "odnorazki", price: 1250, desc: "Крепость 5/5, крепкие, не приторные вкусы", img: getImagePath("odnorazki", "icon_gold") },
    { id: 38, name: "Icon (800 тяг)", category: "odnorazki", price: 590, desc: "Крепость 2/5, съемный акб, без подзарядки", img: getImagePath("odnorazki", "icon") },
    { id: 39, name: "Icon Duo (20000 тяг)", category: "odnorazki", price: 1690, desc: "Крепость 3/5, 3 вкуса в одном, рычаг переключения, экран", img: getImagePath("odnorazki", "icon_duo") },
    { id: 40, name: "Icon Turbo (20000 тяг)", category: "odnorazki", price: 1590, desc: "Крепость 3/5, TURBO режим, 2 режима мощности", img: getImagePath("odnorazki", "icon_turbo") },
    { id: 41, name: "RICK AND MORTY BAD TRIP (25000/15000 тяг)", category: "odnorazki", price: 1790, desc: "Крепость 5/5, ЭКО и ТУРБО режимы", img: getImagePath("odnorazki", "rick_morty_bad") },
    { id: 42, name: "RICK AND MORTY (20000 тяг)", category: "odnorazki", price: 1650, desc: "Крепость 4/5, холодная линейка миксованых вкусов", img: getImagePath("odnorazki", "rick_morty") },
    { id: 43, name: "HUSKY AIR MAX (10000 тяг)", category: "odnorazki", price: 1290, desc: "Крепость 5/5, STRONG/ULTRA STRONG, 2X холодок", img: getImagePath("odnorazki", "husky_air_max") },
    { id: 44, name: "HUSKY CYBER 2.0 (18000 тяг)", category: "odnorazki", price: 1490, desc: "Крепость 5/5, регулировка мощности 16-24W, дисплей, регулировка обдува", img: getImagePath("odnorazki", "husky_cyber2") },
    { id: 45, name: "HUSKY CYBER (10000 тяг)", category: "odnorazki", price: 1390, desc: "Крепость 5/5, STRONG/ULTRA STRONG", img: getImagePath("odnorazki", "husky_cyber") },
    { id: 46, name: "KORY (100000 тяг)", category: "odnorazki", price: 2490, desc: "Крепость 2/5, кальянная тяга, 2в1 (можно вставить в кальян), экран", img: getImagePath("odnorazki", "kory") },
    { id: 47, name: "ELFBAR SOUR KING (30000 тяг)", category: "odnorazki", price: 1890, desc: "Крепость 3/5, регулировка обдува/мощности, регулировка кислотности 1-4", img: getImagePath("odnorazki", "elfbar_sour") },
    { id: 48, name: "DUALL (12000 тяг)", category: "odnorazki", price: 1190, desc: "Крепость 2-2.5/5, регулировка обдува, экран, ЭКО/ТУРБО режимы", img: getImagePath("odnorazki", "duall") },
    { id: 49, name: "WAKA (10000 тяг)", category: "odnorazki", price: 1290, desc: "Крепость 5/5, буст режим, упор на крепость", img: getImagePath("odnorazki", "waka") },
    { id: 50, name: "E.T by WAKA (35000 тяг)", category: "odnorazki", price: 1990, desc: "Крепость 5/5, буст режим, улучшенная вкусопередача", img: getImagePath("odnorazki", "et_waka") },
    { id: 51, name: "HUSKY СИБИРЬ (15000 тяг)", category: "odnorazki", price: 1390, desc: "Крепость 2.5/5, именитый холодок, буст режим", img: getImagePath("odnorazki", "husky_sibir") },
    { id: 52, name: "LOST MARY MO10000 (10000 тяг)", category: "odnorazki", price: 1350, desc: "Крепость 2.5/5, черно-золотой дизайн, лучшее качество", img: getImagePath("odnorazki", "lost_mary_mo") },
    { id: 53, name: "FUNKY LANDS (15000 тяг)", category: "odnorazki", price: 1250, desc: "Крепость 2/5, интересные вкусы, буст режим", img: getImagePath("odnorazki", "funky_lands") },
    { id: 54, name: "LOST VAPE (18000 тяг)", category: "odnorazki", price: 1550, desc: "Крепость 3/5, корпус-канистра из алюминия, сенсорный экран", img: getImagePath("odnorazki", "lost_vape") },
    { id: 55, name: "GEEK BAR SLIMOR (32000 тяг)", category: "odnorazki", price: 1750, desc: "Крепость 3/4 (Eco 3/5, Pulse 4/5), удобный дизайн", img: getImagePath("odnorazki", "geek_bar") },
    { id: 56, name: "RICK AND MORTY BAD ACID (30000 тяг)", category: "odnorazki", price: 1850, desc: "Крепость 5/5, регулировка кислинки, крепости и обдува", img: getImagePath("odnorazki", "rick_morty_acid") },
    { id: 57, name: "PUFFMI FLORA (25000 тяг)", category: "odnorazki", price: 1590, desc: "Крепость 2.5/5, дизайн в виде парфюма, плотная тяга", img: getImagePath("odnorazki", "puffmi") },
    { id: 58, name: "TIKOBAR VISHBAR (30000 тяг)", category: "odnorazki", price: 1690, desc: "Крепость 2.5/5, на коробке указаны сладость, холод и крепость", img: getImagePath("odnorazki", "tikobar") },
    { id: 59, name: "LOST MARY BM16000 (16000 тяг)", category: "odnorazki", price: 1450, desc: "Крепость 3/5, буст режим, индикатор жидкости и заряда", img: getImagePath("odnorazki", "lost_mary_bm") },

    // ========== ПОДИКИ ==========
    { id: 60, name: "Charon Baby (2ml)", category: "podiki", price: 1990, desc: "750мАч, датчик затяжки, до 15 ватт", img: getImagePath("podiki", "charon_baby") },
    { id: 61, name: "Battlestar Baby (2ml)", category: "podiki", price: 1990, desc: "750мАч, датчик затяжки", img: getImagePath("podiki", "battlestar") },
    { id: 62, name: "Vaporesso Xros 3", category: "podiki", price: 2890, desc: "1000мАч, регулировка обдува, 2/3ml", img: getImagePath("podiki", "xros3") },
    { id: 63, name: "Xros 4 Mini", category: "podiki", price: 2590, desc: "Компактный, 1000мАч, отличная тяга", img: getImagePath("podiki", "xros4mini") },
    { id: 64, name: "Xros Pro", category: "podiki", price: 3290, desc: "1200мАч, регулировка обдува", img: getImagePath("podiki", "xros_pro") },
    { id: 65, name: "Pasito 2 (6ml)", category: "podiki", price: 3490, desc: "2500мАч, 80 ватт, мощная система", img: getImagePath("podiki", "pasito2") },
    { id: 66, name: "Pasito Mini", category: "podiki", price: 2290, desc: "1100мАч, до 30 ватт", img: getImagePath("podiki", "pasito_mini") },
    { id: 67, name: "Manto Aio Plus", category: "podiki", price: 3990, desc: "Съемный акб, до 80 ватт, 3ml", img: getImagePath("podiki", "manto") },
    { id: 68, name: "Novo 3 (800мАч)", category: "podiki", price: 1790, desc: "2ml бак, датчик затяжки", img: getImagePath("podiki", "novo3") },
    { id: 69, name: "Knight 80", category: "podiki", price: 3590, desc: "4ml, до 80 ватт, регулировка обдува", img: getImagePath("podiki", "knight80") },

    // ========== ЖИДКОСТИ ==========
    { id: 70, name: "Duall (20mg/hard)", category: "liquid", price: 590, desc: "Мягкие, яркие, без удара по горлу", img: getImagePath("liquid", "duall") },
    { id: 71, name: "Husky Strong (20mg)", category: "liquid", price: 620, desc: "Холодная/Мятная линейка", img: getImagePath("liquid", "husky") },
    { id: 72, name: "Vandal Extra (20mg)", category: "liquid", price: 650, desc: "DAILY/OXID/ICE/PREMIUM", img: getImagePath("liquid", "vandal") },
    { id: 73, name: "Peredoz (0mg + никобустер)", category: "liquid", price: 780, desc: "Премиальная насыщенная линейка", img: getImagePath("liquid", "peredoz") },
    { id: 74, name: "TRAVA Конструктор (0mg)", category: "liquid", price: 690, desc: "Травяные нотки, с никобустером", img: getImagePath("liquid", "trava") },
    { id: 75, name: "ПОДГОНКИ (0mg)", category: "liquid", price: 650, desc: "Миксованные и моно вкусы", img: getImagePath("liquid", "podgonki") },
    { id: 76, name: "Мишка (0mg + никобустер)", category: "liquid", price: 590, desc: "Без ТХ, яркие, не приторные", img: getImagePath("liquid", "mishka") },
    { id: 77, name: "Bryzgi (20/hard)", category: "liquid", price: 610, desc: "Яркая, насыщенная, курятся не сладко", img: getImagePath("liquid", "bryzgi") },
    { id: 78, name: "MAD JUICE (20/hard)", category: "liquid", price: 640, desc: "Фруктовые и ягодные вкусы с холодком", img: getImagePath("liquid", "mad_juice") },
    { id: 79, name: "Soak (20mg)", category: "liquid", price: 890, desc: "Премиум, европейские аромки", img: getImagePath("liquid", "soak") },
    { id: 80, name: "Рик и Морти (20/strong)", category: "liquid", price: 720, desc: "Миксованные, полностью холодные", img: getImagePath("liquid", "rick_morty_liquid") },
    { id: 81, name: "XYLINET (20/hard)", category: "liquid", price: 680, desc: "20 hard - tebe pizda", img: getImagePath("liquid", "xylinet") },

    // ========== САМОКРУТКИ / СИГАРИЛЛЫ ==========
    { id: 82, name: "Stanley Virginia", category: "samokrutki", price: 490, desc: "Бельгия, средняя крепость", img: getImagePath("samokrutki", "stanley") },
    { id: 83, name: "American Blend", category: "samokrutki", price: 460, desc: "Россия, умеренно сладкий", img: getImagePath("samokrutki", "american") },
    { id: 84, name: "Redmont", category: "samokrutki", price: 520, desc: "Погарская фабрика, премиум", img: getImagePath("samokrutki", "redmont") },
    { id: 85, name: "Manitou", category: "samokrutki", price: 580, desc: "Натуральные вкусы, без химии", img: getImagePath("samokrutki", "manitou") },
    { id: 86, name: "Кретек Djarum", category: "samokrutki", price: 390, desc: "70% гвоздика, щелкающий звук", img: getImagePath("samokrutki", "djarum") },
    { id: 87, name: "Clubmaster Mini", category: "samokrutki", price: 620, desc: "Настоящий покровный лист", img: getImagePath("samokrutki", "clubmaster") },
    { id: 88, name: "Revolution", category: "samokrutki", price: 550, desc: "Мексиканские сигариллы", img: getImagePath("samokrutki", "revolution") },
    { id: 89, name: "K.Ritter Slim", category: "samokrutki", price: 530, desc: "Крафтовые ароматизированные", img: getImagePath("samokrutki", "ritter") },
    { id: 90, name: "Dakota", category: "samokrutki", price: 510, desc: "Крафтовые, крепость выше среднего", img: getImagePath("samokrutki", "dakota") },
    { id: 91, name: "Handelsgold", category: "samokrutki", price: 590, desc: "Индивидуальная упаковка каждой сигариллы", img: getImagePath("samokrutki", "handelsgold") },
    { id: 92, name: "Бумажки Dark Horse (50шт)", category: "samokrutki", price: 120, desc: "70мм, Польша", img: getImagePath("samokrutki", "darkhorse") },
    { id: 93, name: "Бумажки Smoking (60шт)", category: "samokrutki", price: 130, desc: "70мм, Испания", img: getImagePath("samokrutki", "smoking") },
    { id: 95, name: "Бумажки OCB (60шт)", category: "samokrutki", price: 180, desc: "70мм, Испания", img: getImagePath("samokrutki", "Ocb") }
];

// ==================== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ====================
let currentCategory = "tabak";
let cart = [];
let currentUser = { name: "Гость", email: "guest@sky.ru" };

// ==================== РАБОТА С LOCALSTORAGE ====================
function saveCart() {
    localStorage.setItem("skyCart", JSON.stringify(cart));
    updateCartBadge();
}

function loadCart() {
    const saved = localStorage.getItem("skyCart");
    if (saved) cart = JSON.parse(saved);
    else cart = [];
    updateCartBadge();
}

function saveProfile() {
    localStorage.setItem("skyProfile", JSON.stringify(currentUser));
}

function loadProfile() {
    const saved = localStorage.getItem("skyProfile");
    if (saved) currentUser = JSON.parse(saved);
    else currentUser = { name: "Гость", email: "guest@sky.ru" };
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById("cartCountBadge");
    if (badge) badge.innerText = totalItems;
    if (typeof renderCartModal === "function") renderCartModal();
}

// ==================== КОРЗИНА ====================
function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ 
            id: product.id, 
            name: product.name, 
            price: product.price, 
            quantity: 1 
        });
    }
    saveCart();
    alert(`✅ ${product.name} добавлен в корзину`);
}

function renderCartModal() {
    const container = document.getElementById("cartItemsList");
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-msg">Корзина пуста. Добавьте товары!</div>';
        document.getElementById("cartTotalPrice").innerHTML = "";
        return;
    }
    
    let html = "";
    cart.forEach((item, idx) => {
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <strong>${item.name}</strong><br>
                    ${item.price}₽ x ${item.quantity}
                </div>
                <div class="cart-item-controls">
                    <button class="cart-qty-btn" data-op="dec" data-idx="${idx}">-</button>
                    <span>${item.quantity}</span>
                    <button class="cart-qty-btn" data-op="inc" data-idx="${idx}">+</button>
                    <button class="cart-qty-btn" data-op="del" data-idx="${idx}">🗑</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    
    const total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    document.getElementById("cartTotalPrice").innerHTML = `💰 Итого: ${total} ₽`;
    
    // Обработчики кнопок корзины
    document.querySelectorAll(".cart-qty-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idx = parseInt(btn.dataset.idx);
            const op = btn.dataset.op;
            if (op === "inc") cart[idx].quantity++;
            else if (op === "dec") {
                if (cart[idx].quantity > 1) cart[idx].quantity--;
                else cart.splice(idx, 1);
            } else if (op === "del") cart.splice(idx, 1);
            saveCart();
            renderCartModal();
            updateCartBadge();
        });
    });
}

function checkout() {
    if (cart.length === 0) {
        alert("Корзина пуста, добавьте товары");
        return;
    }
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    alert(`✨ Заказ оформлен! Сумма: ${total} ₽.\nСпасибо, ${currentUser.name}! Наш менеджер свяжется с вами для подтверждения.\n(Демо-режим, без оплаты)`);
    cart = [];
    saveCart();
    renderCartModal();
    updateCartBadge();
    renderCatalog();
}

// ==================== КАТАЛОГ ====================
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
    document.querySelectorAll(".cat-btn").forEach(btn => {
        if (btn.dataset.cat === catId) btn.classList.add("active");
        else btn.classList.remove("active");
    });
}

// ==================== ПРОФИЛЬ ====================
function openProfileModal() {
    document.getElementById("loginName").value = currentUser.name;
    document.getElementById("loginEmail").value = currentUser.email;
    document.getElementById("profileStatus").innerHTML = `👋 Вы вошли как: ${currentUser.name} (${currentUser.email})`;
    document.getElementById("profileModal").style.display = "flex";
}

function saveProfileFromModal() {
    const newName = document.getElementById("loginName").value.trim() || "Гость";
    const newEmail = document.getElementById("loginEmail").value.trim() || "guest@sky.ru";
    currentUser = { name: newName, email: newEmail };
    saveProfile();
    document.getElementById("profileStatus").innerHTML = `✅ Профиль сохранён: ${currentUser.name}`;
    alert("Профиль обновлён (локально)");
    setTimeout(() => document.getElementById("profileModal").style.display = "none", 800);
}

function logoutProfile() {
    currentUser = { name: "Гость", email: "guest@sky.ru" };
    saveProfile();
    document.getElementById("profileStatus").innerHTML = `👋 Вы вышли. Войдите заново`;
    document.getElementById("loginName").value = "Гость";
    document.getElementById("loginEmail").value = "guest@sky.ru";
    alert("Профиль сброшен");
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener("DOMContentLoaded", () => {
    loadCart();
    loadProfile();
    renderCatalog();
    
    // Навигация по категориям
    document.querySelectorAll(".cat-btn").forEach(btn => {
        btn.addEventListener("click", () => setActiveCategory(btn.dataset.cat));
    });
    
    // Кнопки модалок
    document.getElementById("cartBtn").addEventListener("click", () => {
        renderCartModal();
        document.getElementById("cartModal").style.display = "flex";
    });
    
    document.getElementById("profileBtn").addEventListener("click", openProfileModal);
    
    // Закрытие модалок
    document.getElementById("closeCart").addEventListener("click", () => {
        document.getElementById("cartModal").style.display = "none";
    });
    
    document.getElementById("closeProfile").addEventListener("click", () => {
        document.getElementById("profileModal").style.display = "none";
    });
    
    // Закрытие по клику вне модалки
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
            e.target.style.display = "none";
        }
    });
    
    // Кнопки профиля и оформления заказа
    document.getElementById("saveProfileBtn").addEventListener("click", saveProfileFromModal);
    document.getElementById("logoutProfileBtn").addEventListener("click", logoutProfile);
    document.getElementById("checkoutBtn").addEventListener("click", checkout);
});