var personagem1 = "https://i.pinimg.com/originals/b7/78/1e/b7781ef69091046a4189f2f69728e57e.jpg"
var personagem2 = "https://i.pinimg.com/736x/15/c8/75/15c875310f129123451ae24b2ceb219e.jpg"
var expressao1 = "https://w7.pngwing.com/pngs/780/554/png-transparent-monkey-d-luffy-manga-anime-drawing-face-expressions-face-head-color.png"
var expressao2 = "https://w7.pngwing.com/pngs/864/945/png-transparent-anime-face-anime-television-face-photography.png"

var aparecerPersonagem
var mostraPersonagem = document.querySelector(".mostraPersonagem")

var arrayPersonagens = [personagem1, personagem2]
var arrayExpressoes = [expressao1, expressao2]

function sorteia(){
    var sorteiaP = parseInt(Math.random()*2)
    aparecerPersonagem = arrayPersonagens[sorteiaP]
    console.log = aparecerPersonagem
    mostraPersonagem.innerHTML = aparecerPersonagem
}

sorteia()