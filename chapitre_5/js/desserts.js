document.querySelector('button').addEventListener("click", function(){

	let dessert = prompt("enter le dessert à ajouter :");
	let des = document.createElement("li");
	des.textContent = dessert;
	document.getElementById("desserts").appendChild(des);

})
