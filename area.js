const inputs = document.querySelectorAll(".area-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");
 
function areaOfTriangle(base,height){
    const area =(base * height)/2;
    // console.log(area)
    return area;

}
function calculateArea() {
    const area = areaOfTriangle(Number(inputs[0].value),Number(inputs[1].value));
    outputEl.innerText = "Area of triangle is " + area;
}

areaBtn.addEventListener("click", calculateArea);

