// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom

var maisons = [

    {

        code: "ST",

        nom: "Stark"

    },

    {

        code: "LA",

        nom: "Lannister"

    },

    {

        code: "BA",

        nom: "Baratheon"

    },

    {

        code: "TA",

        nom: "Targaryen"

    }

];


// Renvoie un tableau contenant quelques personnages d'une maison

function getPersonnages(codeMaison) {

    switch (codeMaison) {

    case "ST":

        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];

    case "LA":

        return ["Tywin", "Cersei", "Jaime", "Tyrion"];

    case "BA":

        return ["Robert", "Stannis", "Renly"];

    case "TA":

        return ["Aerys", "Daenerys", "Viserys"];

    default:

        return [];

    }

}

window.addEventListener("load", function(){

    console.log('la page est chargée');
    var maison = document.getElementById("maison");
    for(i=0;i<maisons.length;i++){
        var opt = document.createElement("option");
        opt.value = maisons[i].code;
        opt.textContent = maisons[i].nom;
        maison.appendChild(opt);
    }
})

var maison = document.getElementById("maison");
maison.addEventListener("change", function(e){

    var persons = document.getElementById("persos");
    persons.innerHTML = "";
    
    var perso = getPersonnages(e.target.value);
    for(i=0;i<perso.length; i++){

        var elt = document.createElement("li");
        elt.textContent = perso[i];
        persons.appendChild(elt);
    }

})