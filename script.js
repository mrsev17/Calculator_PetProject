"use strict";

const screen = document.getElementById("screen");


const numbers = [0,1,2,3,4,5,6,7,8,9];

/* === Operators === */

const clearBtn = document.getElementById("clear");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

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

let firstInput = "";
let saveFirstInput = undefined;
let data = [];


clearBtn.addEventListener("click", function() {
    screen.textContent = numbers[0];
});

plus.addEventListener("click", function () {
    screen.innerText = "+";
})

zero.addEventListener("click", function() {
    screen.innerText = numbers[0];
})