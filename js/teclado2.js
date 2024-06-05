var SETA_A = 65;
var SETA_D = 68;
var SETA_W = 87;
var SETA_S = 83;
var ESPACO = 32;

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