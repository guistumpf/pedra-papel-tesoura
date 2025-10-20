
let jogando = false

//função que faz o clique do botão selecionar pedra, papel ou tesoura
function botoes() {

    const pedra = document.getElementById("pedra")
    const tesoura = document.getElementById("tesoura")
    const papel = document.getElementById("papel")

    pedra.addEventListener('click', function () {
        jogar(this.textContent)
    })

    tesoura.addEventListener('click', function () {
        jogar(this.textContent)
    })

    papel.addEventListener('click', function () {
        jogar(this.textContent)
    })
}

//matematica logica da maquina
function maquina() {

    const maquina = ['🪨', '✋', '✂️']
    const escolha = Math.random() * 3
    const random = Math.floor(escolha)
    const escolhamaquina = maquina[random]
    return escolhamaquina

}



//função 'render', faz os resultados aparecerem na tela, também usa if e else pra logica do pedra papel tesoura
function jogar(escolhajogador) {

if (jogando){
    return
}

jogando = true

   const resultadoElemento = document.getElementById("resultado");
    const jogadasmaquina = document.getElementById("maquina"); 
const jogadasuser = document.getElementById("user")

    console.log("Jogador escolheu: " + escolhajogador);
    const escolhamaquina = maquina();
    console.log("Máquina escolheu: " + escolhamaquina);

  
    jogadasuser.textContent = "Você: " + escolhajogador
jogadasmaquina.textContent = "Máquina: " + escolhamaquina
    
    if (escolhajogador === escolhamaquina) {
        resultadoElemento.textContent = "Deu empate!";
    
    } else if (
        (escolhajogador === '🪨' && escolhamaquina === '✂️') ||
        (escolhajogador === '✋' && escolhamaquina === '🪨') ||
        (escolhajogador === '✂️' && escolhamaquina === '✋')
    ) {
        resultadoElemento.textContent = "Você venceu!";

    } else {
        resultadoElemento.textContent = "A máquina venceu!";
    }

    setTimeout(function() {
        
jogando = false

        resultadoElemento.textContent = "Faça sua jogada!";
        jogadasmaquina.textContent = "";
        jogadasuser.textContent = "";

    }, 1500)
}

botoes()


