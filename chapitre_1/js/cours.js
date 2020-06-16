var h = document.head; // La variable h contient l'objet head du DOM
console.log(h);

var b = document.body; // La variable b contient l'objet body du DOM
console.log(b);

if (document.body.nodeType === document.ELEMENT_NODE) 
{
	console.log("body est un noeud element")
}
else
{
	console.log("body est un noeud textuel");
}


for (var i = 0; i<document.body.childNodes.length; i++)
{
	console.log(document.body.childNodes[i]);
}


var regex_min = /[a-z]/;
var regex_maj = /[A-Z]/;

var chaine = prompt("entrer une chaine de caractere :");
if (regex_min.test(chaine) || regex_maj.test(chaine)) {

	console.log(chaine + ': est une chaine de caractere')
}
else{
	console.log(chaine + ': pas une chaine de caractere')
}
