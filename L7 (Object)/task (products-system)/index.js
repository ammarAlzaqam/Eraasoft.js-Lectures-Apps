let products = [
  {
    name: "Iphone x",
    price: 450,
    qty: 7,
  },
  {
    name: "Iphone 10",
    price: 550,
    qty: 9,
  },
  {
    name: "Samsung Galaxy S9",
    price: 650,
    qty: 15,
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    price: 750,
    qty: 15,
  },
];

function showProducts() {
  console.clear();
  console.table(products);
}

function addNewProducts() {
  let product = {
    name: prompt("Please enter product name..."),
    price: +prompt("Please enter product price..."),
    qty: +prompt("Please enter product quantity..."),
  };
  products.push(product);
  showProducts();
}

function removeProducts() {
  let productIndex = +prompt("Enter index of product you want to delete...");
  products.splice(productIndex, 1);
  showProducts();
}

function updateProductName() {
  let productIndex = +prompt("Enter product index you want to edit...");
  let newValue = prompt("Enter new product name...");
  products[productIndex].name = newValue;
  showProducts();
}

function updateProductPrice() {
  let productIndex = +prompt("Enter product index you want to edit...");
  let newValue = +prompt("Enter new product price...");
  products[productIndex].price = newValue;
  showProducts();
}

function updateProductQty() {
  let productIndex = +prompt("Enter product index you want to edit...");
  let newValue = +prompt("Enter new product quantity...");
  products[productIndex].qty = newValue;
  showProducts();
}
