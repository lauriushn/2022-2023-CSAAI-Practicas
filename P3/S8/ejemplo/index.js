
//-- Declaración de variables y objetos


//-- Coordenadas iniciales del proyectil
let xop = 5;
let yop = 345;
let xp = xop;
let yp = yop;
let ldx = 50;  //proyectil dimension lado x
let ldy = 50;  //proyectil dimension lado y
let pcolor = 'green'  //proyectil color

//-- Coordenadas iniciales del objetivo
let xomin = 200;
let xomax = 770;
let xo = getRandomInt(xomin, xomax);
let yo = 370;
//podriamos poner el radio, angulos...
let ocolor = 'red';


//-- Displays
const display = document.getElementById("display");  //Cronometro
const display1 = document.getElementById("display1");  //Ángulo de disparo
const display2 = document.getElementById("display2");  //Velocidad de disparo

//-- Cronómetro
const crono = new Crono(display);

//-- Acceder al botón de disparo
const btnLanzar = document.getElementById("btnLanzar");

//-- Acceder al botón de inicio
const btnIniciar = document.getElementById("btnIniciar");

//-- Obtención del canvas y de los elementos HTML a usar
const canvas = document.getElementById("ctiro");

//-- Definir dimensiones del canvas
canvas.width = 800;
canvas.height = 400;

//-- Obtener el contexto del canvas 2D:
const ctx = canvas.getContext("2d");


//-- Obtener la posicion del objetivo de forma aleatoria.
obt_coord = getRandomInt(xomin,xomax);


//-- Dibujar el objetivo
dibujarO(xo,yo); // Pintar el objetivo

//-- Dibujar el proyectil
dibujarP(xop, yop, ldx, ldy, pcolor); // Pintar el proyectil


//-- Ángulo del proyectil
angulo.onchange = () => {
    display1.innerHTML = angulo.value;
    angle = angulo.value;
    //console.log(angle);
}


//-- Velocidad del proyectil
velocidad.onchange = () => {
    display2.innerHTML = velocidad.value;
    velp = 0.1*velocidad.value;  //Ponemos el 0.1 multiplicando porque si no desaparece al momento del canvas, porque es demasiado.
    velx = velp*Math.cos((angle*Math.PI)/180); //velocidad en el eje x
    vely = velp*Math.sin((angle*Math.PI)/180); //velocidad en el eje y
    
}




//-- Función principal de actualización
function lanzar() 
{
  //-- Implementación del algoritmo de animación:

  //-- 1) Actualizar posición de los elementos

  xp = xp + velx;
  yp = yp - vely + (1/2)*0.1*velp;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Pintar los elementos en el canvas
  dibujarO(xo,yo); // Pintar el objetivo
  
  //-- Volvemos a llamar a las caracterísitcas del proyectil, es util si por ejemplo al lanzarlo queremos que cambie.
  ldx = 51;
  ldy = 51;
  pcolor = 'blue';
  dibujarP(xp, yp, ldx, ldy, pcolor); // Pintar el proyectil

  //-- 4) Repetir
  requestAnimationFrame(lanzar);
}

//-- Otras funciones....

//-- función para pintar el proyectil
function dibujarP(x,y,lx,ly,pcolor) {

    //-- Pintando el proyectil
    ctx.beginPath();

    //-- Definir un rectángulo de dimensiones lx x ly,
    ctx.rect(x, y, lx, ly);

    //-- Color del borde
    ctx.strokeStyle = pcolor;

    //-- Grosor del borde
    ctx.lineWidth = 2;

    //-- Color de relleno del rectángulo
    ctx.fillStyle = pcolor;

    //-- Mostrar el relleno
    ctx.fill();

    //-- Mostrar el trazo del rectángulo
    ctx.stroke();

    ctx.closePath();
}


//-- función para pintar el objetivo
function dibujarO(x,y) {

    //-- Pintando el objetivo
    ctx.beginPath();

    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.fillStyle = ocolor;

    //-- Dibujar el relleno
    ctx.fill()    

    //-- Dibujar el trazo
    ctx.stroke();

    ctx.closePath();
}


//-- Función generar posicion del objetivo
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


//-- Función de retrollamada del botón de disparo
btnLanzar.onclick = () => {
    lanzar();
    crono.start();
}

//-- Función de retrollamada del botón iniciar
btnIniciar.onclick = () => {
    location.reload();
    crono.stop();
    crono.reset();
}



