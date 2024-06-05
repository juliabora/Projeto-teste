var SONIC_DIREITA = 1;
var SONIC_ESQUERDA = 2;
var SETA_CIMA = 38;
var SETA_ABAIXO = 40;

function Sonic(context, teclado, imagem){
    this.context = context;
    this.teclado = teclado;
    this.x = 0;
    this.y = 0;
    this.velocidade = 10;

    //Criando a spritesheet
    this.sheet = new Spritesheet(context, imagem, 4, 4);
    this.sheet.intervalo = 60;
    
    // Estado inicial 
    this.andando = false;
    this.direcao = SONIC_DIREITA;
}
Sonic.prototype = {
    atualizar: function(){
        if(this.teclado.pressionada(SETA_DIREITA)){
            // Se já não está neste estado
            if(!this.andando || this.direcao != SONIC_DIREITA){
                // Seleciono o quadro da spritesheet
                this.sheet.linha = 3;
                this.sheet.coluna = 1;
            }
            this.andando = true;
            this.direcao = SONIC_DIREITA;

            // Neste estado, a animação deve rodar
            this.sheet.proximoQuadro();

            // Deslocar o Sonic para a direita
            this.x += this.velocidade;
        } else if(this.teclado.pressionada(SETA_ESQUERDA)){
            // Se já não está no estado
            if(!this.andando || this.direcao != SONIC_ESQUERDA){
                // Seleciono o quadro da spritesheet
                this.sheet.linha = 2;
                this.sheet.coluna = 1;
            }
            this.andando = true;
            this.direcao = SONIC_ESQUERDA;

            this.sheet.proximoQuadro();

            this.x -= this.velocidade;
        } else {
            if(this.direcao == SONIC_DIREITA)
                this.sheet.coluna = 0;
            else if(this.direcao == SONIC_ESQUERDA)
                this.sheet.coluna = 1;
            this.sheet.linha = 0;
            this.andando = false;
        }
      // Adicionar lógica para subir e descer
      if(this.teclado.pressionada(SETA_CIMA)){
        this.y -= this.velocidade;
        this.sheet.coluna = 3;
        this.sheet.linha = 1;
    } else if(this.teclado.pressionada(SETA_ABAIXO)){
        this.y += this.velocidade;
        this.sheet.coluna = 1;
        this.andando = false;
    }
},
desenhar: function(){
    this.sheet.desenhar(this.x, this.y);
    }
}