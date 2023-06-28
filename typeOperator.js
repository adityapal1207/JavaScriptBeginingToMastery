//typeof operator
// tells the data type
// String , number,booleans , undefined,null,BigInt and Symbol


 let tAge=22;
 let tName="aditya";
 console.log(typeof tAge) // this will tell the data type .

 // convert number to String  
  tAge=tAge+"";
  console.log(typeof tAge);
// convert  string to number 
tAge= +tAge;
console.log(typeof tAge);


//String concatenation
let fname="Aditya ";
let lname="Pal";
console.log(fname+lname);

//Template String
let tempAge=22;
let tempName="Aditya";
let aboutMe=`my name is ${tempName} and my age is ${tempAge}`;
console.log(aboutMe);
console.log(Number.MAX_SAFE_INTEGER);

// == vs ===
// == checks value only not data  type whereas
// === checks value as well as data  type also
 let num1="8";
 let num2=8;
 console.log(num1==num2);
 console.log(num1===num2);
 //
 console.log(num1 != num2);
 console.log(num1 !== num2);


 // truthy and falsy values

// falsy values = false , "", null , undefined, 0
// truthy =   any thing accept falsy values

// Ternary Operator
let mAge =12;
console.log(mAge>=5 ? "Coffee":"Milk")

 