//-----------Reduce--------------
let tab = [55, 4, 11, 26, 32, 57, 77, 100, 2, 4, 5, 9];
// Pour trouver la somme :
const sum = tab.reduce((acc,cur) =>{
    return acc + cur 
},tab[0])
console.log("La somme de tout les nombres :" ,sum);


// Le plus petit élément :
const min = tab.reduce((acc,cur) => {
    return acc > cur ? cur : acc
},tab[0])
console.log("Le plus petit nombres est :" ,min);


// Le plus grand élément : 
const max = tab.reduce((acc,cur) => {
    return acc > cur ? acc : cur
},tab[0]);
console.log("Le plus grand nombres est :" ,max);




//------
const words = ["chat", "éléphant", "arbre", "voiture", "banane", "le"];
// Le mots le plus long: 
const plusLongMots = words.reduce((acc,cur) => {
    return acc.length > cur.length ? acc : cur
},words[0])
console.log("Le plus long mots est :" ,plusLongMots);


//Le mot le plus court :
const plusPetitMot = words.reduce((acc,cur) =>{
    return acc.length > cur.length ? cur : acc
},words[0])
console.log("Le plus petit mots est : ", plusPetitMot);



// obj
const people = [
    { name: 'John', age: 25 },
    { name: 'John', age: 18 },
    { name: 'Jane', age: 30 },
    { name: 'Jane', age: 11 },
    { name: 'Alice', age: 20 }
];
// le plus jeune de la liste
const jeune = people.reduce((acc,cur) => {
    return acc.age > cur.age ?cur : acc 
},people[0])
console.log("Le plus jeune est : ",jeune);

// le plus vieux de la liste
const vieux = people.reduce((acc, cur) =>{
    return acc.age > cur.age ? acc : cur
},people[0])
console.log("Le plus vieux est : ",vieux);



//---- transformer un tableau en une chaine
const stringsArray = ["apple", "banana", "orange", "grape", "pineapple"];
const chain = stringsArray.reduce((acc,cur) =>{
    return acc + " " + cur
})
console.log("phrase : ",chain);
console.log(typeof(chain));