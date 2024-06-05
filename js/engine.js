var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var img = new Image();

img.src = 'img/capa.png';

img.onload = function(){
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
}

function mostrarLinkJogar(){
    document.getElementById('link_jogar').style.display = 'block';
}