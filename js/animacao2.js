function Animacao(context){
    this.context = context;
    this.sprites = [];
    this.ligado = false;
}

Animacao.prototype = {
    novoSprite: function(sprite){
        this.sprites.push(sprite);
    },
    ligar: function(){
        this.ligado = true;
        this.proximoFrame();
    },
    desligar: function(){
        this.ligado = false;
    },
    proximoFrame: function(){
        // Perguntar se pode continuar.
        if(!this.ligado) return;

    // A cada ciclo preciso limpar a tela 
    this.limparTela();

    //Atualizar o estado dos sprites
    for(var i in this.sprites)
    this.sprites[i].atualizar();

    // Desenhar os sprites
    for( var i in this.sprites)
    this.sprites[i].desenhar();

    // Chamar o proximo ciclo
    var animacao = this;
    requestAnimationFrame(function(){
        animacao.proximoFrame();
    });
},
limparTela: function(){
    var limpar = this.context;
    limpar.clearRect(
        0,
        0, 
        limpar.canvas.width,
         limpar.canvas.height);
}

}