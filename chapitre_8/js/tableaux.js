var tableau = document.querySelector("table");

ajaxGet("http://127.0.0.1/javascript-web-srv/data/films.json",function(rep){

    var films = JSON.parse(rep);
    console.log(films);
    
    films.forEach(film => {
        
        var ligne = document.createElement("tr");
        var col1 = document.createElement("td");
        col1.textContent = film.nom;
     

        var col2 = document.createElement("td");
        col2.textContent = film.annee

        var col3 = document.createElement("td");
        col3.textContent = film.peintre

        ligne.appendChild(col1);
        ligne.appendChild(col2);
        ligne.appendChild(col3);

        
        tableau.appendChild(ligne);
        


    });

});

