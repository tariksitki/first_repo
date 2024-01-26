
const topLeftDiv = document.getElementById("top-left");
const topRightDiv = document.getElementById("top-right");
const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");


buttonLeft.onclick = myFunctionYellow;

function myFunctionYellow() {
    topLeftDiv.style.backgroundColor = "yellow";
    topLeftDiv.innerHTML = "AKILOCA";
}

buttonRight.onclick = myFunctionBlack;

function myFunctionBlack() {
    topRightDiv.style.backgroundColor = "black";
    topRightDiv.innerHTML = "SEDAT KAMPO";
    topRightDiv.style.color = "white";
}