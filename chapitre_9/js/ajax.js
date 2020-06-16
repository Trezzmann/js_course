function ajaxGet(url,fonction){

    var req = new XMLHttpRequest();
    req.open("GET",url);

    req.addEventListener("load", function(){

        if (req.status <= 200 && req.status < 400) {
            fonction(req.responseText);
        }
        else{
            console.log(req.status+" :"+req.statusText);
        }

    })

    req.addEventListener("error", function(){
        console.log("Erreur reseau :"+url);
    })

    req.send(null);
}