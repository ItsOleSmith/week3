"use strict";

window.onload = init;
window.onmouseover = para;

function init(){
    const helloBtn =document.getElementById("helloBtn");
    helloBtn.onclick = onHelloBtnClicked;
}
function onHelloBtnClicked(){
    alert("Hi there!");
}

function para(){
    const messagePara = document.getElementById("messagePara");
    messagePara.onclick = onMessageParaClicked;
}
function onMessageParaClicked(){
    alert("I got you !");
}

