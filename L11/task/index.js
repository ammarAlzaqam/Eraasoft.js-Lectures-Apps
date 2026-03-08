//TODO>> Avatar img upload input change
let avatarInput = document.getElementById("avatar");
let preview = document.getElementById("preview");
let customFile = document.querySelector(".custom-file");

avatarInput.addEventListener("change", function () {
  let file = this.files[0];

  customFile.classList.add("bg-primary");
  customFile.textContent = file.name;

  const reader = new FileReader();

  reader.onload = function () {
    localStorage.setItem("userAvatar", reader.result);
  };

  if (file) {
    reader.readAsDataURL(file);
    let imageURL = URL.createObjectURL(file);

    preview.src = imageURL;
    preview.style.height = "70px";
  }
});

//TODO>> Toggle password type
let showPasswordIcon = document.querySelector("#showPasswordIcon");
let hiddenPasswordIcon = document.querySelector("#hiddenPasswordIcon");
let passwordInput = document.querySelector("#passwordInput");
let eyeIconWrapper = document.querySelector(".eye-icon-wrapper");
passwordInput.addEventListener("input", function () {
  eyeIconWrapper.classList.toggle("opacity-0", !this.value);
  eyeIconWrapper.style.pointerEvents = this.value ? "visible" : "none";
});

let togglePassword = () => {
  let passwordType = passwordInput.type;

  if (passwordType === "password") {
    showPasswordIcon.classList.add("opacity-0");
    hiddenPasswordIcon.classList.remove("opacity-0");
    passwordInput.type = "text";
  } else {
    showPasswordIcon.classList.remove("opacity-0");
    hiddenPasswordIcon.classList.add("opacity-0");
    passwordInput.type = "password";
  }
};

//TODO>> onSubmit functionality
let loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = document.querySelector("#nameInput").value.trim();
  let username = document
    .querySelector("#usernameInput")
    .value.replace(/\s+/g, "")
    .trim();
  let password = document.querySelector("#passwordInput").value;

  let userData = {
    name,
    username,
    password,
    balance: 0,
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  location.href = "./app/page.html";
});
