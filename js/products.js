const productList = document.getElementById('product-list');
let products = []; // سيتم تحميل المنتجات هنا

function renderProducts() {
  productList.innerHTML = '';
  products.slice(0, 20).forEach((product, index) => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p>`;
    productList.appendChild(div);
  });
}

renderProducts();
