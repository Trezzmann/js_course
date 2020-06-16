


var elt = getComputedStyle(document.getElementById('contenu'));
var list = document.createElement('ul');

var para = document.createElement('p');
para.textContent = "informations sur l'element";

var hauteur = document.createElement('li');
hauteur.textContent = `Hauteur : ${elt.width}` ;
var largeur = document.createElement('li');
largeur.textContent = `Largeur : ${elt.height}`;

list.appendChild(hauteur);
list.appendChild(largeur);


document.querySelector('body').appendChild(para);
document.querySelector('body').appendChild(list);
