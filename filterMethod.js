const filt=[1,2,3,4,5,6,7,8,9,12,11,111,11111,3232,34];
const filtered=filt.filter((value)=>{
    return value % 2===0;
});
console.log(filtered);
console.log("hi");