//----------Sort----------------

const number = [3, 11,89, 5, 2, 4,23,27,33];
//console.log(number);
const numbers = [3, 11,89, 5, 2, 4,23,27,33];
// ordre croissant
        //numbers.sort((a,b)=> a-b)
        //console.log(numbers);



// ordre décroisante
        //numbers.sort((a,b)=> b-a)
        //console.log(numbers);

// ordre aphabétique

const fruitt = ["banana", "apple", "orange", "grape"];
//console.log(fruitt);
const fruits = ["banana", "apple", "orange", "grape"];

        fruits.sort()
        //console.log(fruits);


// trier croissant
const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Alice', age: 20 }
];
let croissant = people.sort((a,b) =>{
    return a.age - b.age;
})
console.log(croissant);