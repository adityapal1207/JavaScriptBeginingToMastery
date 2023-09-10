// const red=Math.floor(Math.random()*256);
// const green=Math.floor(Math.random()*256);
// const blue=Math.floor(Math.random()*256);

const button1 = document.querySelector("button");
const currentColor=document.querySelector(".currentColor")
const body=document.body;
console.log(body);
function randomColorSelector(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor=`rgb(${red},${green},${blue})`;
    return randomColor;

}

button1.addEventListener("click", function (event) {
    randomColor=randomColorSelector();
    body.style.backgroundColor = randomColor;
    currentColor.textContent=randomColor;


    
    
    
    

})
