// TODO>> BOM (Browser Object Model)
console.log(window);

// fetch
// localStorage
// events (trigger)

// mouse (click, dblclick, right, hover, wheel)
// keyboard
// scroll
// screen

let toucheEffect = (e) => {
  e.target.classList.remove("btn-warning");
  e.target.classList.add("btn-secondary");
};

let leftEffect = (e) => {
  e.target.classList.add("btn-warning");
};

let clickEffect = (e) => {
  console.log(e);
};

let menu = document.querySelector(".menu");
let content = document.querySelector(".content");
let menuEffect = (e) => {
  e.preventDefault();
  menu.style.display = "flex";
  let place = innerWidth - e.clientX;
  if (place > 200) {
    content.style.left = `${e.clientX}px`;
  } else {
    content.style.left = `calc(${e.clientX}px - 200px)`;
  }
  content.style.top = `${e.clientY}px`;
};

let hideMenu = () => {
  menu.style.display = "none";
};
