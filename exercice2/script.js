"use-strict"
// déclaration du tableaux
let monTableauFelins = ["Tigre","Lion","Panthère","Ocelot","Puma"],
    triIndexImpair = [],
    monTableauPoissons = ["truite","Ablette","Brochet","Carpe","Gardon"],
    monTableauAnimaux = [];




console.log(monTableauFelins);
monTableauFelins = monTableauFelins.filter((word)=> word.length <= 5);
console.log(monTableauFelins);
monTableauFelins.push("Léopard");
console.log(monTableauFelins);

for (let i = 0; i < monTableauFelins.length; i++) {
    if(monTableauFelins.indexOf((monTableauFelins[i]))%2 === 0){
        triIndexImpair[i] = monTableauFelins[i];
        triIndexImpair.splice(i,1);
    }
    else{
        triIndexImpair[i] = monTableauFelins[i];
    }

}
console.log(triIndexImpair);

monTableauAnimaux =  triIndexImpair.concat(monTableauPoissons);
console.log(monTableauAnimaux);
console.log(monTableauAnimaux.length);



