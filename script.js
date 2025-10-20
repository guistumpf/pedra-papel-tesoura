
//variavel que define se algum jogo tá em progresso
let jogando = false

//função que faz o clique do botão selecionar pedra, papel ou tesoura
function botoes() {
    //define as constantes para os elementos no html
    const pedra = document.getElementById("pedra")
    const tesoura = document.getElementById("tesoura")
    const papel = document.getElementById("papel")

    //addEventListener(click, function)funcionar quase igual a um onclick, eu usei aq pra que eu conseguisse escolher o texto que aparece no result do site

    //pede pra que cada elemento abaixo execute a funçao jogar e o .textContent pede pra que use o texto que tá na funcao jogar, nao o texto da constante
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
    // array com emojis, math.random aplicada pra selecionar uma das 3 opçoes da array. .floor pra retornar uma integer ou string e maquina[random] pra definir a array  
    const maquina = ['✊', '✋', '✂️']
    const escolha = Math.random() * 3
    const random = Math.floor(escolha)
    const escolhamaquina = maquina[random]
    return escolhamaquina
    //return pra retornar (duurhhhh)
}



//função 'render', faz os resultados aparecerem na tela, também usa if e else pra logica do pedra papel tesoura
function jogar(escolhajogador) {

    //se o jogo estiver rodando, nao faz nada
    if (jogando) {
        return
    }
    //coloca a tag pra true, impendindo que cliques sejam registrados 
    jogando = true

    const resultadoElemento = document.getElementById("resultado");
    const jogadasmaquina = document.getElementById("maquina");
    const jogadasuser = document.getElementById("user")

    console.log("Jogador escolheu: " + escolhajogador);
    const escolhamaquina = maquina();
    console.log("Máquina escolheu: " + escolhamaquina);


    jogadasuser.innerText = "Você: " + escolhajogador
    jogadasmaquina.innerText = "Máquina: " + escolhamaquina

    //empate   
    if (escolhajogador === escolhamaquina) {
        resultadoElemento.innerText = "Deu empate!";
resultadoElemento.style.color = "grey"
        //logica do ppt aplicada a um else if
    } else if (
        (escolhajogador === '✊' && escolhamaquina === '✂️') ||
        (escolhajogador === '✋' && escolhamaquina === '✊') ||
        (escolhajogador === '✂️' && escolhamaquina === '✋')
    ) 
    {
        resultadoElemento.style.color = "green"
        resultadoElemento.innerText = "Você venceu!";

        //se for diferente do resultado acima, a maquina vence
    } else {
        resultadoElemento.style.color = "red"
        resultadoElemento.innerText  = "A máquina venceu!";
    }




    //coloca um timeout de 1500ms pro user começar um novo jogo
    setTimeout(function () {

        //coloca a variavel de volta pra false pra que o user consiga jogar dnv
        jogando = false
resultadoElemento.style.color = ""
        resultadoElemento.innerText = "Faça sua jogada!";
        jogadasmaquina.innerText = "";
        jogadasuser.innerText = "";

    }, 1500) //1500ms = 1.5 segundos 
}

botoes()


