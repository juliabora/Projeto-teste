function carregarImagens() {
    // Objeto contendo os nomes das imagens
    imagens = {
        espaco: 'chao1.png',
    };

    // Carregar todas as imagens
    for (var i in imagens) {
        var img = new Image();
        img.src = 'IMG/' + imagens[i];
        img.onload = carregando;
        totalImagens++;

        // Substituir nome pela imagem
        imagens[i] = img;
    }
}

// Função chamada quando uma imagem é carregada
function carregando() {
    context.save();

    // Fundo
    context.drawImage(imagens.espaco, 0, 0, canvas.width, canvas.height);

    // Texto carregando
    context.fillStyle = 'white';
    context.strokeStyle = 'black';
    context.font = '50px sans-serif';
    context.fillText("Carregando...", 100, 200);
    context.strokeText("Carregando...", 100, 200);

    // Barra de loading
    carregadas++;
    var tamanhoTotal = 300;
    var tamanho = carregadas / totalImagens * tamanhoTotal;
    context.fillStyle = 'yellow';
    context.fillRect(100, 250, tamanho, 50);
    context.restore();

    // Verifica se todas as imagens foram carregadas
    if (carregadas === totalImagens) {
        iniciarObjetos();
        mostrarLinkJogar();
    }
}