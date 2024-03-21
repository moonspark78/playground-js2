let num = [4, 12, 3, 44, 7, 9, 10];

//pair
pair = num.filter(i => i%2===0)
console.log(pair);

//carre
let carre = num.map(i => i**2)
console.log(carre);










//Question 1
//Question : Comment utiliser la méthode filter() pour filtrer les chaînes de caractères d'une liste ?
const elements = [10, 'hello', 20, 'world', 30, "leo",23, "moto"];
const car = elements.filter(i => typeof(i) === "string")
console.log(car);




//Question 2
//Question : Comment filtrer un tableau d'objets en fonction d'une propriété spécifique ?
const personnes = [
    { nom: 'John', age: 25 },
    { nom: 'leo', age: 44 },
    { nom: 'Jane', age: 7 },
    { nom: 'lea', age: 18 },
    { nom: 'Alice', age: 20 }
];
const spp = personnes.filter(person => person.age < 25)
console.log(spp);


//Question 3
//Question : Comment utiliser filter() pour trouver les nombres supérieurs à une certaine valeur dans un tableau ?
let numm = [4, 12, 3, 44, 7, 9, 10];
const sip = num.filter(i => i>10)
console.log(sip);


//Question 4
//Question : Comment utiliser filter() pour trouver les éléments qui contiennent une sous-chaîne
//spécifique dans un tableau de chaînes de caractères ?
const fruits = ['pomme', 'banane', 'orange', 'kiwi', "Alin"];
const inc = fruits.filter(i => i.toLowerCase().includes("a"))
console.log(inc);
