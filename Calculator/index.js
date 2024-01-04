
let Summation = document.getElementById("sum-el")

function add() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    let sum = num1 + num2;
    Summation.textContent = "Sum: " + sum;
}
function subtract() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    let sum = num1 - num2;
    Summation.textContent = "Sum: " + sum;

}
function divide() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    let sum = num1 / num2;
    Summation.textContent = "Sum: " + sum;
}
function multiply() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    let sum = num1 * num2;
    Summation.textContent = "Sum: " + sum;
}

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


