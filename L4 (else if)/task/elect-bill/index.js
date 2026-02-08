//TODO>> 3-Electricity Bill
// Request => Calculate electricity cost:
//? inputs
let until100CostPerOne = 0.75;
let restCostPerOne = 1.2;
let serviceFee = 5;
let finalElectCost = 0;

//! Enter Electricity quantity
let electQ = +prompt("Enter Electricity quantity...");

// //* -------------------------------------------------
//? process
//! 1-Calculate electricity cost (first 100 KWh, rest)
if (electQ > 100) {
  let until100Q = 100;
  let restQ = electQ - until100Q;

  let until100Cost = until100Q * until100CostPerOne;
  console.log("First 100 KWh cost: ", until100Cost, "EGP");
  let restCost = restQ * restCostPerOne;
  console.log("rest cost for " + restQ + " KWh :", restCost, "EGP");
  finalElectCost = until100Cost + restCost;
} else {
  finalElectCost = electQ * until100CostPerOne;
  console.log(electQ + " KWh cost: ", finalElectCost, "EGP");
}

//! 2-Confirm service fee 5 EGP (Optional)
let applyServiceFee = confirm("Do you want to pay service fee 5EGP? 🥰");
if (applyServiceFee) {
  finalElectCost = finalElectCost + serviceFee;
  console.log("Service fee: ", serviceFee);
}

//! 3-Add 14% VAT
let electVat = (14 / 100) * finalElectCost;
console.log("Vat 14 % : ", electVat);
finalElectCost = finalElectCost + electVat;

// //* -------------------------------------------------
//? output
console.log("Final Electricity const : ", finalElectCost, "EGP");
