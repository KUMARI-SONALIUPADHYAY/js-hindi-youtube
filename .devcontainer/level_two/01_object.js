//object literals

 const mysym=Symbol("key1")
const jsUser={
    name:"hitish",
    age:18,
    mysym:"mykey1",
    "fullname":"hitish choudhary",
    location:"jaipur",
    email:"sonaliupadhyay@google.com",
    isloggedin:false,
    lastloginDay:["monday","saturday"]
}
    // console.log(jsUser.email);
    // console.log(jsUser["email"]);
    // console.log(jsUser["fullname"]);
    // console.log(jsUser.mysym);
    // console.log(typeof mysym);
//   jsUser.email="hitish@chatgpt.com"
//     console.log(jsUser);
//     Object.freeze(jsUser)
//     jsUser.email="hitish@microsoft.com"
//       console.log(jsUser);

// jsUser.greeting=function(){
//     console.log("hello JS User");}
//     console.log(jsUser.greeting());

// jsUser.greetingtwo=function(){
//     console.log(`hello JS User,${this.name}`);}
//     console.log(jsUser.greetingtwo());


    
    
// const tinderUser={}
// tinderUser.id="123abc"
// tinderUser.name="sammay"
// tinderUser.isloggedin=false
// console.log(tinderUser)

// const regularUser = {
//     email:"some@gmail.com",
//      fullname : {
//         username:{
//             firstname:"sonali",
//             lastname:"upadhyay"
//         }
//     }
// }
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.username);
// console.log(regularUser.fullname.username.firstname);

const obj1={ 1:"a",2:"b"}
const obj2={ 3:"a",4:"b"}
const obj3={ 5:"a",6:"b"}
// const obj4={obj1,obj2}
// const obj4=Object.assign(obj1,obj2)
// const obj4=Object.assign(obj1,obj2,obj3)
// const obj4=Object.assign({},obj1,obj2,obj3)
// const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);


// const User=[
//     {id:1,
//         email:"h@mail.com"
//     },
//     {id:1,
//         email:"h@mail.com"
//     },
//     {id:1,
//         email:"h@mail.com"
//     }
// ]
// console.log(User[0].email)

// const tinderUser={}
// tinderUser.id="123abc"
// tinderUser.name="sammay"
// tinderUser.isloggedin=false
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty('isloggedin'));

//json and de-structure
const course ={
    coursenamez:"js hindi",
    price:"900",
    courseInstruction:"hitish"
}
// const{courseInstruction}=course
// console.log(course.courseInstruction);

const {courseInstruction:instructor}=course
console.log(instructor);

