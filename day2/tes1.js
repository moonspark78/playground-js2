console.log("------Day 2---------");
console.log("--------------------------");


const letters =  ["b", "t", "d", "c", "f", "w", "a"]
const lettersSorted = letters.sort()
console.log(lettersSorted);


const  lettersP =  ["b", "t", "Z", "c", "f", "w", "a"]; // ici il y a une lettre en majuscule
const lower =  lettersP.map(letter =>  letter.toLowerCase())
const sorted = lower.sort();
console.log(sorted);


const numbers = [2,5,100,4];
const numbersSorted = numbers.sort((a,b) => b-a);
console.log(numbersSorted);

const spiceGirls = [{name: "lea", age: 20},
                    {name: "ali", age: 2},
                    {name: "zoe", age: 100},
                    {name: "emir", age: 55}
                   ]
const comparator = spiceGirls.sort((a,b) =>{
    return a.name, b.name
})
console.log(comparator);


const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numb.filter(i => i * 2)
console.log(even);