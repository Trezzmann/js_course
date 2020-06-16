var count=0;
function clic(){

	count++;
	document.getElementById('compteurClics').textContent = count;

}

let btn_clic = document.getElementById('clic');
btn_clic.addEventListener("click", clic);

document.getElementById("desactiver").addEventListener("click", function (){

	btn_clic.removeEventListener("click",clic)
})