// Exécute un appel AJAX GET

// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès

// function ajaxGet(url, callback) {

//     var req = new XMLHttpRequest();
//     req.open("GET", url);
//     req.addEventListener("load", function () {

//         if (req.status >= 200 && req.status < 400) {

//             // Appelle la fonction callback en lui passant la réponse de la requête
//             callback(req.responseText);

//         } else {

//             console.error(req.status + " " + req.statusText + " " + url);

//         }

//     });

//     req.addEventListener("error", function () {

//         console.error("Erreur réseau avec l'URL " + url);

//     });

//     req.send(null);

// }

// ajaxGet("http://localhost/javascript-web-srv/data/langages.txt",function(reponse){
//     console.log(reponse)
// })

function ajaxGet(url,fonction){

    var req = new XMLHttpRequest();
    req.open("GET",url);

    req.addEventListener("load", function(){

        if (req.status <= 200 && req.status < 400) {
            fonction(req.responseText);
        }
        else{
            console.log(req.status+" :"+req.statusText);
        }

    })

    req.addEventListener("error", function(){
        console.log("Erreur reseau :"+url);
    })

    req.send(null);
}

// ajaxGet("http://127.0.0.1/javascript-web-srv/data/langages.txt",function(rep){

//     var langages = rep.split(";");
//     var langues = document.getElementById("langages");

//     langages.forEach( function(langage) {
        
//         var elt = document.createElement("li");
//         elt.textContent = langage;
//         langues.appendChild(elt);
//     });
//     document.querySelector("body").appendChild(langues);

// })