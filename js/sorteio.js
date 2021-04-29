
function trocaImg() {
    var logo = {
        logos: [
            "css/img/Attack_on_Titan_-_Logo.png",
            "css/img/sticker-png-logo-one-piece-one-piece-label.png",
            "css/img/saiki.png",
            "css/img/nanatsuLogo.png",
            "css/img/JujutsuLogo.png",
            "css/img/haikyuuLogo.png",
        ]
    }

    var randomiza = 0
    randomiza = parseInt(Math.random() * logo.logos.length)
    console.log(randomiza)
    document.getElementById("imagem").src = randomiza
}

