// const coding =['java','python','cpp','js','ruby']
//  const values=coding.forEach((item)=>{
// console.log(item)
// })
// console.log(values)

// const mynums =[1,2,3,4,5,6,7,8,9,10]
// const newnums= mynums.filter((num)=>{
//     return num >4
// })
// console.log(newnums);



// const mynumbers=[1,2,3,4,5,6,7,8,9,10]
// const newnumer = mynumbers.map((num)=> num+10 )
// console.log(newnumer);


// const mynumbers=[1,2,3,4,5,6,7,8,9,10]
// const newnumer = mynumbers
// .map((num)=>num*10)
// .map((num)=>num+4)
// .filter((num)=> num>40)
// console.log(newnumer);


// const mynums=[1,2,3]
// const mytotal = mynums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// },0)
// console.log(mytotal);


const shoppingcart =[
    {itemname:'java course',
    price:5999},
     {itemname:'py course',
    price:999},
     {itemname:'mobile course',
    price:8999},
     {itemname:'js course',
    price:2999},
     {itemname:'data science course',
    price:12999},
]
const pricetopay = shoppingcart.reduce((acc,item)=>acc+item.price,0);
console.log(pricetopay);
