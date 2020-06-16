/*
Exercice : profil GitHub
// */

// var infosElt = document.getElementById("infos");

// var formElt = document.querySelector("form");
// formElt.addEventListener("submit", function (e) {
//     e.preventDefault();
//     var nomProfil = formElt.elements.profil.value;
//     ajaxGet("https://api.github.com/users/" + nomProfil, function (reponse) {
//         // Transformation de la réponse en un objet JSON
//         var profil = JSON.parse(reponse);
//         // Création des informations sur le profil
//         var avatarElt = document.createElement("img");
//         avatarElt.src = profil.avatar_url;
//         avatarElt.style.height = "150px";
//         avatarElt.style.width = "150px";
//         var nomElt = document.createElement("div");
//         nomElt.textContent = profil.name;
//         nomElt.style.fontSize = "20px";
//         var employeurElt = document.createElement("div");
//         employeurElt.textContent = profil.company;
//         var siteElt = document.createElement("a");
//         siteElt.href = profil.blog;
//         siteElt.textContent = siteElt.href;
//         // Affichage des informations
//         infosElt.innerHTML = ""; // Suppression des infos précédentes
//         infosElt.appendChild(avatarElt);
//         infosElt.appendChild(nomElt);
//         infosElt.appendChild(employeurElt);
//         infosElt.appendChild(siteElt);
//     });
// });


var nom = document.getElementById("user");
var form = document.querySelector("form");
var infoSpace = document.querySelector("div")

form.addEventListener("submit",function(e){

    e.preventDefault();
    var userName = nom.value;
    infoSpace.innerHTML = ""; 
    ajaxGet("https://api.github.com/users/" + userName,function(reponse){
        
        var info = JSON.parse(reponse);
        var avatar = document.createElement("img");
        avatar.src = info.avatar_url;
        avatar.style.height = "150px";
        avatar.style.width ="150px";

        var nomUser = document.createElement("h2");
        nomUser.textContent = info.name;

        var urlUser = document.createElement("a")
        urlUser.textContent = info.blog;
        urlUser.href = info.blog

        infoSpace.appendChild(avatar);
        infoSpace.appendChild(nomUser);
        infoSpace.appendChild(urlUser);

        console.log(userName);
    })
})