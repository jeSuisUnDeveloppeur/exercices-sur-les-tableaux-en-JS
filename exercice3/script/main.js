"use strict"
//declaration des variables et initialisation de certaines d'entres elles
let dimension,
    buttonResultContainer = document.createElement("div"),
    btnResultat = document.createElement("button"),
    dim,
    message = document.createElement('p'),

    inputContainer = document.getElementById("inputContainer");
    //insertion de la div qui va contenir le bouton rouge "resultat" juste après la div qui contient les inputs
    inputContainer.insertAdjacentElement("afterend",buttonResultContainer);
    //on met en forme le bouton rouge "resultat" on lui ajoute un id:"btnResultat"
    btnResultat.classList.add("btn","btn-danger","mt-5",'mx-center',"center");
    btnResultat.textContent = "resultat";
    btnResultat.setAttribute('id','btnResultat');
//au clic du bouton valider
document.getElementById("buttonValider").addEventListener("click",()=>{
    dimension = document.getElementById("dimTab").value; //récupération de la valeur entrée
    inputContainer.innerHTML = ""; //on efface les input créer précédement lors d'un clic précédent
    buttonResultContainer.innerHTML =""; //on efface les boutons rouges resultat créers lors de clics précédent
//création d'autant d'input que le nombre voulu par l'utilisateurs elles portent l'id "divInput" suivi d'un numéro allant de 0 au nombre utilisateur
    for (let i = 0; i < dimension; i++) {
        inputContainer.insertAdjacentHTML("afterbegin",`<input id="divInput${i}" class="inputStyle styleInput">`);   
    }
//on ajoute des classes pour la mise en forme à la div qui va contenir le bouton resultat
    buttonResultContainer.classList.add("d-flex","flex-row",'flex-wrap',"justify-content-center","w-100");
//on créer dynamiquement dans le flux html le bouton resultat (enfant de la div)
    buttonResultContainer.appendChild(btnResultat);
});
// au clic du bouton rouge resultat
message.innerHTML = `Erreur veuillez renseigner tout les champs avec des valeurs numériques`;
message.classList.add('text-danger','text-center','w-100','mt-5');
btnResultat.addEventListener('click',()=>{
    let valeur = 0;
    let TabInput = [];
    let compteur = 0;
//on récupère la plus grande valeur entrée dans les input dans la variable valeur
        for (let i = 0; i < inputContainer.children.length; i++) {
                TabInput.push(document.getElementById(`divInput${i}`).value);
                if(document.getElementById(`divInput${i}`).value > valeur){
                    valeur = document.getElementById(`divInput${i}`).value;
                }
        }
        TabInput.forEach((el)=>{
            if(el ==''|| isNaN(el)){
               compteur++; 
            }
        })
        if(compteur > 0){
                buttonResultContainer.appendChild(message);
        }
//on compare la valeur de tout les input avec la valeur contenu dans la variable valeur et on met un background jaune aux input qui ont strictement la même valeur
    for (let i = 0; i < inputContainer.children.length; i++)  {
        if(valeur=== document.getElementById(`divInput${i}`).value)  {
            document.getElementById(`divInput${i}`).style.backgroundColor ='yellow';
        }
    }   
});

   


