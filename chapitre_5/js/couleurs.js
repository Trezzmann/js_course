document.addEventListener("keypress",function(e){

	var div = document.getElementsByTagName('div');
	
	switch (String.fromCharCode(e.charCode)) {
		case 'r':
			
			for(i=0;i<div.length;i++){
				div[i].style.backgroundColor = 'red';
			}
			break;
		case 'j':
			
			for(i=0;i<div.length;i++){
				div[i].style.backgroundColor = 'yellow';
			}
			break;
		case 'v':
			
			for(i=0;i<div.length;i++){
				div[i].style.backgroundColor = 'green';
			}
			break;
		case 'b':
			
			for(i=0;i<div.length;i++){
				div[i].style.backgroundColor = 'white';
			}
			break;
		default:
			
	}
})
