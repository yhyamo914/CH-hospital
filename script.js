// جلب المنتجات من localStorage
function getProducts() {
    return JSON.parse(localStorage.getItem("products") || "[]");
}

// حفظ المنتجات
function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
}

// إضافة منتج
function addProduct() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let desc = document.getElementById("desc").value;
    let imageFile = document.getElementById("image").files[0];

    if (!name || !price || !desc || !imageFile) {
        alert("يرجى ملء جميع البيانات!");
        return;
    }

    let reader = new FileReader();
    reader.onload = function () {
        let imageBase = reader.result; // الصورة Base64

        let products = getProducts();

        products.push({
            id: Date.now(),
            name,
            price,
            desc,
            image: imageBase
        });

        saveProducts(products);
        alert("تم إضافة المنتج بنجاح!");
        location.reload();
    };

    reader.readAsDataURL(imageFile);
}

// حذف منتج
function deleteProduct(id) {
    let products = getProducts();
    products = products.filter(p => p.id !== id);
    saveProducts(products);
    location.reload();
}

// عرض المنتجات في واجهة المتجر
function showProducts() {
    let container = document.getElementById("products");
    if (!container) return;

    let products = getProducts();

    container.innerHTML = "";

    products.forEach(p => {
        container.innerHTML += `
            <div class="product">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p>${p.price} ج.م</p>
                <p>${p.desc}</p>
            </div>
        `;
    });
}

// عرض المنتجات في لوحة التحكم
function showAdminProducts() {
    let container = document.getElementById("adminProducts");
    if (!container) return;

    let products = getProducts();

    container.innerHTML = "";

    products.forEach(p => {
        container.innerHTML += `
            <div class="product">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p>${p.price} ج.م</p>
                <button class="delete-btn" onclick="deleteProduct(${p.id})">حذف</button>
            </div>
        `;
    });
}

showProducts();
showAdminProducts();
