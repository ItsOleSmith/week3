"use strict";

window.onload = init;

function init() {
    const addBtn =document.getElementById("addBtn");
    const subtractBtn = document.getElementById("subtractBtn");
    const mulitplyBtn = document.getElementById("mulitplyBtn");
    const divideBtn = document.getElementById("divideBtn");
    addBtn.onclick = onAddclicked;
    subtractBtn.onclick = onSubtractClicked;
    mulitplyBtn.onclick = onMulitplyClicked;
    divideBtn.onclick = onDivideClicked;
}
function onAddclicked(){
    let num1Field = document.getElementById("number1Field");
    let num2Field = document.getElementById("number2Field");
    let answerField = document.getElementById("answerField");
    
    answerField.value = parseInt(num1Field.value) + parseInt(num2Field.value);
}
function onSubtractClicked(){
let num1Field = document.getElementById("number1Field");
let num2Field = document.getElementById("number2Field");
let answerField = document.getElementById("answerField");

answerField.value = parseInt(num1Field.value) - parseInt(num2Field.value);
}
function onMulitplyClicked(){
let num1Field = document.getElementById("number1Field");
let num2Field = document.getElementById("number2Field");
let answerField = document.getElementById("answerField");

answerField.value = Number(num1Field.value) * Number(num2Field.value);
} 
function onDivideClicked(){
    let num1Field = document.getElementById("number1Field");
let num2Field = document.getElementById("number2Field");
let answerField = document.getElementById("answerField");

answerField.value = parseInt(num1Field.value) / parseInt(num2Field.value);
}