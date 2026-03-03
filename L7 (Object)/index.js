// Object Based Language

//TODO>> CRUD System (Phones Store);
let phones = [
  {
    name: "iPhone X",
    price: 500,
    qty: 10,
  },
  {
    name: "iPhone 11",
    price: 550,
    qty: 7,
  },
  {
    name: "iPhone 12",
    price: 600,
    qty: 5,
  },
];

//* Read
function showPhones() {
  console.clear();
  console.table(phones);
}

//* Create
function addNewPhone() {
  let phoneName = prompt("Enter Phone Name");
  let phonePrice = +prompt("Enter Phone Price");
  let phoneQty = +prompt("Enter Phone Qty");

  let phone = {
    name: phoneName,
    price: phonePrice,
    qty: phoneQty,
  };

  phones.push(phone);
  showPhones();
}

//* Update
function updatePhoneName() {
  let phoneIndex = +prompt("Enter Phone Index you want to update");
  let newPhoneName = prompt("Enter new phone name.");

  phones[phoneIndex].name = newPhoneName;

  showPhones();
}

function updatePhonePrice() {
  let phoneIndex = +prompt("Enter Phone Index you want to update");
  let newPhonePrice = +prompt("Enter new phone Price.");

  phones[phoneIndex].price = newPhonePrice;

  showPhones();
}

function updatePhoneQty() {
  let phoneIndex = +prompt("Enter Phone Index you want to update");
  let newPhoneQty = +prompt("Enter new phone quantity.");

  phones[phoneIndex].qty = newPhoneQty;

  showPhones();
}

//* Delete
function DeletePhone() {
  let phoneIndex = +prompt("Enter phone index you want to delete");
  phones.splice(phoneIndex, 1);

  showPhones();
}
