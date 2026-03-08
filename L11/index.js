let products = [
  {
    name: "iPhone X",
    price: 400,
    img: "./images/products/iPhoneX.jpg",
  },
  {
    name: "iPhone 12",
    price: 500,
    img: "./images/products/iPhone12.jpg",
  },
  {
    name: "iPhone 13",
    price: 650,
    img: "./images/products/iPhone13.jpg",
  },
  {
    name: "iPhone 15",
    price: 800,
    img: "./images/products/iPhone15.jpg",
  },
  {
    name: "iPhone 17 Pro Max",
    price: 1200,
    img: "./images/products/iPhone17.jpg",
  },
];

let cart = [];

//TODO>> Render Data
let productsDiv = document.querySelector("#productsDiv");

let showProducts = () => {
  products.forEach((p, i) => {
    productsDiv.innerHTML += `
        <div class="col-4">
            <div class="card p-3 shadow">
                <img class="card-img-top object-fit-contain" height="300"
                    src="${p.img}"
                    alt="product-img">
                <div class="card-body pb-0">
                    <h5 class="card-title">${p.name}</h5>
                    <p class="card-text mb-3">Price : $ ${p.price}</p>
                    <a href="#" class="btn btn-primary col-12" onclick="addToCart(${i})">Add to cart</a>
                </div>
            </div>
        </div>
    `;
  });
};
showProducts();

//TODO> >Render Cart Products
let tableBody = document.querySelector("table tbody");
let totalProductsPrice = document.querySelector("#totalProductsPrice");

let showCart = () => {
  tableBody.innerHTML = "";
  totalProductsPrice.textContent = 0;
  cart.forEach(({ name, price, qty }, i) => {
    tableBody.innerHTML += `
    <tr>
        <td>${i + 1}</td>
        <td>${name}</td>
        <td>${price} $</td>
        <td class="d-flex align-items-center gap-3">
            <button class="btn btn-danger" onclick="decreaseQty(${i})">-</button>
            <p>${qty}</p>
            <button class="btn btn-success" onclick="increaseQty(${i})">+</button>
        </td>
        <td>${price * qty} $</td>
    </tr>
    `;
    totalProductsPrice.textContent =
      +totalProductsPrice.textContent + price * qty;
  });
};
showCart();

//TODO>> Add to cart functionality & Change qty
let addToCart = (i) => {
  let product = products[i];
  let cartProduct = cart.find(
    (cartEl) =>
      cartEl.name.trim().toLowerCase() == product.name.trim().toLowerCase(),
  );

  if (cartProduct) {
    cartProduct.qty++;
  } else {
    product.qty = 1;
    cart.push(product);
  }
  showCart();
};

let increaseQty = (i) => {
  cart[i].qty++;
  showCart();
};

let decreaseQty = (i) => {
  pQty = cart[i].qty;

  if (pQty > 1) cart[i].qty--;
  else if (pQty == 1) {
    cart.splice(i, 1);
  } else {
    return;
  }
  showCart();
};
