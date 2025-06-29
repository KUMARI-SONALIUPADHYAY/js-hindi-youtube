const name = "sonali"
const repoCount =50
// console.log(name + repoCount + "omg");
//string interpulation
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("sonali")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('i'));
console.log(gameName.substring(0,4));

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "     hitish     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sonali.comm/sonali%20upadhyay"
url.replace('%20','_')
console.log(url);
console.log(url.replace('%20','_'));

console.log(url.includes('sonali'));

const kola = new String('sonali-upadhyay-hc-com')
console.log(kola.split('-'));








