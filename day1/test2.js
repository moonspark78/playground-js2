console.log("pt.2");

//Pair
let nubs = [2,13,16,10,6];
const even = nubs.filter(i => i%2===0);
console.log(even);

//Impair
let lubs = [2,13,16,10,6];
const odd = lubs.filter(i => i%2 != 0);
console.log(odd);  // Ouutput :  [ 13 ]

//--------------------------------------
//Reduce

const numbers = [1,2,3,4,5]
const sum = numbers.reduce((acc, cur) => {
    return acc + cur;
},0)
console.log(sum);// Output : 15

//---------

const people= [{name: 'John', age: 19},
{name: 'alban', age: 7},
{name: 'tian', age: 54},
{name: 'marc', age: 24},
{name: 'zoro', age: 11},]

const oldest = people.reduce((acc, cur) => {
    if(cur.age > acc){
        return cur.age
    }
    return acc
},0) 

console.log(oldest); // Output : 54


//---------

let tableauDeMots = ["chat", "chien", "éléphant", "crocodile", "souris"];
const motPlusLong= tableauDeMots.reduce((acc, cur) => {
    return cur.length > acc.length ? cur : acc 
},"") 

console.log(motPlusLong); // Output : crocodile

//--------
let tabsNums = [23,55,100,14,1,99];
const numPlusGrand = tabsNums.reduce((acc, cur) =>{
    return cur > acc ? cur : acc
},0);
console.log(numPlusGrand); // output :100

