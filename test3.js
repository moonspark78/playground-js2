// Concaténation des éléments d'un tableau en une seule chaîne :

let mots = ["Bonjour", "à", "tous"];
const concate = mots.reduce((acc,cur) =>{
    return acc + " " + cur
},"")
console.log(concate); // Output : Bonjour à tous


let nombres = [10, 5, 20, 8, 15];
const sum= nombres.reduce((acc,cur) =>{
    return acc +cur
},0)
console.log(sum); // Output : 50




const max= nombres.reduce((acc,cur) =>{
    return acc > cur ? acc : cur
},0)
console.log(max); // Output : 
