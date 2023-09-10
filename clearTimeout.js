console.log("script startes !");
const id2=setTimeout(()=>{
    console.log("inside the setTime out function !");
},1000);

console.log("the id of the set timeout is :" , id2);
console.log("clearing the setTime out function");
clearTimeout(id2);
