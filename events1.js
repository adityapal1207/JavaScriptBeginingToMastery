console.log("Hey file is connected correctly!");
const allButtons=document.querySelectorAll(".my-buttons button");
// allButtons.addEventListener("click",function(){
//     console.log("Hey ! you pressed the button !");
// })
for(let button of allButtons){
    button.addEventListener("click", (event)=>{
        
        event.target.style.backgroundColor="yellow"
        event.target.style.color="pink"
       
    })
}
