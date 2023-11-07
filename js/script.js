const palavras = ["BANANA", "CAJU", "MANGA", "MORANGO", "KIWI","TAMARINDO"];
var erros = 0;
var acertos = 0;
var tentativas = "";
palavraSecreta = palavras[Math.floor(Math.random()*6)];

var c = document.getElementById("forca");
var ctx = c.getContext("2d");

desenhaForca();
desenhaBarra();
desenhaApoio();
desenhaTracos();

window.onkeypress = teclaPrecionada;

function teclaPrecionada() {
    if (!tentativas.includes(event.key) && palavraSecreta.includes((event.key).toUpperCase())) {
        adicionaTentativa();
        for (var i=0; 1 < palavraSecreta.length; i++){
            if(palavraSecreta[i]==(event.key).toUpperCase()) {
                ctx.font="35px Arial"
                ctx.fillText((event.key).toUpperCase(), 20 + (35*i), 200)
                acertos++;
            }
        }
    }else {
        adicionaTentativa();
        erros++;
        desenhaBoneco(erros);
    }
    verificaFimJogo();
}

function adicionaTentativa() {
    if (!tentativas.includes(event.key)){
        tentativas=tentativas+event.key;
        ctx.font="20px Arial";
        ctx.fillText("Tentativas: "+ tentativas.toUpperCase(), 20,200);
    }
}
function verificaFimJogo() {
    if (erros>=6) {
        ctx.font="20px Arial";
        ctx.fillText("FIM DE JOGO! A palavra era: "+palavraSecreta, 200, 100);
        window.onkeypress = null;
        return;
    }
    if (acertos == palavraSecreta.length) {
        ctx.font="20px Arial";
        ctx.fillText("Você ganhou!", 200, 100);
        window.onkeypress = null;
        return;
    }
}

function desenhaForca() {
    ctx.moveTo(10,10);
    ctx.lineTo(10,100);
    ctx.stroke();
}
function desenhaBarra() {
    ctx.moveTo(10,10);
    ctx.lineTo(60,10);
    ctx.stroke();
}
function desenhaApoio() {
    ctx.moveTo(60,10);
    ctx.lineTo(60,30);
    ctx.stroke();
}
function desenhaTracos() {
    for (var i=0;i<palavraSecreta.length;i++){
        ctx.moveTo(20+(35*i),200);
        ctx.lineTo(50+(35*i),200);
        ctx.stroke();
    }
}

function desenhaBoneco(erros) {
    switch (erros) {
        case 1:
            desenhaCabeca();
            break;
         case 2:
             desenhaTronco();
             break;
         case 3:
             desenhaBracoEsq();
             break;
        case 4:
             desenhaBracoDir();
             break;
         case 5:
             desenhaPernaEsq();
             break;
         case 6:
             desenhaPernaDir();
             break;
    }
}

function desenhaCabeca() {
    ctx.beginPath();
    ctx.arc(60,40,10,0,2*Math.PI);
    ctx.stroke();
}

function desenhaTronco() {
    ctx.moveTo(60,50);
    ctx.lineTo(60,80);
    ctx.stroke();
}

function desenhaBracoEsq() {
    ctx.moveTo(60,60);
    ctx.lineTo(50,70);
    ctx.stroke();
}

function desenhaBracoDir() {
    ctx.moveTo(60,60);
    ctx.lineTo(70,70);
    ctx.stroke();
}

function desenhaPernaEsq() {
    ctx.moveTo(60,80);
    ctx.lineTo(50,90);
    ctx.stroke();
}

function desenhaPernaDir() {
    ctx.moveTo(60,80);
    ctx.lineTo(70,90);
    ctx.stroke();
}