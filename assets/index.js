let calcScreen= document.getElementById("calc-screen")
// calculator display. After targetting the text screen, the value of the function clears calculator screen.
function calcClear() {
    calcScreen.value = ""; 
}

// calculator number functions. targetting each function individually as each number has a different ID.
function calcNum9() {
    calcScreen.value += document.getElementById("calc-num9").innerText
}

function calcNum8() {
    console.log(calcScreen);
    calcScreen.value += document.getElementById("calc-num8").innerText
}

function calcNum7() {
    calcScreen.value += document.getElementById("calc-num7").innerText
}

function calcNum6() {
    console.log(calcScreen);
    calcScreen.value += document.getElementById("calc-num6").innerText
}

function calcNum5() {
    calcScreen.value += document.getElementById("calc-num5").innerText
}

function calcNum4() {
    calcScreen.value += document.getElementById("calc-num4").innerText
}

function calcNum3() {
    calcScreen.value += document.getElementById("calc-num3").innerText
}

function calcNum2() {
    calcScreen.value += document.getElementById("calc-num2").innerText
}

function calcNum1() {
    calcScreen.value += document.getElementById("calc-num1").innerText
}

function calcNum0() {
    calcScreen.value += document.getElementById("calc-num0").innerText
}

function calcNumDec() {
    calcScreen.value += document.getElementById("calc-num-dec").innerText
}

// Operations. After targetting the calcScreen, operations within function parentheses will be displayed.
function calcOp(operation) {
    calcScreen.value = calcScreen.value + operation;
}

// Equal Sign function. targetting the sum thats on the calc screen and then using the eval function to receive the result.
function calcEval() {
    calcScreen.value = eval(calcScreen.value);
}

// Delete Function. Declaring a variable in order to target the substring in the display
function calcDel() {
    let del = calcScreen.value;
    calcScreen.value = del.substring (0, del.length - 1);
 }