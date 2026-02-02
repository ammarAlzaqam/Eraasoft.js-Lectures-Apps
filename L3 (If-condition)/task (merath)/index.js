//TODO>> تطبيق حساب قيمة الميراث
//? الولد بيورث ضعف البنت
//? الزوجة بتورث ال 1/8
//! input
let merathValue = +prompt("ادخل قيمة الميراث...");
let nofBoys = +prompt("ادخل عدد الاولاد...");
let nofGirls = +prompt("ادخل عدد البنات...");

//! process
//* 1- if has wife calculate wife merath
let hasWife = confirm("هل الزوجه حية");
if (hasWife) {
  let wifeMerath = merathValue / 8;
  merathValue = merathValue - wifeMerath;
  console.log("حق الوزجه من الميراث هو: ", wifeMerath);
}

//* 2- calculate boys and girls merath
let arrowValue = (1 / (nofBoys * 2 + nofGirls)) * merathValue;
let boyMerath = arrowValue * 2;
let girlMerath = arrowValue;

//! output
console.log("حق الولد من الميراث هو: ", boyMerath);
console.log("حق البنت من الميراث هو: ", girlMerath);
