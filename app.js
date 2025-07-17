let listaNumeroSecretos = [];
let limite = 100;
let numeroSecreto = numeroAleatorio();
let tentativas= 1;


mensagemInicial()

function mudarTextoDaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
mudarTextoDaTela("h1", "Bem vindo ao jogo");
mudarTextoDaTela("p", "Escolha um número de 1 a 100");
}

function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 100 + 1);
    let quantidadeDeItensNaLista = listaNumeroSecretos.length;
        if (quantidadeDeItensNaLista == limite){
            listaNumeroSecretos = [];
        }
        if (listaNumeroSecretos.includes(numeroEscolhido)){
            return numeroAleatorio();
        }else{
            listaNumeroSecretos.push(numeroEscolhido);
            console.log(listaNumeroSecretos);
            return numeroEscolhido;
        }
}

function verificarChute(){
    let chute = document.querySelector("input").value;
        if (chute == numeroSecreto){
            let mensagemTentativa = tentativas > 1? "tentativas" : "tentativa";
         mudarTextoDaTela("h1", "Show! Você ACERTOU!");
         mudarTextoDaTela("p", `Acertou em ${tentativas} ${mensagemTentativa}`);
         document.getElementById("reiniciar").removeAttribute("disabled");
        } else{
            if (chute > numeroSecreto){
                mudarTextoDaTela("h1", "Você errou, tente outra vez");
                mudarTextoDaTela("p", "O número é menor");
            }else {
                mudarTextoDaTela("h1", "Você errou, tente outra vez");
                mudarTextoDaTela("p", "O número é maior");
            }
        }
        tentativas++
        limparCampo();
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}