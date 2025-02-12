const p1 = document.getElementById("p1");


// Event listener 
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

// Attach event listener to button
let count = 0;
btn1.addEventListener("click", buttonFunction);
btn2.addEventListener("click", resetFunction);

const p2 = document.getElementById("p2");

function buttonFunction() {
    count++;
    console.log("Button clicked", count);

    // Use backticks (`) for string interpolation
    p2.textContent = `Button clicked ${count} times`;
}

function resetFunction() {
    count = 0; // Reset count
    p2.textContent = ""; // Clear the displayed count
}

const header = document.getElementById("header")

header.onmouseover = mouseOverFunction;
header.onmouseleave = mouseLeaveFunction;

function mouseOverFunction() {
    header.setAttribute("style", "color:red");
    header.innerText = "Do not touch me!";
}

function mouseLeaveFunction() {
    header.setAttribute("style", "color:blue");
    header.innerText = "Why did you leave?";
}