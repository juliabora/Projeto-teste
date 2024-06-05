var GATO_DIREITA = 68;
var GATO_ESQUERDA = 65;
var SETA_CIMA = 38;
var SETA_BAIXO = 40;

function Gato(context, teclado, imagem){
    this.context = context;
    this.teclado = teclado;
    this.x = 0;
    this.y = 0;
    this.velocidade = 10;

    //Criando a spritesheet
    this.sheet = new Spritesheet(context, imagem, 2, 2);
    this.sheet.intervalo = 60;
    
    // Estado inicial 
    this.andando = false;
    this.direcao = GATO_DIREITA;
}
Gato.prototype = {
    atualizar: function(){
        if(this.teclado.pressionada(SETA_D)){
            // Se já não está neste estado
            if(!this.andando || this.direcao != GATO_DIREITA){
                // Seleciono o quadro da spritesheet
                this.sheet.linha = 2;
                this.sheet.coluna = 1;
            }
            this.andando = true;
            this.direcao = GATO_DIREITA;

            // Neste estado, a animação deve rodar
            this.sheet.proximoQuadro();

            // Deslocar o Sonic para a direita
            this.x += this.velocidade;
        } else if(this.teclado.pressionada(SETA_A)){
            // Se já não está no estado
            if(!this.andando || this.direcao != GATO_ESQUERDA){
                // Seleciono o quadro da spritesheet
                this.sheet.linha = 2;
                this.sheet.coluna = 1;
            }
            this.andando = true;
            this.direcao = GATO_ESQUERDA;

            this.sheet.proximoQuadro();

            this.x -= this.velocidade;
        } else {
            if(this.direcao == GATO_DIREITA)
                this.sheet.coluna = 0;
            else if(this.direcao == GATO_ESQUERDA)
                this.sheet.coluna = 1;
            this.sheet.linha = 0;
            this.andando = false;
        }
      // Adicionar lógica para subir e descer
      if(this.teclado.pressionada(SETA_W)){
        this.y -= this.velocidade;
        this.sheet.coluna = 3;
        this.sheet.linha = 1;
    } else if(this.teclado.pressionada(SETA_S)){
        this.y += this.velocidade;
        this.sheet.coluna = 1;
        this.andando = false;
    }
},
desenhar: function(){
    this.sheet.desenhar(this.x, this.y);
    }
}