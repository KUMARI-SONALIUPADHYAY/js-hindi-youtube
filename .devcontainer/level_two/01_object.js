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

jsUser.greeting=function(){
    console.log("hello JS User");}
    console.log(jsUser.greeting());

jsUser.greetingtwo=function(){
    console.log(`hello JS User,${this.name}`);}
    console.log(jsUser.greetingtwo());
    
    
