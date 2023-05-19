let calcScreen= document.getElementById("calc-screen")
// calculator display
function calcClear() {
    calcScreen.value = ""; 
}

// calcutor number functions
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


// Operations
function calcOp() {
    var a= document.getElementById("calcScreen").value; 
    var b= eval(a);
    document.getElementById("calcScreen").value=a;
    toggleAllowComma();
}

