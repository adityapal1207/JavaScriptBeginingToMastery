const redu=[1,2,3];
const sum=redu.reduce((accumulator ,currentValue)=>{
return accumulator+ currentValue;
    
});
console.log(sum);
console.log("part 2");

const redu2=[
{productId:1 ,prodectName:"watch" , productPrice:3200},
{productId:2,prodectName:"cap" , productPrice:199},
{productId:3,prodectName:"belt" , productPrice: 499},
{productId:4,prodectName:"tie" , productPrice:99},
{productId:5,prodectName:"jeans" , productPrice:9999},
{productId:6,prodectName:"T-shirt" , productPrice:449},
];
 const payableAmt=redu2.reduce((total,item)=>{
    return total+item.productPrice;

},5)
console.log(payableAmt);