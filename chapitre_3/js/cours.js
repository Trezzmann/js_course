window.addEventListener('load',function(){

// document.getElementById("langages").innerHTML = "";
document.querySelector("h1").textContent += ' de programmation';
// document.querySelector("h1").setAttribute("id", "titre");
document.querySelector("h1").id = "titre";

var pythonElt  = document.createElement("li");
pythonElt.id = "pyt";
pythonElt.setAttribute('class', 'trezz');
pythonElt.textContent = "Python";





var bash = document.createElement("li");
bash.id = 'bash';
bash.textContent = 'Bash';

document.getElementById("langages").insertBefore(pythonElt, document.getElementById('csharp'));
document.getElementById('langages').insertAdjacentHTML('beforeend','<li id="js">Javascript</li>');
// document.getElementById("langages").replaceChild(bash, document.getElementById('js'));


//supprimer l'element
document.getElementById('langages').removeChild(document.getElementById('java'));

document.getElementById('langages').insertAdjacentHTML('afterend','En voici une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation">liste</a> plus complete ici');

// var  test = document.querySelector("h1");
// console.log(test.classList[0])
// test.classList.remove('debut');
// test.classList.add('fin');
// console.log(test.classList[0])

document.getElementById("langages").insertAdjacentHTML('afterbegin','<li id="javascript">React native</li>');
})
