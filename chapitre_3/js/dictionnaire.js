// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

for (var i = 0; i < mots.length; i++)
{
	var term = document.createElement('dl');
	term.textContent = mots[i].terme;
	term.innerHTML = '<strong>'+ term.innerHTML + '</strong>';

	var def = document.createElement('dd');
	def.textContent = mots[i].definition;
	

	document.getElementById('contenu').appendChild(term);
	document.getElementById('contenu').appendChild(def);


}