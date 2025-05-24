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

// hora e data
function saudacaoEData() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes().toString().padStart(2, '0'); // Adiciona um zero à esquerda se necessário
    const segundos = agora.getSeconds().toString().padStart(2, '0'); // Adiciona um zero à esquerda se necessário
    const diaDaSemana = agora.toLocaleString('pt-BR', { weekday: 'long' });
    const diaDoMes = agora.getDate();
    const mes = agora.toLocaleString('pt-BR', { month: 'long' });
    const ano = agora.getFullYear();

    let saudacao;
    if (horas >= 0 && horas < 5) {
        saudacao = "Já é madrugada e você acordado(a) ao invés de dormir, ein!!!";
    } else if (horas < 12) {
        saudacao = "Bom dia!";
    } else if (horas < 18) {
        saudacao = "Boa tarde!";
    } else {
        saudacao = "Boa noite!";
    }


    return `${saudacao} Seja bem-vindo à minha página! Agora são exatamente ${horas}:${minutos}:${segundos}. Hoje é ${diaDaSemana}, dia ${diaDoMes} de ${mes} de ${ano}.`;
}

function atualizarSaudacaoEData() {
    document.getElementById("resultado").innerText = saudacaoEData();
}

// Atualiza a cada segundo
setInterval(atualizarSaudacaoEData, 1000);

// Troca cor de Fundo
/*
const colors = ['#ADD8E6', '#000000', '#FFFFE0', '#D3D3D3', '#FFFFFF']; // Cores que você quer usar
        let currentColorIndex = 0;

        function changeBackgroundColor() {
            document.body.style.backgroundColor = colors[currentColorIndex];
            currentColorIndex = (currentColorIndex + 1) % colors.length; // Avança para a próxima cor
        }

        // Troca a cor a cada 5 segundos (20000 milissegundos)
        setInterval(changeBackgroundColor, 20000);

        // Define a cor inicial ao carregar a página
        changeBackgroundColor();
*/
