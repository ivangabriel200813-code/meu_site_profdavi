// FILMES
let filmes = [

    {
    titulo: "Deus Não Está Morto",
    imagem: "filme.jpg",
    descricao: "é um pupular da franquia de filmes cristã , que aborda fé cristã versus o ateísmo."
    }
    
    ];
    
    // SÉRIES
    let series = [
    
    {
    titulo: "Chosen",
    imagem: "chosen.jpg",
    descricao: "THE CHOSEN (os escolhidos) é uma clamada série sobre a vida de Jesus Cristo."
    }

    
    ];
    
    function mostrar(){
    
    let listaFilmes = document.getElementById("listaFilmes");
    let listaSeries = document.getElementById("listaSeries");
    
    filmes.forEach(function(f){
    
    listaFilmes.innerHTML += `
    <div class="card">
    <img src="${f.imagem}">
    <h3>${f.titulo}</h3>
    <p>${f.descricao}</p>
    </div>
    `;
    
    });
    
    series.forEach(function(s){
    
    listaSeries.innerHTML += `
    <div class="card">
    <img src="${s.imagem}">
    <h3>${s.titulo}</h3>
    <p>${s.descricao}</p>
    </div>
    `;
    
    });
    
    }
    
    mostrar();
