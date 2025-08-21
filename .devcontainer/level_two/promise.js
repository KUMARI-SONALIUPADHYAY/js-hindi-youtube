//1st 

console.log('jio boss');
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('promise is consumed');
})




//2nd
new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log('asyn task two')
    resolve()},1000)
}).then(
    function(){
        console.log('promise is full for 2nd resolved')
    }
)




//3rd
const promisethree =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'sonali',email:'upadhyaysonali2005@gmail.com'})
    },1000)
})
promisethree.then(function(user){
    console.log(user);
})


//4th promise
const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if (!error){
            resolve({username:'sonali',password:1233})
        }
        else{
            reject('ERROR:something went wrong')
        }
    },1000)
})
promisefour.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log('finally The promise id either reolved or rejected')
})




//5th promise
const promisefive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({username:'javascript',password:12234} )
        }
        else{
            reject('ERROR:something wrong in javascript')
        }
    },1000)
})
// async function consumefive(){
//    const response= await promisefive
//    console.log(response);
   
// }
consumefive()
async function consumefive(){
    try {
         const response= await promisefive
   console.log(response);
        
    } catch (error) {
        console.log(error);  
    }
}


// async function getallusers() {
//    try {
//     const response01= await fetch('https://jsonplaceholder.typicode.com/users')
//    const data= await response01.json()
//    console.log(data);
//    } catch (error) {
//     console.log('E:',error);
//    }
// }
// getallusers()


fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
return response.json()
}).then((data)=>{console.log(data);
})
.catch((error)=>console.log(error))
