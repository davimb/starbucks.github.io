let circulo = document .querySelector(".circulo")
let imagem = document.querySelector(".copao-verde")

console.log(imagem.src)

 function trocarCor(cor){
    circulo.style.background = cor
 }

 function trocaImagem(img){
    imagem.src = img
 }