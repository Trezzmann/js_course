console.log(document.body.childNodes[5].childNodes[1]);


let variable=document.getElementsByTagName("h2");
console.log(variable[1]);
console.log(variable.length)


let merveillesElmts = document.getElementsByClassName("merveilles");
console.log(merveillesElmts.length);
for (const element of merveillesElmts)
{
	console.log(element);
}

let paragraphe = document.querySelectorAll("#contenu p");
for (const element of paragraphe)
{
	console.log(element);
}

console.log(document.getElementById('contenu').innerHTML);
console.log(document.getElementById('contenu').textContent);

console.log(document.querySelector("li").getAttribute("class"))

// Liste des classes de l'élément identifié par "antiques"
var classes = document.getElementById("antiques").classList;
console.log(classes.length); // Affiche 1 : l'élément possède une seule classe
console.log(classes[0]); // Affiche "merveilles"