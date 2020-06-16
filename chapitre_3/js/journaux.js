// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

for(i=0 ; i<journaux.length;i++)
{
	var lien = document.createElement('a');
	lien.href = journaux[i];
	lien.textContent = journaux[i];
	lien.innerHTML += '<br>';
	document.getElementById('contenu').appendChild(lien);
}