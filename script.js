"use strict";

/* === Screen === */

const screen = document.getElementById("screen");

/* === Operators === */

const clearBtn = document.getElementById("clear");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const percent = document.getElementById("percent");
const comma = document.getElementById("comma");
const equal = document.getElementById("equal");
const plusMin = document.getElementById("plusMinus");

/* === Numbers === */

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

/* === Work with first input === */

let inputOne = [];
let inputTwo = [];


clearBtn.addEventListener("click", function() {
    inputOne.length = 0;
    screen.innerHTML = 0;
});
one.addEventListener("click", function () {
    if(inputOne.length < 9) inputOne.push(1);
    screen.innerHTML = inputOne.join("");
});
two.addEventListener("click", function (){
    if(inputOne.length < 9) inputOne.push(2);
    screen.innerHTML = inputOne.join("");
});
three.addEventListener("click", function (){
    if(inputOne.length < 9) inputOne.push(3);
    screen.innerHTML = inputOne.join("");
});
four.addEventListener("click", function (){
    if(inputOne.length < 9) inputOne.push(4);
    screen.innerHTML = inputOne.join("");
});
five.addEventListener("click", function (){
    if(inputOne.length < 9) inputOne.push(5);
    screen.innerHTML = inputOne.join("");
});
six.addEventListener("click", function (){
    if(inputOne.length < 9) inputOne.push(6);
    screen.innerHTML = inputOne.join("");
});
seven.addEventListener("click", function (){
    if(inputOne.length < 9) inputOne.push(7);
    screen.innerHTML = inputOne.join("");
});
eight.addEventListener("click", function (){
    if(inputOne.length < 9) inputOne.push(8);
    screen.innerHTML = inputOne.join("");
});
nine.addEventListener("click", function (){
    if(inputOne.length < 9) inputOne.push(9);
    screen.innerHTML = inputOne.join("");
})