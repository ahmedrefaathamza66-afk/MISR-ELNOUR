// =====================================================
// مصر النور للكابلات - JavaScript
// =====================================================

// =====================================================
// !! تعديل نسبة الخصم هنا مباشرة (المبرمج فقط)
// Change discount percent here — affects ALL prices
// =====================================================
const DISCOUNT_PERCENT = 8;

// =====================================================
// !! تعديل بوت التيليجرام هنا
// =====================================================
const TELEGRAM_BOT_TOKEN = '8654977816:AAEZdJrtDzLuLoCLXauW4tZK2KMX-pD5Gug';
const TELEGRAM_CHAT_ID = '8362428874';

// =====================================================
// بيانات المنتجات الكاملة
// =====================================================
const categories = [
  {
    id: 'thermo4',
    name: 'ترمو (4 طرف)',
    unit: 'مم²',
    icon: '🔌',
    color: '#1e3a6e',
    items: [
      { size: '0.5×4', basePrice: 2600 },
      { size: '0.75×4', basePrice: 3800 },
      { size: '1×4', basePrice: 4500 },
      { size: '1.5×4', basePrice: 6400 },
      { size: '2×4', basePrice: 7800 },
      { size: '2.5×4', basePrice: 10500 },
      { size: '3×4', basePrice: 11700 },
      { size: '4×4', basePrice: 15400 },
      { size: '6×4', basePrice: 22000 },
      { size: '10×4', basePrice: 38300 },
      { size: '16×4', basePrice: 57700 },
      { size: '25×4', basePrice: 92000 },
      { size: '35×4', basePrice: 127000 },
    ],
  },
  {
    id: 'nehyas',
    name: 'نحاس',
    unit: 'مم²',
    icon: '🟠',
    color: '#b45309',
    items: [
      { size: '1', basePrice: 855 },
      { size: '1.5', basePrice: 1240 },
      { size: '2', basePrice: 1640 },
      { size: '2.5', basePrice: 2000 },
      { size: '3', basePrice: 2425 },
      { size: '4', basePrice: 3170 },
      { size: '6', basePrice: 4750 },
      { size: '10', basePrice: 7800 },
      { size: '16', basePrice: 12500 },
      { size: '25', basePrice: 19600 },
      { size: '35', basePrice: 26800 },
      { size: '50', basePrice: 39000 },
      { size: '70', basePrice: 54500 },
      { size: '95', basePrice: 75000 },
      { size: '120', basePrice: 95000 },
    ],
  },
  {
    id: 'shaar',
    name: 'شعر',
    unit: 'مم²',
    icon: '🔶',
    color: '#d97706',
    items: [
      { size: '1', basePrice: 875 },
      { size: '1.5', basePrice: 1265 },
      { size: '2', basePrice: 1670 },
      { size: '2.5', basePrice: 2050 },
      { size: '3', basePrice: 2470 },
      { size: '4', basePrice: 3230 },
      { size: '6', basePrice: 4820 },
      { size: '10', basePrice: 7950 },
      { size: '16', basePrice: 12800 },
      { size: '25', basePrice: 20000 },
      { size: '35', basePrice: 27300 },
      { size: '50', basePrice: 39800 },
      { size: '70', basePrice: 55700 },
      { size: '95', basePrice: 77000 },
      { size: '120', basePrice: 98000 },
    ],
  },
  {
    id: 'aluminium',
    name: 'الألمنيوم',
    unit: 'مم²',
    icon: '⚡',
    color: '#6b7280',
    items: [
      { size: '10', basePrice: 1200 },
      { size: '16', basePrice: 1820 },
      { size: '25', basePrice: 2750 },
      { size: '35', basePrice: 3750 },
      { size: '50', basePrice: 5450 },
      { size: '70', basePrice: 7650 },
      { size: '95', basePrice: 10200 },
      { size: '120', basePrice: 12900 },
    ],
  },
  {
    id: 'thermo2',
    name: 'ترمو (2 طرف)',
    unit: 'مم²',
    icon: '🔵',
    color: '#1d4ed8',
    items: [
      { size: '0.5×2', basePrice: 1360 },
      { size: '0.75×2', basePrice: 1925 },
      { size: '1×2', basePrice: 2300 },
      { size: '1.5×2', basePrice: 3100 },
      { size: '2×2', basePrice: 4000 },
      { size: '2.5×2', basePrice: 5200 },
      { size: '3×2', basePrice: 6100 },
      { size: '4×2', basePrice: 7700 },
      { size: '6×2', basePrice: 11550 },
      { size: '10×2', basePrice: 19000 },
      { size: '16×2', basePrice: 29000 },
    ],
  },
  {
    id: 'thermo3',
    name: 'ترمو (3 طرف)',
    unit: 'مم²',
    icon: '🟢',
    color: '#15803d',
    items: [
      { size: '0.5×3', basePrice: 2020 },
      { size: '0.75×3', basePrice: 3100 },
      { size: '1×3', basePrice: 3350 },
      { size: '1.5×3', basePrice: 4850 },
      { size: '2×3', basePrice: 6000 },
      { size: '2.5×3', basePrice: 8000 },
      { size: '3×3', basePrice: 8700 },
      { size: '4×3', basePrice: 11800 },
      { size: '6×3', basePrice: 16700 },
      { size: '10×3', basePrice: 27200 },
      { size: '16×3', basePrice: 43000 },
    ],
  },
  {
    id: 'smaaat',
    name: 'سماعات / محدول',
    unit: 'مم²',
    icon: '🎙️',
    color: '#7c3aed',
    items: [
      { size: '0.5×2 ألوان', basePrice: 945 },
      { size: '1×2 ألوان', basePrice: 1800 },
      { size: '0.5×2 شفاف', basePrice: 1000 },
      { size: '1×2 شفاف', basePrice: 1900 },
      { size: '0.5×2 محدول', basePrice: 970 },
      { size: '1×2 محدول', basePrice: 1770 },
      { size: '2×2 محدول', basePrice: 3500 },
    ],
  },
  {
    id: 'telephone',
    name: 'تليفون',
    unit: 'جوز',
    icon: '📞',
    color: '#0891b2',
    items: [
      { size: '1 جوز', basePrice: 650 },
      { size: '2 جوز', basePrice: 1200 },
      { size: '3 جوز', basePrice: 1775 },
      { size: '4 جوز', basePrice: 2420 },
      { size: '5 جوز', basePrice: 3000 },
      { size: '6 جوز', basePrice: 3500 },
      { size: '10 جوز', basePrice: 7000 },
    ],
  },
  {
    id: 'control',
    name: 'كنترول',
    unit: 'مم²',
    icon: '🟡',
    color: '#ca8a04',
    items: [
      { size: '0.5×7', basePrice: 4300 },
      { size: '1×7', basePrice: 7950 },
    ],
  },
];

