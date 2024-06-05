var SETA_ESQUERDA = 37;
var SETA_DIREITA = 39;
var SETA_CIMA = 38;
var SETA_ABAIXO = 40;
var ESPACO = 32;
var SETA_A = 65;
var SETA_D = 68;
var SETA_W = 87;
var SETA_S = 83;

function Teclado(elemento){
    this.elemento = elemento;

    // Array de teclas pressionadas
    this.pressionadas = [];

    // Registrar estado das teclas no array
    var teclado = this;
    elemento.addEventListener('keydown', function(evento){
        var tecla = evento.keyCode;
        teclado.pressionadas[tecla] = true;
    });
    elemento.addEventListener('keyup', function(evento){
        teclado.pressionadas[evento.keyCode] = false;
    });
}
Teclado.prototype = {
    pressionada: function(tecla){
        return this.pressionadas[tecla];
    }
};