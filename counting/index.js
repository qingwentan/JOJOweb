// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0


function increment() {
    count += 1
    countEl.textContent = count
}
// textContent gets the raw text content, while innerText gets the text as it's visually presented on the page, considering CSS styles and visibility.
function save() {
    let separator = " - ";
    let combinedText = count + separator;
    saveEl.textContent += combinedText
    countEl.textContent = 0
    count = 0
}
// add a button to reset the save
function reset() {
    saveEl.textContent = "Previous entries: "
    countEl.textContent = 0
    count = 0
}

