//TODO>> Show user data from localStorage
let userData = JSON.parse(localStorage.getItem("userData"));
let avatarImg = document.querySelector("#avatarImg");
let name = document.querySelector("#name");
let username = document.querySelector("#username");

let successDepositSound = new Audio("../deposit-voice.mp3");
let successWidthDrawSound = new Audio("../withDraw-voice.mp3");

document.addEventListener("DOMContentLoaded", () => {
  const userRowData = localStorage.getItem("userData");
  if (!userRowData) {
    location.href = "../index.html";
  } else {
    name.textContent = userData.name;
    username.textContent = `@${userData.username}`;

    let avatar = localStorage.getItem("userAvatar");
    if (!avatar) {
      avatarImg.src =
        "https://img.icons8.com/?size=100&id=84020&format=png&color=000000";
      avatarImg.classList.add("border", "shadow", "p-2");
    } else {
      avatarImg.src = avatar;
    }
  }
});

//TODO>> Logout function
let logout = () => {
  localStorage.clear();
  location.href = "../index.html";
};

//TODO>> Toggle balance
let balance = document.querySelector("#balance");
let showBalanceIcon = document.querySelector("#showBalanceIcon");
let hiddenBalanceIcon = document.querySelector("#hiddenBalanceIcon");
let showBalance = () => {
  let passwordInput = document.querySelector("#passwordInput");
  let userPassword = userData.password;
  let userBalance = userData.balance;
  if (passwordInput.value == userPassword) {
    balance.textContent = `${userBalance}$`;
    passwordInput.value = "";
    let showBalanceModal = bootstrap.Modal.getInstance(
      document.getElementById("showBalanceModal"),
    );
    showBalanceModal.hide();
    showBalanceIcon.classList.add("opacity-0");
    showBalanceIcon.style.pointerEvents = "none";
    hiddenBalanceIcon.classList.remove("opacity-0");
    hiddenBalanceIcon.style.pointerEvents = "visible";
  } else {
    alert("❌ Incorrect Password");
  }
};
let hiddenBalance = () => {
  balance.textContent = `****`;
  showBalanceIcon.classList.remove("opacity-0");
  showBalanceIcon.style.pointerEvents = "visible";
  hiddenBalanceIcon.classList.add("opacity-0");
  hiddenBalanceIcon.style.pointerEvents = "none";
};

//TODO>> Deposit functions
let deposit = () => {
  let amountInput = document.querySelector("#amountInput");
  let newBalance = +userData.balance + +amountInput.value;
  balance.textContent = `${newBalance}$`;
  userData.balance = newBalance;
  localStorage.setItem("userData", JSON.stringify(userData));
  amountInput.value = "";
  successDepositSound.play();
};
let depositAmount = () => {
  let amountInput = document.querySelector("#amountInput");
  if (+amountInput.value <= 0) {
    alert("❌ Invalid amount");
    return;
  }

  if (parseInt(balance.textContent) == userData.balance) {
    deposit();
  } else {
    let checkPasswordForDepositModal = new bootstrap.Modal(
      document.getElementById("checkPasswordForDepositModal"),
    );
    checkPasswordForDepositModal.show();
  }
};

let DepositAfterCheck = () => {
  let passwordInputToDeposit = document.querySelector(
    "#passwordInputToDeposit",
  );
  if (passwordInputToDeposit.value == userData.password) {
    deposit();
    let checkPasswordForDepositModal = bootstrap.Modal.getInstance(
      document.getElementById("checkPasswordForDepositModal"),
    );
    checkPasswordForDepositModal.hide();
    passwordInputToDeposit.value = "";
  } else {
    alert("❌ Incorrect Password");
  }
};

//TODO>> WithDraw functions
let withDraw = () => {
  let amountInput = document.querySelector("#amountInput");
  let newBalance = +userData.balance - +amountInput.value;
  balance.textContent = `${newBalance}$`;
  userData.balance = newBalance;
  localStorage.setItem("userData", JSON.stringify(userData));
  amountInput.value = "";
  successWidthDrawSound.play();
};
let withDrawAmount = () => {
  let amountValue = +document.querySelector("#amountInput").value;
  if (amountValue <= 0) {
    alert("❌ Invalid amount");
    return;
  } else if (amountValue > +userData.balance) {
    alert("❌ Amount exceeds your balance");
    return;
  }

  if (parseInt(balance.textContent) == userData.balance) {
    withDraw();
  } else {
    let checkPasswordForWithDrawModal = new bootstrap.Modal(
      document.getElementById("checkPasswordForWithDrawModal"),
    );
    checkPasswordForWithDrawModal.show();
  }
};

let withDrawAfterCheck = () => {
  let passwordInputToWidthDraw = document.querySelector(
    "#passwordInputToWidthDraw",
  );
  if (passwordInputToWidthDraw.value == userData.password) {
    withDraw();
    let checkPasswordForWithDrawModal = bootstrap.Modal.getInstance(
      document.getElementById("checkPasswordForWithDrawModal"),
    );
    checkPasswordForWithDrawModal.hide();
    passwordInputToWidthDraw.value = "";
  } else {
    alert("❌ Incorrect Password");
  }
};
