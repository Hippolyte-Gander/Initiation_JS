// const maConstane = x => creation d'une constante x
// let maVariable = y => creation d'une variable y


// synthaxe condition: condition ? siVrai : siFaux
// synthaxe boucle FOR: for (initialisation; condition pour continuer; incrémentation) {}

// synthaxe pour appeler un méthode sur un tableau : unTableau.uneMethode()
// tableau[2] = a => modifie la valeur à l'index 2 par a
// tableau.push(x) => ajoute x à la fin du tableau
// tableau.join(",") => transforme un tableau en string en séparant les éléments par une virgule
// tableau.includes (x) => renvoie true ou false si x est dans le tableau ou nom
// tableau.indexOf(x) => renvoie l'index de l'élément x dans le tableau (renvoie -1 s'il ny est pas)
// tableau.slice((indexDebutEltInclus, indexFinEltExclu) => renvoie une copie d'un morceau du tableau sans toucher au tableau initial

// let list = document.querySelector("ul") => permet de sélectionner la première ul du doc
// let listElements = list.querySelectorAll("ul") => permet de sélectionner tous les éléments de cette ul (il faut que la fonction de dessus soit mise au préalable)
// listElements.forEach(function(element){
//     Element.style.color = "red"
// }) => met tous les éléments de la liste en rouge(il faut que la fonction de dessus soit mise au préalable)
// console.dir() => consulter les propriétés d'un élément et ce qu'elles contiennent
// parentNode => éléments parent

console.log("Hello JS!");
// -------------------- Boucle IF --------------------
let age = 7;

if (age >= 18) {
    console.log("La personne est majeure.");
} else {
    console.log("La personne est mineure.")
}

if (age >= 100) {
    console.log("La personne est centenaire");
}else if (age >= 80) {
    console.log("La personnes est au moins octogénaire.");
}else if (age >= 60) {
    console.log("La personnes est au moins sexagénaire.");
}else if (age >= 40) {
    console.log("La personnes est au moins quardragénaire.");
}else {
    console.log("La personne n'est pas encore quadragénaire.");
}

// -------------------- SWITCH --------------------
let numberToGuess = 7;
let operation = "foisDeuxPlusTrois";

switch (operation) {
    case "plusUn":
        numberToGuess++;
        break;
    case "foisDeuxPlusTrois":
        numberToGuess *= 2;
    case "PlusTrois":
        numberToGuess += 3;
        break;
    default:
        numberToGuess = 0;
        break;
}
                
// -------------------- Boucle FOR avec incrémentation / décrémentation --------------------
for (let i=5; i > 0; i--) {
    console.log(`${i}...`)
}
console.log("Bonne année !");

// -------------------- Boucle WHILE --------------------
let kAge = 12;
while (kAge < 18) {
    console.log(`J'ai maintenant ${kAge} ans...`);
    kAge++;
}
console.log(`J'ai finalement ${kAge} ans.`);

// --------------------  Tableaux --------------------
const tabNums = [11, 22, 33, 44, 55, 66, 77];
const tabVide =[];
tabVide.push(2);
tabVide.push(3);
tabVide.push(7);
console.log("tabVide[1] = ", tabVide[1]);

// --------------------  Tableaux associatifs --------------------

let pikachu ={
    id: 25,
    name: "Pikachu",
    weightKg: 6.0,
    hpMax: 80,
    attacks:[
        {
            name: "Vive-Attaque",
            damages: 10,
        },
        {
            name: "Boule Élek",
            damages: 20,
        }
    ]
}
console.log("pikachu", pikachu);

function listerAttaquesPokemon(pokemon) {
    console.log(`${pokemon.name} possède ${pokemon.attacks.length} attaques :`);
    for(let i=0; i < pokemon.attacks.length; i++){
        const attaque = pokemon.attacks[i];
        console.log(`\t"${attaque.name}" (puissance ${attaque.damages})`);
    }
}
listerAttaquesPokemon(pikachu);

// --------------------  DOM (Document Object Model) --------------------
