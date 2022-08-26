"use strict";

/*
const calculatorTest = () => {

 */

    let a = "";
    let b = "";
    let sign = "";
    let finish = false;
    let operand = undefined;
    let result = undefined;

    let check = 0;


// Display

    const out = document.getElementById("screen");

    const allClearBtn = document.getElementById("all-clear");

    const clearAll = () => {
        a = "";
        b = "";
        sign = "";
        finish = false;
        out.textContent = 0;
        console.log("Clear All")
    }

    allClearBtn.onclick = clearAll;

    /* === ============== === */

    /* === Logic for 1 === */

    const numOne = document.getElementById("one");
    const takeInputOne = () => {
        if((numOne.innerText === "1") && (a.length < 13) && (finish === false)) {
            a = a + 1;
            out.textContent = a;
            console.log(a);
        } else if((numOne.innerText === "1") && (b.length < 13) && (finish === true)) {
            b = b + 1;
            out.textContent = b;
            console.log(b);
        }
    }
    numOne.onclick = takeInputOne;

    /* === Logic for 2 === */

    const numTwo = document.getElementById("two");
    const takeInputTwo = () => {
        if((numTwo.innerText === "2") && (a.length < 13) && (finish === false)) {
            a = a + 2;
            out.textContent = a;
        } else if((numTwo.innerText === "2") && (b.length < 13) && (finish === true)) {
            b = b + 2;
            out.textContent = b;
        }
    }
    numTwo.onclick = takeInputTwo;

    /* === Logic for 3 === */

    const numThree = document.getElementById("three");
    const takeInputThree = () => {
        if((numThree.innerText === "3") && (a.length < 13) && (finish === false)) {
            a = a + 3;
            out.textContent = a;
        } else if((numThree.innerText === "3") && (b.length < 13) && (finish === true)) {
            b = b + 3;
            out.textContent = b;
        }
    }
    numThree.onclick = takeInputThree;

    /* === Logic for 4 === */

    const numFour = document.getElementById("four");
    const takeInputFour = () => {
        if((numFour.innerText === "4") && (a.length < 13) && (finish === false)) {
            a = a + 4;
            out.textContent = a;
        } else if((numFour.innerText === "4") && (b.length < 13) && (finish === true)) {
            b = b + 4;
            out.textContent = b;
        }
    }
    numFour.onclick = takeInputFour;

    /* === Logic for 5 === */

    const numFive = document.getElementById("five");
    const takeInputFive = () => {
        if((numFive.innerText === "5") && (a.length < 13) && (finish === false)) {
            a = a + 5;
            out.textContent = a;
        } else if((numFive.innerText === "5") && (b.length < 13) && (finish === true)) {
            b = b + 5;
            out.textContent = b;
        }
    }
    numFive.onclick = takeInputFive;

    /* === Logic for 6 === */

    const numSix = document.getElementById("six");
    const takeInputSix = () => {
        if((numSix.innerText === "6") && (a.length < 13) && (finish === false)) {
            a = a + 6;
            out.textContent = a;
        } else if((numSix.innerText === "6") && (b.length < 13) && (finish === true)) {
            b = b + 6;
            out.textContent = b;
        }
    }
    numSix.onclick = takeInputSix;

    /* === Logic for 7 === */

    const numSeven = document.getElementById("seven");
    const takeInputSeven = () => {
        if((numSeven.innerText === "7") && (a.length < 13) && (finish === false)) {
            a = a + 7;
            out.textContent = a;
        } else if((numSeven.innerText === "7") && (b.length < 13) && (finish === true)) {
            b = b + 7;
            out.textContent = b;
        }
    }
    numSeven.onclick = takeInputSeven;

    /* === Logic for 8 === */

    const numEight = document.getElementById("eight");
    const takeInputEight = () => {
        if((numEight.innerText === "8") && (a.length < 13) && (finish === false)) {
            a = a + 8;
            out.textContent = a;
        } else if((numEight.innerText === "8") && (b.length < 13) && (finish === true)) {
            b = b + 8;
            out.textContent = b;
        }
    }
    numEight.onclick = takeInputEight;

    /* === Logic for 9 === */

    const numNine = document.getElementById("nine");
    const takeInputNine = () => {
        if((numNine.innerText === "9") && (a.length < 13) && (finish === false)) {
            a = a + 9;
            out.textContent = a;
        } else if((numNine.innerText === "9") && (b.length < 13) && (finish === true)) {
            b = b + 9;
            out.textContent = b;
        }
    }
    numNine.onclick = takeInputNine;

    /* === Logic for 0 === */

    const numZero = document.getElementById("zero");
    const takeInputZero = () => {
        if((numZero.innerText === "0") && (a.length < 13) && (finish === false)) {
            a = a + 0;
            out.textContent = a;
        } else if ((numZero.innerText === "0") && (b.length < 13) && (finish === true)) {
            b = b + 0;
            out.textContent = b;
        }
    }
    numZero.onclick = takeInputZero;

    /* === Logic for DOT === */

    const numDot = document.getElementById("dot");
    const takeInputDot = () => {
        if((numDot.innerText === ".") && (a.length < 13) && (finish === false) && (!a.split("").includes("."))) {
            a = a + ".";
            out.textContent = a;
        } else if ((numDot.innerText === ".") && (b.length < 13) && (finish === true) && (!b.split("").includes("."))) {
            b = b + ".";
            out.textContent = b;
        }
    }
    numDot.onclick = takeInputDot;

    /* ==== Operands ==== */

    /* === Percent === */

    const keyPercent = document.getElementById("percent");
    const returnPercent = () => {
        if(+a > 0) {
            let result = ((+a / 100));
            out.textContent = (parseFloat(result.toPrecision(12)));
        }
    }
    keyPercent.onclick = returnPercent;

    /* === PLUS === */

    const keyPlus = document.getElementById("plus");
    const takeInputPlus = () => {
        finish = true;
        operand = "plus";
        out.textContent = "+";
        if(+result > 0) b = "";
        console.log(b);
    }
    keyPlus.onclick = takeInputPlus;

    /* === Minus === */

    const keyMinus = document.getElementById("minus");
    const takeInputMinus = () => {
        finish = true;
        operand = "minus";
        out.textContent = "-";
        if(+result > 0) b = "";
        console.log(b);
    }
    keyMinus.onclick = takeInputMinus;

    /* === Multiply === */

    const keyMultiply = document.getElementById("multiply");
    const takeInputMultiply = () => {
        if((finish === true) && (operand === "multiply") && (check === 0)) {
            check += 1;
            result = +a * +b;
            a = result;
            out.textContent = (parseFloat(result.toPrecision(12)));
            return;
        }
        finish = true;
        operand = "multiply";
        out.textContent = "x";
        if(+result > 0) b = "";
        console.log(b);
    }
    keyMultiply.onclick = takeInputMultiply;

    /* === Divide === */

    const keyDivide = document.getElementById("divide");
    const takeInputDivide = () => {
        finish = true;
        operand = "divide";
        out.textContent = "÷";
        if(+result > 0) b = "";
        console.log(b);
    }
    keyDivide.onclick = takeInputDivide;

    /* === Change sign === */

    const keySign = document.getElementById("plusMinus");
    const takeInputPlusMin = () => {
        if((keySign.innerText === "+/-") && (finish === false) && (!(a < 0))) {
            a = (+a + +"0") * -1;
            out.textContent = a;
        }
        if((keySign.innerText === "+/-") && (finish === false) && ((Array.from(a))[0] === "-")) {
            a = a.split(" ").shift();
            out.textContent = a;
        }

        if((keySign.innerText === "+/-") && (finish === true) && (!(b < 0))) {
            b = (+b + +"0") * -1;
            out.textContent = b;
        }
        if((keySign.innerText === "+/-") && (finish === true) && ((Array.from(a))[0] === "-")) {
            b = b.split(" ").shift();
            out.textContent = b;
        }
    }
    keySign.onclick = takeInputPlusMin;


    /* === EQUAL === */

    const keyEqual = document.getElementById("equal");
    const showResult = () => {
        if((finish === true) && (operand === "plus")) {
            result = +a + +b;
            a = result;
            out.textContent = (parseFloat(result.toPrecision(12)));
        } else if((finish === true) && (operand === "minus")) {
            result = +a - +b;
            a = result;
            out.textContent = (parseFloat(result.toPrecision(12)));
        } else if((finish === true) && (operand === "multiply")) {
            result = +a * +b;
            a = result;
            out.textContent = (parseFloat(result.toPrecision(12)));
        } else if((finish === true) && (operand === "divide")) {
            result = +a / +b;
            a = result;
            out.textContent = (parseFloat(result.toPrecision(12)));
        }
    }
    keyEqual.onclick = showResult;
/*
}

calculatorTest();
*/