// =====================================================
// Helper functions
// =====================================================
function calcDiscounted(basePrice) {
  return Math.round(basePrice * (1 - DISCOUNT_PERCENT / 100));
}

function fmt(n) {
  return Number(n).toLocaleString('en-EG');
}

// =====================================================
// Cart State
// =====================================================
let cart = []; // { id, categoryId, categoryName, size, unit, basePrice, discountedPrice, qty }

function addToCart(catId, itemSize) {
  const cat = categories.find(c => c.id === catId);
  const item = cat.items.find(i => i.size === itemSize);
  const id = `${catId}__${itemSize}`;
  const discountedPrice = calcDiscounted(item.basePrice);

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id, categoryId: catId, categoryName: cat.name,
      size: itemSize, unit: cat.unit,
      basePrice: item.basePrice, discountedPrice,
      qty: 1,
    });
  }
  updateCartBadge();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartBadge();
  renderCartBody();
}

function updateCartQty(id, qty) {
  if (qty <= 0) {
    removeFromCart(id);
    return;
  }
  const item = cart.find(c => c.id === id);
  if (item) item.qty = qty;
  updateCartBadge();
  renderCartBody();
}

function clearCart() {
  cart = [];
  updateCartBadge();
}

function totalItems()     { return cart.reduce((s, c) => s + c.qty, 0); }
function totalPrice()     { return cart.reduce((s, c) => s + c.discountedPrice * c.qty, 0); }
function totalBasePrice() { return cart.reduce((s, c) => s + c.basePrice * c.qty, 0); }
function totalSavings()   { return totalBasePrice() - totalPrice(); }

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const count = totalItems();
  if (count > 0) {
    badge.textContent = count;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

// =====================================================
// Cart Modal State
// =====================================================
let cartStep = 'cart'; // 'cart' | 'checkout' | 'success'
let formData = { name: '', phone: '', address: '', notes: '' };

function openCart() {
  cartStep = 'cart';
  document.getElementById('cart-modal').classList.remove('hidden');
  renderCartBody();
}

function closeCart() {
  document.getElementById('cart-modal').classList.add('hidden');
  if (cartStep === 'success') {
    formData = { name: '', phone: '', address: '', notes: '' };
    cartStep = 'cart';
  }
}

document.getElementById('cart-modal').addEventListener('click', function(e) {
  if (e.target === this) closeCart();
});

function renderCartBody() {
  const modalTitle = document.getElementById('modal-title');
  const modalSub   = document.getElementById('modal-sub');
  const body       = document.getElementById('modal-body');

  if (cartStep === 'cart') {
    modalTitle.textContent = '🛒 سلة التسوق';
    modalSub.textContent = totalItems() > 0 ? `${totalItems()} منتج في السلة` : '';

    if (cart.length === 0) {
      body.innerHTML = `
        <div class="empty-cart">
          <div class="empty-icon">🛒</div>
          <div class="empty-title">السلة فارغة</div>
          <div class="empty-desc">تصفح الأسعار وأضف المنتجات التي تريدها</div>
          <button class="btn-browse" onclick="closeCart()">تصفح الأسعار</button>
        </div>`;
      return;
    }

    let itemsHTML = cart.map(item => `
      <div class="cart-item">
        <div class="ci-info">
          <div class="ci-cat">${item.categoryName}</div>
          <div class="ci-size">مقاس: <span class="num">${item.size}</span> ${item.unit}</div>
          <div class="ci-price"><span class="num">${fmt(item.discountedPrice)}</span> ج.م / لفة</div>
        </div>
        <div class="ci-qty">
          <button class="qty-btn qty-minus" onclick="updateCartQty('${item.id}', ${item.qty - 1})">−</button>
          <span class="qty-val num">${item.qty}</span>
          <button class="qty-btn qty-plus" onclick="updateCartQty('${item.id}', ${item.qty + 1})">+</button>
        </div>
        <div class="ci-total">
          <div class="ci-total-label">الإجمالي</div>
          <div class="ci-total-val"><span class="num">${fmt(item.discountedPrice * item.qty)}</span> ج.م</div>
        </div>
        <button class="ci-del" onclick="removeFromCart('${item.id}')">🗑</button>
      </div>
    `).join('');

    body.innerHTML = `
      ${itemsHTML}
      <div class="cart-summary">
        <div class="summary-row">
          <span class="summary-label">المجموع قبل الخصم:</span>
          <span class="num" style="text-decoration:line-through;color:#94a3b8">${fmt(totalBasePrice())} ج.م</span>
        </div>
        <div class="summary-row">
          <span class="summary-saving">الخصم (${DISCOUNT_PERCENT}%):</span>
          <span class="summary-saving-val num">-${fmt(totalSavings())} ج.م</span>
        </div>
        <div class="summary-total">
          <span class="summary-total-label">الإجمالي النهائي:</span>
          <span class="summary-total-val num">${fmt(totalPrice())} ج.م</span>
        </div>
      </div>
      <div class="cart-actions">
        <button class="btn-checkout" onclick="goToCheckout()">إتمام الطلب ←</button>
        <button class="btn-clear" onclick="clearCart();renderCartBody()">حذف الكل</button>
      </div>`;
  }

  if (cartStep === 'checkout') {
    modalTitle.textContent = '📋 إتمام الطلب';
    modalSub.textContent = '';

    const miniRows = cart.map(item => `
      <div class="mini-row">
        <span class="mini-row-label">${item.categoryName} — <span class="num">${item.size}</span> × <span class="num">${item.qty}</span></span>
        <span class="mini-row-val num">${fmt(item.discountedPrice * item.qty)} ج.م</span>
      </div>`).join('');

    body.innerHTML = `
      <p style="color:#64748b;font-size:14px;margin-bottom:20px">أدخل بياناتك </p>
      <form id="checkout-form" onsubmit="submitOrder(event)">
        <div class="form-group">
          <label class="form-label">الاسم الكامل *</label>
          <input class="form-input" type="text" name="name" placeholder="أدخل اسمك" value="${formData.name}" required />
        </div>
        <div class="form-group">
          <label class="form-label">رقم الهاتف *</label>
          <input class="form-input" type="tel" name="phone" placeholder="01xxxxxxxxx" style="direction:ltr" value="${formData.phone}" required />
        </div>
        <div class="form-group">
          <label class="form-label">العنوان</label>
          <input class="form-input" type="text" name="address" placeholder="المحافظة / المدينة / الشارع" value="${formData.address}" />
        </div>
        <div class="form-group">
          <label class="form-label">ملاحظات إضافية</label>
          <textarea class="form-textarea" name="notes" placeholder="أي ملاحظات على الطلب..." rows="3">${formData.notes}</textarea>
        </div>
        <div class="mini-summary">
          <div class="mini-summary-title">ملخص الطلب:</div>
          ${miniRows}
          <div class="mini-total">
            <span class="mini-total-label">الإجمالي:</span>
            <span class="mini-total-val num">${fmt(totalPrice())} ج.م</span>
          </div>
        </div>
        <div class="cart-actions">
          <button type="button" class="btn-back" onclick="goBackToCart()">← رجوع</button>
          <button type="submit" class="btn-submit" id="submit-btn">📤 تأكيد الطلب  </button>
        </div>
      </form>`;
  }

  if (cartStep === 'success') {
    modalTitle.textContent = '✅ تم الطلب';
    modalSub.textContent = '';
    body.innerHTML = `
      <div class="success-box">
        <div class="success-icon">✅</div>
        <h3 class="success-title">تم إرسال طلبك بنجاح!</h3>
        <p class="success-desc">تم إرسال طلبك عبر تيليجرام</p>
        <p class="success-hint">سيتواصل معك فريقنا في أقرب وقت على الرقم الذي أدخلته</p>
        <div class="success-actions">
          <button class="btn-close-success" onclick="closeCart()">إغلاق</button>
          <a href="https://wa.me/201001897864" target="_blank" class="btn-wa-success">📱 تواصل واتساب</a>
        </div>
      </div>`;
  }
}

function goToCheckout() {
  if (cart.length === 0) return;
  cartStep = 'checkout';
  renderCartBody();
}

function goBackToCart() {
  // Save form data
  const f = document.getElementById('checkout-form');
  if (f) {
    formData.name    = f.name.value;
    formData.phone   = f.phone.value;
    formData.address = f.address.value;
    formData.notes   = f.notes.value;
  }
  cartStep = 'cart';
  renderCartBody();
}

async function submitOrder(e) {
  e.preventDefault();
  const f = e.target;
  formData.name    = f.name.value;
  formData.phone   = f.phone.value;
  formData.address = f.address ? f.address.value : '';
  formData.notes   = f.notes ? f.notes.value : '';

  const btn = document.getElementById('submit-btn');
  btn.disabled = true;
  btn.textContent = '⏳ جاري الإرسال...';

  const lines = [];
  lines.push('🛒 *طلب جديد - مصر النور للكابلات*');
  lines.push('─────────────────────');
  lines.push(`👤 *الاسم:* ${formData.name}`);
  lines.push(`📞 *الهاتف:* ${formData.phone}`);
  if (formData.address) lines.push(`📍 *العنوان:* ${formData.address}`);
  if (formData.notes)   lines.push(`📝 *ملاحظات:* ${formData.notes}`);
  lines.push('─────────────────────');
  lines.push('📦 *تفاصيل الطلب:*');
  cart.forEach((item, i) => {
    lines.push(
      `${i + 1}. ${item.categoryName} — ${item.size} ${item.unit}\n` +
      `   الكمية: ${item.qty} لفة × ${fmt(item.discountedPrice)} ج.م = ${fmt(item.discountedPrice * item.qty)} ج.م`
    );
  });
  lines.push('─────────────────────');
  lines.push(`💰 *إجمالي قبل الخصم:* ${fmt(totalBasePrice())} ج.م`);
  lines.push(`🎁 *الخصم (${DISCOUNT_PERCENT}%):* -${fmt(totalSavings())} ج.م`);
  lines.push(`✅ *الإجمالي النهائي:* ${fmt(totalPrice())} ج.م`);
  lines.push('─────────────────────');
  lines.push('⚡ تم الإرسال من موقع مصر النور للكابلات');

  const message = lines.join('\n');

  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message, parse_mode: 'Markdown' }),
    });
    if (res.ok) {
      clearCart();
      cartStep = 'success';
      renderCartBody();
    } else {
      alert('حدث خطأ في الإرسال، يرجى التواصل عبر واتساب على الرقم 01001897864');
      btn.disabled = false;
      btn.textContent = '📤 تأكيد الطلب عبر تيليجرام';
    }
  } catch {
    alert('تعذر الإرسال، يرجى التواصل عبر واتساب على الرقم 01001897864');
    btn.disabled = false;
    btn.textContent = '📤 تأكيد الطلب عبر تيليجرام';
  }
}

