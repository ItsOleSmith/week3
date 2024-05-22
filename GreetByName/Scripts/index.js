"use strict";

window.onload = init;


function init(){
    const greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = onGreetBtnClicked;
}
function onGreetBtnClicked(){
    let message = "Hello " + document.getElementById("nameField").value + ". How is your day?";
    alert(message);
}
