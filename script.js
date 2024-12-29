let imagens = document.querySelectorAll('.slide img');
let indice = 0;

function trocarImagem() {
 imagens.forEach((imagem) => {
 imagem.style.display = 'none';
 });
 imagens[indice].style.display = 'block';
 indice++;
 if (indice >= imagens.length) {
 indice = 0;
 }
}

setInterval(trocarImagem, 3000);