// =====================================================
// Price Table
// =====================================================
let activeTabId = categories[0].id;
const addedBtns = {}; // track added state

function renderTabs() {
  const tabsEl = document.getElementById('cat-tabs');
  tabsEl.innerHTML = categories.map(cat => `
    <button
      class="tab-btn"
      id="tab-${cat.id}"
      style="border-color:${activeTabId === cat.id ? cat.color : '#e2e8f0'};
             background:${activeTabId === cat.id ? cat.color : '#fff'};
             color:${activeTabId === cat.id ? '#fff' : '#374151'}"
      onclick="switchTab('${cat.id}')"
    >${cat.icon} ${cat.name}</button>
  `).join('');
}

function renderTable() {
  const cat = categories.find(c => c.id === activeTabId);

  // Header
  document.getElementById('table-header').innerHTML = `
    <div style="background:${cat.color};padding:18px 28px;display:flex;align-items:center;gap:12px">
      <span class="th-icon">${cat.icon}</span>
      <div>
        <div class="th-name">${cat.name}</div>
        <div class="th-sub">قائمة الأسعار — اللفة <span class="num">100</span> متر — خصم <span class="num">${DISCOUNT_PERCENT}</span>%</div>
      </div>
    </div>`;

  // Rows
  const tbody = document.getElementById('price-tbody');
  tbody.innerHTML = cat.items.map(item => {
    const disc = calcDiscounted(item.basePrice);
    const save = item.basePrice - disc;
    const btnId = `btn-${cat.id}-${item.size}`.replace(/[^a-zA-Z0-9-_]/g, '_');
    return `
      <tr>
        <td class="text-right" style="font-weight:700;color:#1e3a6e">
          <span class="num">${item.size}</span>
          <span style="font-size:12px;color:#64748b"> ${cat.unit}</span>
        </td>
        <td><span class="base-price num">${fmt(item.basePrice)}</span></td>
        <td><span class="disc-price num">${fmt(disc)}</span></td>
        <td><span class="saving-badge num">-${fmt(save)}</span></td>
        <td>
          <button class="add-btn" id="${btnId}"
            onclick="handleAddBtn('${cat.id}','${item.size}','${btnId}')">
            + أضف للسلة
          </button>
        </td>
      </tr>`;
  }).join('');

  // Footer
  document.getElementById('table-footer').innerHTML =
    `* جميع الأسعار للفة الواحدة (<span class="num">100</span> متر) — الخصم <span class="num">${DISCOUNT_PERCENT}</span>% مطبق تلقائياً`;
}

