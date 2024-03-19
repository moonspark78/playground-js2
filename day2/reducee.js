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