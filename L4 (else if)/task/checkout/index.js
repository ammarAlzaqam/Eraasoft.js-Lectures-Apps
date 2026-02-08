//TODO>> 2-Simple Checkout
// Request => Calculate Items price
//? inputs

let shippingCost = 60;
let promoCode = "SAVE10";

//! Enter Item price and quantity
let itemPrice = +prompt("Enter Item Price...");
let quantity = +prompt("Enter Item quantity...");

//* -------------------------------------------------
//? Processing
//! 1-Calculate Items price
let subtotal = itemPrice * quantity;
console.log("Items cost: ", subtotal);

//! 2-Free shipping if subtotal >= 1000 EGP., otherwise 60 EGP
if (subtotal >= 1000) {
  console.log("You get free shipping 🎯");
} else {
  subtotal = subtotal + shippingCost;
  console.log("Shipping cost: ", shippingCost);
}

//! 3-Apply SAVE10 coupon for 10% discount.
let userPromoCode = prompt("Enter promo code SAVE10 to get 10% discount ✅");
if (userPromoCode == promoCode) {
  let promoDiscount = (10 / 100) * subtotal;
  subtotal = subtotal - promoDiscount;
  console.log("You get discount 10%: -", promoDiscount);
} else {
  console.log("No discount: Invalid promo code ❗");
}

//! 4-Add 14% VAT
let vatValue = (14 / 100) * subtotal;
subtotal = subtotal + vatValue;
console.log("Vat 14 % : ", vatValue);

//* -------------------------------------------------
//? output
console.log("Total Price: ", subtotal);
