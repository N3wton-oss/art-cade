const frases = [
    "-PLAYER ONE GET READY-", 
    "-INSERT COIN-", 
    "-READY?-", 
    "-GAME OVER-", 
    "-NEW HIGH SCORE-", 
    "-LETS GO-", 
    "-WELL DONE-", 
    "-GAME NOT OVER-"
];

const tickerElement = document.getElementById('ticker-text');

function actualizarFrase() {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    tickerElement.textContent = fraseAleatoria;
}

// Cambiar la frase cada 3 segundos
setInterval(actualizarFrase, 3000);