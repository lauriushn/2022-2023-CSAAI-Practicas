console.log("Ejecutando JS...");



function getRandomInt(min, max) {
    x_coord = Math.floor(Math.random() * (max - min)) + min;
}

obtener_coord = getRandomInt(150,280);
console.log(x_coord);


const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 150;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");


ctx.beginPath();
    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.arc(x_coord, 137, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';  //contorno
    ctx.lineWidth = 3;  //grosor del contorno
    ctx.fillStyle = 'red';  //relleno

    //-- Dibujar el trazo
    ctx.stroke()

    //-- Dibujar el relleno
    ctx.fill()
    
ctx.closePath()

ctx.beginPath();
    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.rect(4, 127, 20, 20);
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'green';

    //-- Dibujar el trazo
    ctx.stroke()

    //-- Dibujar el relleno
    ctx.fill()
    
ctx.closePath()

angulo.oninput = () => {
    display1.innerHTML = angulo.value;
}

velocidad.oninput = () => {
  display2.innerHTML = velocidad.value;
}