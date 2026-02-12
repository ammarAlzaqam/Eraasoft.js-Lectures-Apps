//TODO>> variables in memory
{
  // //* Declare
  // let name;
  // //* Assign
  // name = "ammar";
  // //* Print
  // console.log(name);
}

//TODO>> Let Vs Var.
// let has hoisting, var hasn't
// let no re-declare, var can re-declare

//TODO>> Scope
{
  //   let y = 200; // Global Scope
  //   function sayHello() {
  //     let x = 500; // Function Scope
  //     if (x == 200) {
  //       let z = 300; // Block scope
  //     }
  //     function test() {
  //       let h = 500; // Lexical scope
  //     }
  //   }
}

//TODO>> Array
{
  //? Invoke the element form array and (.indexOf, .length)
  {
    // let users = ["Ammar", "Ibrahem", "Baraa", "Yousef"];
    // console.table(users); // to show array data in a table.
    // console.log(users[3]); // output "Yousef" by bracket notation [index].
    // console.log(users.indexOf("Baraa")); // output => 2. This is index of "Baraa" in array.
    // console.log(users.length); // output => 4. This is the array length.
  }

  //? CRUD (Crate, Read, Update, Delete).
  let users = ["Ammar", "Ibrahem", "Baraa", "Yousef"];

  // function بيتم تعريفها قبل التنفيز
  function showUsers() {
    console.clear();
    console.table(users);
  }

  function addNewUserStart() {
    let userName = prompt("Enter your name..");
    users.unshift(userName);
    showUsers();
  }

  function addNewUserEnd() {
    let userName = prompt("Enter your name...");
    users.push(userName);
    showUsers();
  }

  function removeLastUser() {
    users.pop();
    showUsers();
  }

  function removeFirstUser() {
    users.shift();
    showUsers();
  }

  function removeAnyUser() {
    let userIndex = +prompt("Please Enter user index...");
    // delete users[userIndex]; // بتسيب مكان العنصر فاضي
    users.splice(userIndex, 1);
    showUsers();
  }

  function updateUser() {
    let userIndex = +prompt("Enter user Index...");
    let newUserName = prompt("Enter new user name");
    users[userIndex] = newUserName;
    showUsers();
  }
}