function handleAddBtn(catId, size, btnId) {
  addToCart(catId, size);
  const btn = document.getElementById(btnId);
  if (btn) {
    btn.textContent = '✓ تمت الإضافة';
    btn.classList.add('added');
    setTimeout(() => {
      btn.textContent = '+ أضف للسلة';
      btn.classList.remove('added');
    }, 1800);
  }
}

function switchTab(catId) {
  activeTabId = catId;
  renderTabs();
  renderTable();
}

// =====================================================
// Category Cards
// =====================================================
function renderCategoryCards() {
  const grid = document.getElementById('categories-grid');
  grid.innerHTML = categories.map(cat => {
    const minPrice = Math.min(...cat.items.map(i => calcDiscounted(i.basePrice)));
    const maxPrice = Math.max(...cat.items.map(i => calcDiscounted(i.basePrice)));
    const shownSizes = cat.items.slice(0, 6);
    const extraCount = cat.items.length - 6;

    const chips = shownSizes.map(i =>
      `<span class="size-chip num" style="background:${cat.color}22;color:${cat.color}">${i.size}</span>`
    ).join('');
    const extra = extraCount > 0
      ? `<span class="size-chip" style="background:#f1f5f9;color:#64748b">+<span class="num">${extraCount}</span> أكثر</span>`
      : '';

    return `
      <div class="cat-card" onclick="scrollToSection('prices');switchTab('${cat.id}')">
        <div class="cat-card-head" style="background:${cat.color}">
          <div class="cat-icon-wrap">${cat.icon}</div>
          <div>
            <div class="cat-card-title">${cat.name}</div>
            <div class="cat-card-count"><span class="num">${cat.items.length}</span> مقاس متوفر</div>
          </div>
        </div>
        <div class="cat-card-body">
          <div class="sizes-label">المقاسات المتوفرة:</div>
          <div class="sizes-wrap">${chips}${extra}</div>
          <div class="price-range">
            <div class="price-range-label">نطاق الأسعار (بعد الخصم):</div>
            <div class="price-range-vals">
              <span class="price-val num">${fmt(minPrice)} ج.م</span>
              <span class="price-arr">→</span>
              <span class="price-val num">${fmt(maxPrice)} ج.م</span>
            </div>
          </div>
          <button class="cat-btn" style="background:${cat.color}" onclick="event.stopPropagation();scrollToSection('prices');switchTab('${cat.id}')">
            عرض الأسعار الكاملة ←
          </button>
        </div>
      </div>`;
  }).join('');
}

