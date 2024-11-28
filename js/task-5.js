// body,span ve butonu  document üzerinden alıyoruz
const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function colorHandler (){
    bodyColor.style.backgroundColor = getRandomHexColor();
    spanColor.style.backgroundColor = bodyColor.style.backgroundColor;
};

changeColor.addEventListener("click",colorHandler);
