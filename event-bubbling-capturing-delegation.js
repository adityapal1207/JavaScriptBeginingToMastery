console.log("hey! the file is connected correctly !!!!");
const grandParent=document.querySelector(".grandParent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");
 child.addEventListener("click",(event)=>{
    // console.log(event.currentTarget);
    console.log("child bubbling");
 });

 parent.addEventListener("click", (event)=>{
    // console.log(event.currentTarget);
    console.log("parent bubbling");
 });
 grandParent.addEventListener("click", (event)=>{
    // console.log(event.currentTarget);
    console.log("  grandParent bubbling");
 });
 document.body.addEventListener("click" ,(event)=>{
    console.log("body  bubbling");
 })
// Event Bubbling or event propagation 
//  In the above case if we click on child then all the parent(parent , grandparent and body in this case)
//  of the child class will also be called.   if we click on parent then  parent ,grandparent and body will also be called
//  so this is called event bubbling 






 //event capturing 


//  child.addEventListener("click",(event)=>{
   
//     console.log(" child captured");
//  },true); // true means we  have to capture the events

//  parent.addEventListener("click", (event)=>{
    
//     console.log("parent captured");
//  },true);
//  grandParent.addEventListener("click", (event)=>{
    
//     console.log("  grandParent captured");
//  },true);
//  document.body.addEventListener("click" ,(event)=>{
//     console.log("body captured ");
//  } ,true)
 





//event delegation

// const grandParent2=document.querySelector(".grandParent");
// grandParent2.addEventListener("click",function(){
//     console.log("you click me ");
// })  // in this case if we click on either grand parent , parent or  child the event will occur
//    // and on whatever er click that will be in target like if we click on child the child will
//    // be refered in event even though the event is on grandparen
//    // this is can be used incase where we dont have to  creat the event listner again and again 