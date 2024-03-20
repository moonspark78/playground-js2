let num = [4, 12, 3, 44, 7, 9, 10];

const pair = num.filter((i) => i % 2 === 0);
//console.log(pair);

const carre = num.map((i) => i ** 2);
//console.log(carre);








//Question 1
//Question : Comment utiliser la méthode filter() pour filtrer les chaînes de caractères d'une liste ?
const elements = [10, 'hello', 20, 'world', 30, "leo",23, "moto"];
const trie = elements.filter(i => typeof(i) === "string")
console.log(trie);


//Question 2
//Question : Comment filtrer un tableau d'objets en fonction d'une propriété spécifique ?
const personnes = [
    { nom: 'John', age: 25 },
    { nom: 'leo', age: 44 },
    { nom: 'Jane', age: 7 },
    { nom: 'lea', age: 18 },
    { nom: 'Alice', age: 20 }
];
const sup = personnes.filter(i => i.age > 20)
console.log(sup);

//Question 3
//Question : Comment utiliser filter() pour trouver les nombres supérieurs à une certaine valeur dans un tableau ?
let numm = [4, 12, 3, 44, 7, 9, 10];
let sep = numm.filter(i => i<10)
console.log(sep);

//Question 4
//Question : Comment utiliser filter() pour trouver les éléments qui contiennent une sous-chaîne
//spécifique dans un tableau de chaînes de caractères ?
const fruits = ['pomme', 'banane', 'orange', 'kiwi'];
let contai = fruits.filter(i => i.includes("a"))
console.log(contai);