var elt = document.querySelector('p');
elt.style.color = 'red';
elt.style.padding = "40px";
elt.style.fontFamily = "cursive";
elt.style.backgroundColor = "green";


var elementPara = document.getElementsByTagName('p');

console.log(elementPara[0].style.color);
console.log(elementPara[1].style.color);
console.log(elementPara[2].style.color);

var element = getComputedStyle(document.getElementById('para'));
console.log(element.color);
console.log(element.fontFamily);