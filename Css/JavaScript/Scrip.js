// Calcula dias
function diasPassados(desdeData){
    var dataRegistrada = new Date(desdeData);// Converte a data fornecida para o formato de data
    var dataAtual = new Date(); // Obtém a data atual
    var diferenca = dataAtual - dataRegistrada;// Calcula a diferença entre as datas em milissegundos
    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));// Calcula o número de dias passados

    document.getElementById("resultado").innerHTML = dias + " DIAS";// Escreve
}
diasPassados("2022-10-08"); // Data início
//----------------------------------------------
function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  // Obtém a largura da div card
  const cardWidth = document.getElementById('card').offsetWidth;
  // Calcula uma posição horizontal aleatória dentro da largura da div card
  const randomLeft = Math.random() * (cardWidth) + 100; // Subtrai 50 para evitar que as partículas ultrapassem os limites
  particle.style.left = randomLeft + 'px'; // Define a posição horizontal da partícula
  document.getElementById('card').appendChild(particle);
}
// Cria uma partícula a cada intervalo de tempo
setInterval(createParticle, 800);