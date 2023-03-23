console.log("Ejecutando JS...");



function getRandomInt(min, max) {
    x_coord = Math.floor(Math.random() * (max - min)) + min;

}

obtener_coord = getRandomInt(100,180);
console.log(x_coord);


const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 200;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");


ctx.beginPath();
    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.arc(x_coord, 87, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'blue';

    //-- Dibujar el trazo
    ctx.stroke()

    //-- Dibujar el relleno
    ctx.fill()
    
ctx.closePath()

ctx.beginPath();
    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.rect(4, 77, 20, 20);
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'green';

    //-- Dibujar el trazo
    ctx.stroke()

    //-- Dibujar el relleno
    ctx.fill()
    
ctx.closePath()

