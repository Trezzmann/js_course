function infosLiens()
{
	let liens = document.getElementsByTagName('a');
	let last = document.getElementsByTagName('a').length;
	console.log(liens[0]);
	console.log(liens[last-1]);
}

function possede(id,classe)
{
	var instr = document.getElementById(id);
	if (instr !== null) 
	{
		console.log(instr.classList.contains(classe));
	}
	else
	{
		console.log(`aucun identifiant appelé ${id}`)
	}
}
infosLiens();

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur