// inverser une chaine de caractère
let paragraphe = "Le développement web est une compétence essentielle et modernes.";
let sep = paragraphe.split(" ");
//console.log(sep);
let inverser = sep.reverse()
//console.log(inverser);
let chaineInverse = inverser.join(" "); 
//console.log("La chaine inverser est :", chaineInverse);


let roman = "L'histoire de Rome est fascinante depuis ses débuts jusqu'à sa chute.";
let inverse = roman.split(" ").reverse().join(" ");
//console.log(inverse);



//------------------------ tableau chaine 
let proverbe = "Qui sème le vent récolte la tempête.";
let tabProv = proverbe.split(" ");
//onsole.log(tabProv);



// Enlever le premier mot 
        //let enlevePremier = tabProv.shift();
        //console.log(tabProv);


// Enlever le dernier mot
        //let enleverDernier = tabProv.pop();
        //console.log(tabProv);


// Ajouter un mot au début
        //let ajouDebut = tabProv.unshift("messi");
        //console.log(tabProv);



// Ajoute un mot a la fin 
        //let ajouFin = tabProv.push("messi")
        //console.log(tabProv);


//ser.splice(1, 9, "messi","leo")
        //let modif = tabProv.splice(1,5,"leo");
        //console.log(tabProv);




//------------------------ tableau nombre
let number = [11,5,23,6,9,45,15,66]
console.log(number);
let numbers = [11,5,23,6,9,45,15,66]


// Enlever le premier nombre 
        //numbers.shift();
        //console.log(numbers);



// Enlever le dernier nombre
        //numbers.pop();
        //console.log(numbers);


// Ajouter un nombre au début
        //numbers.unshift(999)
        //console.log(numbers);




// Ajoute un nombre a la fin 

        //numbers.push(0)
        //console.log(numbers);


//ser.splice(1, 9, "messi","leo")

        //numbers.splice(2,5,999,777)
        //console.log(numbers);








//-----------------exo

//Vérifier si c'est un paladromme

const palindromme = (mot) => {
    mot=mot.toLowerCase();
    let motInvers = mot.split("").reverse().join("");

    return mot === motInvers ? true : false;
};

console.log(palindromme("radaer"));