//-----------Reduce--------------
let tab = [55, 4, 11, 26, 32, 57, 77, 100, 2, 4, 5, 9];


// Pour trouver la somme :
const sum = tab.reduce((acc , cur) => {
    return acc + cur
},0);
console.log(sum);


// Le plus grand élément :
const max  = tab.reduce((acc , cur) => {
    return acc > cur ? acc : cur;
},tab[0]);
console.log(max);


// Le plus petit élément : 
const min = tab.reduce((acc , cur) => {
    return acc > cur ? cur : acc;
},tab[0]);
console.log(min);


//------
const words = ["chat", "éléphant", "arbre", "voiture", "banane", "le"];

// Le mots le plus long: 
const plusLongMot = words.reduce((acc , cur) => {
    return acc.length > cur.length ? acc : cur;
},words[0])
console.log(plusLongMot);


//Le mot le plus court :
const courtMot =  words.reduce((acc,cur) =>{
    return acc.length > cur.length ? cur : acc;
},words[0])
console.log(courtMot);

// le plus jeune de la liste
const people= [{name: 'John', age: 19},
{name: 'tian', age: 54},
{name: 'marc', age: 24},
{name: 'alban', age: 7},
{name: 'zoro', age: 11},]

const plusJeune = people.reduce((acc,cur) =>{
    return acc.age > cur.age ? cur : acc
},people[0])
console.log(plusJeune);

//---- transformer un tableau en une chaine
const stringsArray = ["apple", "banana", "orange", "grape", "pineapple"];
const chaine = stringsArray.reduce((acc, cur) =>{
    return acc+" " + cur
},)
console.log(chaine);

const chaine2 = stringsArray.join(" ")
console.log(chaine2);
