let fruits = ["orange", "banana", "fraise", "pomme"];
fruits = fruits.sort();

console.log(fruits); // Output :  [ 'banana', 'fraise', 'orange', 'pomme' ]

// -------------------------------------------------------------
//Croissant
let nums = [34,4,1,56,100,456];
nums.sort((a, b) => a -b);

console.log(nums); // Output : [ 1, 4, 34, 56, 100, 456 ]
// -------------------------------------------------------------
//Décroissant
let dec = [34,4,1,56,100,456];
dec.sort((a, b) =>  b-a);

console.log(dec);

// -------------------------------------------------------------
const people= [{name: 'John', age: 19},
{name: 'alban', age: 7},
{name: 'tian', age: 54},
{name: 'marc', age: 24},
{name: 'zoro', age: 11},]

people.sort((a, b) => a.age - b.age); 
console.log(people);

// -------------------------------------------------------------
const tian = "elephant"
mots= tian.split("")
console.log(mots);

// -------------------------------------------------------------
let fix = [12,22,46,78,3,56,1,0]
lean=Math.max(...fix)
console.log(lean);

//ou

console.log(Math.max(1,45,64,888))
// -------------------------------------------------------------

const isBool = ((a,b) =>{
    if(a ===1 || b ===1 || a + b ===1){
        return true
    }else {
        return false
    }

})
ze =isBool(3,8);
console.log(ze);
