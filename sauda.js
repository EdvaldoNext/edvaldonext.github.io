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
                saudacao = "Madrugada e você acordado(a) ao invés de dormir, vai descansar 😉! bom ";
            } else if (horas < 12) {
                saudacao = "Bom dia!";
            } else if (horas < 18) {
                saudacao = "Boa tarde!";
            } else {
                saudacao = "Boa noite!";
            }

            return `${saudacao} Sou Desenvolvedor e Gestor Público, apaixonado por tecnologia e inovação.! Agora são exatamente ${horas}:${minutos}:${segundos}. Hoje é ${diaDaSemana}, dia ${diaDoMes} de ${mes} de ${ano}. Explore meu portfólio e conheça minha trajetória. `;
        }

        function atualizarSaudacaoEData() {
            document.getElementById("resultado").innerText = saudacaoEData();
        }
        // Inicializa a saudação e data ao carregar a página
        atualizarSaudacaoEData();
        // Atualiza a saudação e data a cada segundo (opcional)
        setInterval(atualizarSaudacaoEData, 1000);
