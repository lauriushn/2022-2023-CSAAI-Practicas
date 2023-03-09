console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x1 = 0;
let y1 = 10;

let x2 = 25;
let y2 = 40;

//-- Velocidad horizontal del objeto
let velx1 = 3;
let velx2 = 5;

//-- Velocidad vertical del objeto 
let vely1 = 2;
let vely2 = 3;

//-- Definimos el lado del rectángulo
lr = 20;

//-- Funcion principal de animacion
function update() 
{
  console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posición del  elemento
  //-- (física del movimiento rectilineo uniforme)

   //-- Condicion de rebote en extremos del canvas
   if (x1 < 0 || x1 >= (canvas.width - lr) ) {
    velx1 = -velx1;
    //lr = lr + 1;  //esto da problemas
  }
  if (y1 <=  0 || y1 > canvas.height - lr ) {
    vely1 = -vely1;
    //lr = lr - 1;  //esto da problemas
  }

  //-- Condicion de rebote en extremos del canvas
  if (x2 < 0 || x2 >= (canvas.width - lr) ) {
    velx2 = -velx2;
    //lr = lr + 1;  //esto da problemas
  }
  if (y2 <=  0 || y2 > canvas.height - lr ) {
    vely2 = -vely2;
    //lr = lr - 1;  //esto da problemas
  }

  //-- Actualizar la posición
  x1 = x1 + velx1;
  y1 = y1 + vely1;

  x2 = x2 + velx2;
  y2 = y2 + vely2;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x1, y1, 20, 20);

    ctx.rect(x2, y2, 20, 20);

    //-- Dibujar
    ctx.fillStyle = 'red';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();