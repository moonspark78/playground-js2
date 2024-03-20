//----------Sort----------------

const numbers = [3, 11,89, 5, 2, 4,23,27,33];
// ordre croissant
const crr = numbers.sort((a,b) => a -b)
console.log(crr);



// ordre décroisante
const dec = numbers.sort((a,b) => b - a)
console.log(dec);



const fruits = ["banana", "apple", "orange", "grape"];
const apha = fruits.sort();
console.log(apha);



const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Alice', age: 20 }
];
const naa = people.sort((a,b) => a.name - b.name);
console.log(naa);
