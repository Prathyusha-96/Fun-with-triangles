const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");
 

function claculateSumOfSquares(a,b) {
    const sumOfSquares = a*a + b*b;
    //console.log(sumOfSquares);
    return sumOfSquares;
}
function claculateHypotenuse() {
    const sumOfSquares = claculateSumOfSquares(Number(sides[0].value), 
    Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The length of hypotenuse is " + 
    lengthOfHypotenuse
}
hypotenuseBtn.addEventListener("click", claculateHypotenuse);