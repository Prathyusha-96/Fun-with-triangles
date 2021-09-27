const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");
  
function claculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    // console.log(sumOfAngles);
    return sumOfAngles;
}


function isTriangle() {
    const sumOfAngles = claculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        
        outputEl.innerText = "Yay, The angles form a triangle";
}
 else {
    
     outputEl.innerText = "oh oh! It's not a triangle";
 }
      
}
  isTriangleBtn.addEventListener("click",isTriangle)