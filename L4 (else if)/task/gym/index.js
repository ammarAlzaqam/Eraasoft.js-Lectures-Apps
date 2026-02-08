//TODO>> 1-Gym Membership Calculator
// Request => Calculate membership cost:
//? inputs

let monthly = 350;
let personalTraining = 200;

//! Enter nofMonths
let nofMonths = +prompt("Enter number of months...");

//* -------------------------------------------------
//? Process

//! 1-Calculate months cost
let finalPrice = monthly * nofMonths;
console.log(nofMonths, " Months price is: ", finalPrice);

//! 2-Discount: 6+M(10%), 12+M(15%)
if (nofMonths >= 6 && nofMonths < 12) {
  let discountFor6M = (10 / 100) * finalPrice;
  console.log("Discount 10 %: - ", discountFor6M);
  finalPrice = finalPrice - discountFor6M;
  console.log("Price after discount: ", finalPrice);
}
if (nofMonths >= 12) {
  let discountFor12M = (15 / 100) * finalPrice;
  console.log("Discount 15 %: - ", discountFor12M);
  finalPrice = finalPrice - discountFor12M;
  console.log("Price after discount: ", finalPrice, " EGP");
}

//! 3-confirm: Add personal training for 200EGP
let wantPersonalTraining = confirm("Do you want personal training?");
if (wantPersonalTraining) {
  finalPrice = finalPrice + personalTraining;
  console.log("Personal Training: ", personalTraining, " EGP");
}

//! 4-Add 14% VAT
let vat = (14 / 100) * finalPrice;
console.log("Vat 14% : ", vat);
finalPrice = finalPrice + vat;

//* -------------------------------------------------
//? output
console.log("Final Price: ", finalPrice, " EGP");
