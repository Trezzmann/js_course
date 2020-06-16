var md1 = document.getElementById("mdp1");
var md2 = document.getElementById("mdp2");

mdp1.addEventListener("input", function(e){
	var infomdp = "";
	var regex = /[0-9]/;

	if(e.target.value.length >= 6){

		if (regex.test(e.target.value)) {
		
		}else {
			infomdp = "le mot de passe doit contenir un nombre"
		}
	
	}else {
		infomdp = "mot de passe trop court,au minimum 6 caracteres";
	}

	var info = document.getElementById("infoMdp");
	info.textContent = infomdp
})

mdp2.addEventListener("input", function(e){

	var infomdp = "";
	if(e.target.value !== mdp1.value){
		var infomdp = "les mots de passe doivent etre correspondants ";
	}
	var info = document.getElementById("infoMdp");
	info.textContent = infomdp

})