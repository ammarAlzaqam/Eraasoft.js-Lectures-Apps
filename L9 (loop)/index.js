//TODO>> Loops
{
  //   //! for loop
  //   let names = ["Ammar", "Yousef", "Habiba", "Braa", "Ibrahem"];
  //   for (let index = 0; index < names.length; index++) {
  //     console.log(names[index]);
  //   }
  //   //! forEach (for arrays)
  //   names.forEach((el, i) => console.log(`${i + 1}-${el}`)); // callback function
}

//TODO>> Arrow function
{
  //! problem for function without hoisting
  // sayHello(); //*1 Can invoke function before initialization
  // let msg = "Welcome user";
  // function sayHello() {
  //   console.log(msg);
  // }
  // function sayHello() {}
  // function sayHello() {} //*2 Can names two function with same name

  //! arrow function with hoisting
  // sayHello(); //* not allow (Cannot access 'sayHello' before initialization)
  let sayHello = () => console.log("welcome");
  sayHello();
}
