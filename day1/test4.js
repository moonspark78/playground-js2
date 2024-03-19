// Questions sur map :
//Question 1 : Utilisez map pour transformer une liste de nombres en une liste de leurs carrés.
let nombresm = [1, 2, 3, 4, 5];
let carre = nombresm.map(i => i**2)
console.log(carre);   // Output :  1, 4, 9, 16, 25 ]


//Question 2 : Utilisez map pour formater une liste de noms en ajoutant "Bonjour, " devant chaque nom.
let noms = ["Alice", "Bob", "Charlie"];
let format = noms.map(i => "Bonjour, " + i)
console.log(format);    // Output :

//Question 3 : Utilisez map pour extraire les prénoms d'une liste d'objets représentant des personnes.
let personnes = [{ nom: "Smith", prenom: "John" }, { nom: "Doe", prenom: "Jane" },{ nom: "zoeo", prenom: "ali" },{ nom: "dany", prenom: "laure" }];
let prenom = personnes.map(personne => personne.prenom)
console.log(prenom);  // Output : 




//----------------------------------------------------------------
//Questions sur filter :
//Question 1 : Utilisez filter pour filtrer les nombres pairs d'une liste de nombres.
let nombresf = [1, 2, 3, 4, 5];
let even = nombresf.filter((i) => i % 2 === 0);
console.log(even); // Output : [ 2, 4 ]


//Question 2 : Utilisez filter pour filtrer les éléments d'une liste d'objets basés sur une condition spécifique. (age < 30)
let data = [{ nom: "Smith", age: 30 }, { nom: "Doe", age: 25 },{ nom: "mir", age: 17 },{ nom: "lola", age: 31 }];
let supp = data.filter(i => i.age <30);
console.log(supp);      //OUTPUT :[ { nom: 'Doe', age: 25 }, { nom: 'mir', age: 17 } ]




//----------------------------------------------------------------
//Questions sur reduce :
//Question 1 : Utilisez reduce pour calculer la somme des nombres dans une liste.
let nombres = [2, 4, 4, 5, 5];
const sum = nombres.reduce((acc, cur) =>{
    return acc + cur
},0)
console.log(sum);   //OUTPUT : 20



//Question 2 : Utilisez reduce pour concaténer tous les éléments d'une liste en une seule chaîne de caractères.
let mots = ["Bonjour", "à", "tous"];
let phrases = mots.reduce((acc, cur) =>{
    return acc + " " + cur
},"")
console.log(phrases);  //OUTPUT : Bonjour à tous



//Question 3 : Utilisez reduce pour trouver le nombre maximal dans une liste de nombres.
let nombresmax = [10, 5, 20, 8, 15, 100];
let max = nombresmax.reduce((acc, cur) =>{
    return cur > acc ? cur : acc
},0)
console.log(max); //OUTPUT : 100





//Question 4 : Utilisez reduce pour trouver le nombre min dans une liste de nombres.
let nombresmin = [10, 5, 20, 8, 15];
let min = nombresmin.reduce((min,num) =>{
    return min > num ? num : min
},nombresmin[0])
console.log(min); //OUTPUT : 5


//Pour supprimer les espaces en trop dans une chaîne de caractères en JavaScript
let chaine = "   Ceci    est   une   chaîne   de   caractères    avec   des   espaces    en    trop.   ";
chaine= chaine.trim()
chaine= chaine.replace(/\s+/g, ' ')
console.log(chaine); //OUTPUT :Ceci est une chaîne de caractères avec des espaces en trop.




let rond= [10, 5, 20, 8, 15];
let qx = rond.reduce((acc,cur) =>{
    return cur>acc ? cur : acc 
},0)

console.log(qx);


let qxx = Math.max(...rond)
console.log(qxx);

// Inversser une chaine de caractere :
let phrase = "Bonjour à tous";
let mot = phrase.split(" ")
let inverse = mot.reverse()
let phrasez = inverse.join(" ");
console.log(phrasez);