// =====================================================
// Gallery / Lightbox
// =====================================================
const galleryImages = [
  { src: '../images/product1.jpg', title: 'كابل نحاس 6 مم²', desc: 'كابل مقاوم للحريق — نحاس مستورد بدرجة نقاء 99.9%' },
  { src: '../images/product2.jpg', title: 'مخزن الكابلات',   desc: 'مخزن متكامل بجميع أنواع وأحجام الكابلات' },
  { src: '../images/product3.jpg', title: 'نحاس عالي النقاء', desc: 'مقطع عرضي لكابل النحاس بدرجة نقاء 99.9%' },
];
let lbIndex = 0;

function openLightbox(i) {
  lbIndex = i;
  const img  = galleryImages[i];
  document.getElementById('lb-img').src   = img.src;
  document.getElementById('lb-title').textContent = img.title;
  document.getElementById('lb-desc').textContent  = img.desc;
  document.getElementById('lightbox').classList.remove('hidden');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
}

function lbPrev() {
  lbIndex = lbIndex > 0 ? lbIndex - 1 : galleryImages.length - 1;
  openLightbox(lbIndex);
}

function lbNext() {
  lbIndex = lbIndex < galleryImages.length - 1 ? lbIndex + 1 : 0;
  openLightbox(lbIndex);
}

