// Banco de dados com as respostas automáticas da IA
const respostasIA = {
    "Como a IA prevê o clima?": "Eu utilizo dados de satélites e sensores no solo. Meu algoritmo cruza essas informações com históricos de anos anteriores para prever chuvas ou frentes frias com até 95% de precisão!",
    "Qual a melhor época para plantar?": "Depende do que você vai plantar! Mas analisando os dados atuais de umidade do solo e temperatura para este mês, o sistema recomenda iniciar o plantio nos próximos dias devido a uma previsão de chuva favorável.",
    "Como evitar o desperdício de água?": "Eu me conecto a sensores IoT instalados na raiz das plantas. O sistema de irrigação só é ligado se o solo estiver abaixo de 40% de umidade, economizando milhares de litros de água!"
};

function enviarPergunta(textoPergunta) {
    const chatWindow = document.getElementById('chatWindow');

    // 1. Cria e adiciona a mensagem do usuário na tela
    const msgUsuario = document.createElement('div');
    msgUsuario.className = 'mensagem usuario';
    msgUsuario.innerText = textoPergunta;
    chatWindow.appendChild(msgUsuario);

    // Rola o chat para baixo automaticamente
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // 2. Simula o robô pensando e responde após 600 milissegundos
    setTimeout(() => {
        const msgBot = document.createElement('div');
        msgBot.className = 'mensagem bot';
        
        // Busca a resposta correspondente no banco de dados
        msgBot.innerText = respostasIA[textoPergunta] || "Desculpe, ainda estou processando essa informação!";
        
        chatWindow.appendChild(msgBot);
        
        // Rola o chat para baixo novamente
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 600);
}
