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

//Elementos gui:
const gui = {
    display1 : document.getElementById("display1"),
    display2 : document.getElementById("display2"),
    disparo : document.getElementById("disparo"),
    reset : document.getElementById("reset"),
    display : document.getElementById("display"),
}

const crono = new Crono(gui.display);

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


//Ángulo:
angulo.onchange = () => {
    display1.innerHTML = angulo.value;
    angle = angulo.value;
    console.log(angle)
}

//Velocidad:
velocidad.onchange = () => {
  display2.innerHTML = velocidad.value;
  velx = velocidad.value;
  vely = velocidad.value;

  //Velocidad por consola
    console.log('velocidad:');
    console.log(velx);
    console.log(vely);
}

gui.disparo.onclick = () => {
    console.log('dispara')
    crono.start();
    
}

gui.reset.onclick = () => {
    console.log('reinicio')
    crono.stop();
    crono.reset();
}



