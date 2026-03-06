// TODO>> 1-Country Capital Question.
let q1Feed = document.querySelector("#q1");

function showCountryCapitalAnswer() {
  q1Feed.textContent = "القاهرة";
}

// TODO>> 2-Say Hello System.
let feed2 = document.querySelector("#feed2");
function sayHello() {
  let username = prompt("Enter your name");
  feed2.textContent = `Welcome to you mr.${username}`;
}

// TODO>> 3-Fatora discount
let pricePrevDis = document.querySelector("#pricePrevDis");
let priceAfterDis = document.querySelector("#priceAfterDis");
function makeDiscount() {
  let fatoraPrice = +prompt("Please enter your fatora price.");
  let discount = (10 / 100) * fatoraPrice;
  let finalPrice = fatoraPrice - discount;

  pricePrevDis.textContent = `${fatoraPrice} $`;
  priceAfterDis.textContent = `${finalPrice} $`;
}
