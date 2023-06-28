let whileLoopVariable =0;
while(whileLoopVariable<=9){
console.log(whileLoopVariable);
whileLoopVariable++;
}

// find the sum of first natural numbers
let sum=0;
whileLoopVariable=1;
while(whileLoopVariable<=10)
{
    sum=sum+whileLoopVariable;
    whileLoopVariable++;
}
console.log(sum);


// for loop
let fLoopSum=0;
for(let fLoop =0;fLoop<=10;fLoop++){
    fLoopSum=fLoopSum+fLoop;
}
console.log(fLoopSum);
// break statement
fLoopSum=0;
for(let fLoop =0;fLoop<=10;fLoop++){
    fLoopSum=fLoopSum+fLoop;
    if(fLoop >=8){
    break;}

}
console.log(fLoopSum);

//continue
fLoopSum=0;
for(let fLoop =0;fLoop<=10;fLoop++){
    if(fLoop = 9){
        continue;}
    fLoopSum=fLoopSum+fLoop;
    

}
console.log(fLoopSum);