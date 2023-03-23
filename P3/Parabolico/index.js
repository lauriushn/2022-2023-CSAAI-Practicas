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


lr =20;


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
    
    //coordenadas iniciales de la bala de disparo:
    x = 5;
    y = 140;

    //Velocidad horizontal de la bala: velx
    //Velocidad vertical de la bala: vely


    

    //HACER LA FÍSICA PARA LA BALA DE DISPARO !!!!!!!!!!!!!!!!!!!!!!!!!!!
    //-- Funcion principal de animacion
    function update() 
    {
    
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
            ctx.arc(x, y, 1, 0, 2 * Math.PI);  //bola de disparo

            //-- Dibujar
            ctx.fillStyle = 'black';

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






    
}

gui.reset.onclick = () => {
    console.log('reinicio')
    crono.stop();
    crono.reset();
}