// =====================================================
// Navigation
// =====================================================
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Nav links
document.querySelectorAll('.nav-btn[data-section]').forEach(btn => {
  btn.addEventListener('click', function() {
    scrollToSection(this.dataset.section);
    // Mobile menu close
    document.getElementById('mobile-nav').classList.add('hidden');
    document.getElementById('mobile-nav').classList.remove('active');
  });
});

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
  const nav = document.getElementById('mobile-nav');
  nav.classList.toggle('hidden');
  nav.classList.toggle('active');
  this.textContent = nav.classList.contains('hidden') ? '☰' : '✕';
});

// Active section on scroll
const sectionIds = ['home', 'products', 'prices', 'gallery', 'contact'];
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const el = document.getElementById(sectionIds[i]);
    if (el && el.offsetTop <= scrollY) {
      document.querySelectorAll('.nav-btn[data-section]').forEach(b => b.classList.remove('active'));
      document.querySelectorAll(`.nav-btn[data-section="${sectionIds[i]}"]`).forEach(b => b.classList.add('active'));
      break;
    }
  }
});

// Cart button
document.getElementById('cart-btn').addEventListener('click', openCart);

// =====================================================
// Initialize discount labels
// =====================================================
function initDiscountLabels() {
  const els = {
    'header-discount':   `${DISCOUNT_PERCENT}`,
    'hero-discount':     `<span class="accent num">${DISCOUNT_PERCENT}%</span>`,
    'stat-discount':     `${DISCOUNT_PERCENT}%`,
    'products-discount': `<span class="accent num">${DISCOUNT_PERCENT}%</span>`,
    'prices-discount':   `${DISCOUNT_PERCENT}`,
    'footer-discount':   `<span class="num">${DISCOUNT_PERCENT}%</span>`,
  };
  for (const [id, val] of Object.entries(els)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  }
  document.getElementById('footer-year').textContent = new Date().getFullYear();
}

// =====================================================
// Boot
// =====================================================
document.addEventListener('DOMContentLoaded', function() {
  initDiscountLabels();
  renderCategoryCards();
  renderTabs();
  renderTable();
});
