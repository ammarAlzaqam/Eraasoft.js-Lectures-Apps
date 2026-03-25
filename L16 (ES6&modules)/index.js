// TODO>> ES6
// let, const - hoisting
// interpolation ` ${} `
// async, fetch,
// distracting
//? const (const value, const datatype) object, array, function => Data type
{
  // const users = ["Ahmed", "Ali", "Ammar"]; // array
  // // users = "sayed"; // string
  // users.push("Hossam");
  // users.forEach((el) => console.log(el));
}

//? distracting
{
  // //! array distraction
  // const users = ["Ammar", "Ali", "Hassan"];
  // let [u1, u2, u3] = users;
  // let [, , myUser] = users;
  // console.log(u1);
  // console.log(myUser);
  // // let u1 = users[0];
  // // let u2 = users[1];
  // // let u3 = users[2];
  // //! object distraction
  // const userInfo = {
  //   name: "Ammar",
  //   age: 20,
  //   country: "egypt",
  // };
  // let { age } = userInfo;
  // console.log(age);
}

//? spread operator
{
  // let no1 = [30, 40, 50];
  // let no2 = [60, 70, 80];
  // let newArray = [...no1, 7000, 10, ...no2];
  // console.log(newArray);
  // let userInfo = {
  //   name: "ammar",
  //   age: 24,
  // };
  // let address = {
  //   street: 9,
  //   floor: 4,
  // };
  // let newData = { ...userInfo, ...address };
  // console.timeLog(newData);
}

//? Reset Operator
let average = (...nums) => {
  let sum = nums.reduce((acc, num) => acc + num, 0);
  console.log(sum / nums.length);
};
average(455, 366, 683, 234);

//? Modules
// import { sayHollo } from "./functions.js";
// sayHollo();
