//for of 
// const arr= [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }



// const greetings="hello world!"
// for (const greets of greetings) {
//     console.log(greets);
// }

// const map = new Map()
// map.set('in',"india")
// map.set('usa','united states of america')
// map.set('fr',"france")
// console.log(map)

// for (const [key,value] of map) {
//     console.log(key,':-',value)
// }


// const myobject={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift by apple'
// }

// for (const key in myobject) {
//    console.log(`${key} is shortcut for ${myobject[key]}`)
// }


// const programming= ['js','python','java','cpp']
// for (const key in programming) {
// //    console.log(key);
// console.log(programming[key]);
// }


// const map = new Map()
//  map.set('in',"india")
//  map.set('usa','united states of america')
//  map.set('fr',"france")

// for (const key in map) {
//    console.log(key);
   
// }

// const coding =['js','ruby', 'python','cpp','java']
// coding.forEach(function(name){
// console.log(name);
// })

const mycoding=[{languagename:'js',
    languagefilename:'javascript'},

    {languagename:'py',
    languagefilename:'python'},

    {languagename:'java',
    languagefilename:'java'},]
mycoding.forEach((item) => {
    console.log(item.languagename);
})