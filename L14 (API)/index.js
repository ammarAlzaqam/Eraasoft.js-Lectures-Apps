// MVC Design Pattern
// Modal => Data (Backend)
// View => HTML
// Controller => JS (Render Data form model to view)

// Server (PC)

// GUI - Command Lines

//  UI => User Interface
// API => Application Programming Interface

// Backend (Data)
// Front (UI)
// Fetch from Backend

// Request (JSON)
// X  ML(Markup Language);
// HT ML
// AJAX Asynchronous JS And XML (Old)
// let req = new XMLHttpRequest();
// Fetch (New)

// API : xmlHTTPRequest => fetch => axios

// Data from Backend (Data, Error)

// TODO>> Promise
// bike - success
// let success = confirm("هل نجحت");
// let bikePromise = new Promise((resolve, reject) => {
//   if (success) {
//     resolve("مبرووك هجيبلك عجلة");
//   } else {
//     reject("جهز نفسك عشان انا هنفخك");
//   }
// });

// bikePromise
//   .then((res) => {
//     console.log(res);
//     console.log("ان بابا ميسحب الفلوس وبعدين العجلة");
//   })
//   .catch((rej) => {
//     console.log(rej);
//     console.log("هيجيب منفاخ ويبدأ ينفخ");
//   })
//   .finally(() => {
//     console.log("بابا هيقول لعمو انك نجح");
//   });

// data from back end
// TODO>> Loader Example
// let loaderWrapper = document.querySelector("#loader-wrapper");
// const getData = () => {
//   loaderWrapper.style.display = "flex";
//   fetch("https://fakestoreapi.com/products") // ajax request Promise()
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => {
//       alert("Error Happened => " + err);
//     })
//     .finally(() => {
//       loaderWrapper.style.display = "none";
//     });
// };

// TODO>> OOP (Object Oriented Programming)
// product(Object) - BluePrint(Class)

class User {
  constructor(name, age, email) {
    this.userName = name;
    this.age = age;
    this.email = email;
  }
}

let user1 = new User("Ammar", 24, "ammar@cloud.com");
let user2 = new User("Hassan", 30, "hassan@cloud.com");

console.log(user1);

// date
let time = new Date();
console.log(time);
