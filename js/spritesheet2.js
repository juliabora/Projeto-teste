function Spritesheet(context, imagem, linhas, colunas) {
    this.context = context;
    this.imagem = imagem;
    this.numLinhas = linhas;
    this.numColunas = colunas;
    this.intervalo = 0;
    this.linha = 0;
    this.coluna = 0;
}

Spritesheet.prototype = {
    proximoQuadro: function() {
        // Momento atual
        var agora = new Date().getTime();

        // Se ainda não tenho último tempo medido
        if (!this.ultimoTempo) this.ultimoTempo = agora;

        // Já é hora de mudar de coluna?
        if (agora - this.ultimoTempo < this.intervalo) return;
        if (this.coluna < this.numColunas - 1) {
            this.coluna++;
        } else {
            this.coluna = 0;
        }

        // Guardar a mudança
        this.ultimoTempo = agora;
    }, // vírgula separando métodos
    desenhar: function(x, y) {
        var largura = this.imagem.width / this.numColunas;
        var altura = this.imagem.height / this.numLinhas;

        this.context.drawImage(
            this.imagem,
            largura * this.coluna,
            altura * this.linha,
            largura,
            altura,
            x,
            y,
            largura,
            altura
        );
    }
};