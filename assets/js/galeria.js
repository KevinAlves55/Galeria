'use strict'

const imagens = [
    "https://p2.trrsf.com/image/fget/cf/800/450/middle/images.terra.com/2020/12/26/alice-in-borderland-1.jpg",
    "https://technewsbrasil.com.br/wp-content/uploads/2021/09/entendendo-o-final-de-round-6.jpg",
    "https://pm1.narvii.com/6348/fa9bc3855382f9d383aee5799fef055e5c347f75_hq.jpg",
    "assets/img/agatha.jpg",
    "assets/img/hela.jpg",
    "assets/img/hisoka.jpg",
    "assets/img/orochimaru.jpg",
    "assets/img/regina.png",
    "assets/img/rumple.jpg",
    "assets/img/scar.jpg",
    "assets/img/sombrio.jpg",
    "assets/img/baronesa.jpg"
]

const filtrarId = (urlImagem) => {
    const ultimaBarra = urlImagem.lastIndexOf("/") + 1
    const ultimoPonto = urlImagem.lastIndexOf(".")
    return urlImagem.substring(ultimaBarra, ultimoPonto)
}

const criarItem = urlImagem => {
    const container = document.querySelector(".galeria-container")
    const novoLink = document.createElement("a")
    novoLink.href = `#${filtrarId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src = "${urlImagem}"alt = "agatha">`
    container.append(novoLink)
} 

const criarSlide = (urlImagem, indice, array) => {
    const container = document.querySelector(".slide-container")
    const novaDiv = document.createElement("div")
    novaDiv.classList.add("slide")
    novaDiv.id = filtrarId(urlImagem)

    const indiceAnterior = indice == 0 ? array.length - 1 : indice -1
    const slideAnterior = filtrarId(array[indiceAnterior])

    const indiceSeguinte = indice == array.length - 1 ? 0 : indice + 1
    const slideSeguinte = filtrarId(array[indiceSeguinte])

    novaDiv.innerHTML = 
    `
        <div class="imagem-container">
            <a href="" class="fechar">&#10006;</a>
            <a href="#${slideAnterior}" class="navigation anterior">&#171;</a>
            <img src="${urlImagem}" alt="Agatha">
            <a href="#${slideSeguinte}" class="navigation proximo">&#187;</a>
        </div>
    `

    container.appendChild(novaDiv)
}

const carregarGaleria = (imgs) => imgs.forEach(criarItem)
const carregarSlide = (imgs) => imgs.forEach(criarSlide)
 
carregarGaleria(imagens)
carregarSlide(imagens)