// function saymyname(){
//     console.log("s");
//     console.log("o");
//     console.log("n");
//     console.log("a");
//     console.log("l");
//     console.log("i");   
// }
// saymyname()

// function addtwonumbers(number1,number2){
//     console.log(number1+number2);}
// const result= addtwonumbers(3,5)
// console.log("result:",result);

    // addtwonumbers(3,5)
    // addtwonumbers(3,"4")
    // addtwonumbers(3,"a")
    // addtwonumbers(3,null)
// function addtwonumbers(number1,number2){
    // let result = number1+number2
    // console.log("sonali upadhyay");
//     return number1 + number2
// }
// const result= addtwonumbers(3,5)
// // console.log("result:",result);

// function loginuserMessage(username='sam'){
//     if(!username){
//         console.log("please enter a Username");
//         return
//     }
//     return `${username} just logged in`
// }
// // console.log(loginuserMessage("sonali"))
// console.log(loginuserMessage("ola"))
// function loginuserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginuserMessage());
function loginuserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username}just logged in`}
    // console.log(loginuserMessage("krish"
    // ))
    function calculatecartprice(val1,...num1){
        return val1
    }
// console.log(calculatecartprice(7889));
// console.log(calculatecartprice(200,300,400,500));
// console.log(calculatecartprice(200,300,400));

const user={
    username:"hitish",
    price:200
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);}

// console.log(handleobject(user))
// handleobject({username:"sam",price:399})
const mynewarray=[101,102,103,104]
function returnsecondvalue(getarray){
    return getarray[1]
}
// console.log(returnsecondvalue(mynewarray))
function addition(a,b){
   if(a>b){ return a+b}
    return a-b
}
// console.log(addition(6,7));
function one(){
    const username="sonali"
    function two(){
        const website="youtube"
        // console.log(username); 
    }
    two()
}
one()

if(true){
    const username="sonali"
    if(username==="sonali"){
        const website=" youtube"
        // console.log(username + website);       
    }
}

function addone(num){
    return num +1
}
addone(3)

const addtwo= function(num){
    return num+2}
    console.log(addtwo(5))