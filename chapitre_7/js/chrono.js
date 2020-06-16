var btn = document.querySelector("button");
var sec = document.getElementById("compteur");
var count = null;


function compter(){
	sec.textContent = Number(sec.textContent) + 1;	
}

btn.addEventListener("click", function(){

	if (btn.textContent === "Demarrer") {
		
		count = setInterval(compter, 1000);
		btn.textContent = "Arreter";
	}
	else{

		clearInterval(count);
		btn.textContent = "Demarrer";
	} 
	
})






// var bouton = document.querySelector("button");
// var compteurElt = document.getElementById("compteur");
// var intervalId = null;
// // var demarre = false Etat du chronomètre : démarré (true) ou arrêté (false)
// var demarre = "off"; 

// // Augmente le compteur de 1
// function augmenterCompteur() {
//     compteurElt.textContent = Number(compteurElt.textContent) + 1;
// }

// bouton.addEventListener("click", function () {
//     if (demarre === "off") {
//         // Démarre le chronomètre : appelle augmenterCompteur toutes les secondes
//         intervalId = setInterval(augmenterCompteur, 1000);
//         bouton.textContent = "Arrêter"; // Modifie le texte du bouton
//         demarre = "on"
//     } else {
//         clearInterval(intervalId); // Arrête le chronomètre
//         bouton.textContent = "Démarrer"; // Modifie le texte du bouton
//         demarre = "off"
//     }
//     // Inverse la valeur de l'état du chronomètre
//     // demarre = !demarre;
// });


/*
Exercice : ballon rebondissant
*/

var cadre = document.getElementById("cadre");
var ballon = document.getElementById("ballon");
var vitesse = 7; // Valeur du déplacement en pixels
// Conversion en nombre du diamètre du ballon (valeur de la forme "XXpx")
var diametreBallon = parseFloat(getComputedStyle(ballon).width);
var animationId = null; // Identifiant de l'animation
var xMin = 0; // Position gauche minimale (bord gauche)
var direction = 1; // Sens de déplacement : 1 = droit, 2 = gauche

// Déplace le ballon vers la gauche ou la droite
function animerBallon() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBallon = parseFloat(getComputedStyle(ballon).left);
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xMax = parseFloat(getComputedStyle(cadre).width);
    // Si le ballon arrive à un bord du cadre
    if ((xBallon + diametreBallon > xMax) || (xBallon < xMin)) {
        // On inverse le sens de déplacement du ballon
        direction *= -1;
    }
    // Déplacement du ballon dans le sens actuel
    ballon.style.left = (xBallon + vitesse * direction) + "px";
    // Demande au navigateur d'appeler animerBallon dès que possible
    animationId = requestAnimationFrame(animerBallon);
}

var demarrerBtn = document.getElementById("demarrer");
var arreterBtn = document.getElementById("arreter");

demarrerBtn.addEventListener("click", function () {
    // Change l'état des boutons
    demarrerBtn.disabled = true;
    arreterBtn.disabled = false;
    // Démarre l'animation
    requestAnimationFrame(animerBallon);
});

arreterBtn.addEventListener("click", function () {
    // Change l'état des boutons
    demarrerBtn.disabled = false;
    arreterBtn.disabled = true;
    // Arrête l'animation
    cancelAnimationFrame(animationId);
});

di7g7gfi