
var secretkey = [];

function getRandomInt(min, max) {
    randomkey1 = Math.floor(Math.random() * (max - min)) + min;
    randomkey2 = Math.floor(Math.random() * (max - min)) + min;
    randomkey3 = Math.floor(Math.random() * (max - min)) + min;
    randomkey4 = Math.floor(Math.random() * (max - min)) + min;
    //document.getElementById('contador1').innerHTML = randomkey1;
    document.getElementById("contador1").innerHTML = "*"
    secretkey.push(randomkey1);
    //document.getElementById('contador2').innerHTML = randomkey2;
    document.getElementById("contador2").innerHTML = "*"
    secretkey.push(randomkey2);
    //document.getElementById('contador3').innerHTML = randomkey3;
    document.getElementById("contador3").innerHTML = "*"
    secretkey.push(randomkey3);
    //document.getElementById('contador4').innerHTML = randomkey4;
    document.getElementById("contador4").innerHTML = "*"
    secretkey.push(randomkey4);
}


randomkey = getRandomInt(0, 9);
console.log(secretkey);

//-- Elementos de la gui
const gui = {
    display : document.getElementById("display"),
    display2 : document.getElementById("display2"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset"),
    contador1 : document.getElementById("contador1"),
    contador2 : document.getElementById("contador2"),
    contador3 : document.getElementById("contador3"),
    contador4 : document.getElementById("contador4"),
}

var valores = [];


//-- Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
}

 //-- Variable de estado de la calculadora
 //-- Al comenzar estamos en el estado inicial
 let estado = ESTADO.INIT;  


//-- Función de retrollamada de los digitos
function digito(ev)
{
    //-- Se ha recibido un dígito
    //-- Según en qué estado se encuentre la calculadora
    //-- se hará una cosa u otra

    //-- Si es el primer dígito, no lo añadimos,
    //-- sino que lo mostramos directamente en el display
    if (estado == ESTADO.INIT) {

        display2.innerHTML = ev.target.value;
        valores.push(ev.target.value);
        console.log(valores);
        if (randomkey1 == ev.target.value) {
            gui.contador1.innerHTML = randomkey1
        } else if (randomkey2 == ev.target.value) {
            gui.contador2.innerHTML = randomkey2
        } else if (randomkey3 == ev.target.value) {
            gui.contador3.innerHTML = randomkey3
        } else if (randomkey4 == ev.target.value) {
            gui.contador4.innerHTML = randomkey4
        }

        //-- Pasar al siguiente estado
        estado = ESTADO.OP1;
        crono.start();

       


    } else {
       
        //--En cualquier otro estado lo añadimos
        display2.innerHTML += ev.target.value;
        valores.push(ev.target.value);
        console.log(valores);
        if (randomkey1 == ev.target.value) {
            gui.contador1.innerHTML = randomkey1
        } else if (randomkey2 == ev.target.value) {
            gui.contador2.innerHTML = randomkey2
        } else if (randomkey3 == ev.target.value) {
            gui.contador3.innerHTML = randomkey3
        } else if (randomkey4 == ev.target.value) {
            gui.contador4.innerHTML = randomkey4
        }

        

        //-- Y nos quedamos en el mismo estado
        //-- Ojo! Este ejemplo sólo implementa el primer
        //-- estado del diagrama. Habría que tener en 
        //-- cuenta el resto... lo debes hacer en tu práctica
    } 
    
}


digitos = document.getElementsByClassName("digito")

for (let boton of digitos) {

    //-- Se ejecuta cuando se pulsa un boton
    //-- que es un dígito. Para que el código sea 
    //-- mas legible la función de retrollamada se
    //-- escribe como una función normal (digito)
    boton.onclick = (ev) => {
        digito(ev);
}
}

//HACER ALGO PA COMPARAR LOS VALORES DE SECRETKEY Y DE VALORES PARA QUE SI COINCIDEN ALGUNO CON ALGUNO CAMBIE EL ASTERISCO POR EL DIGITO!!


//-------- Resto de funciones de retrollamada
const crono = new Crono(gui.display);


gui.start.onclick = () => {
    console.log("start");
    crono.start();
}
  
//-- Detener el cronómetro
gui.stop.onclick = () => {
    console.log("stop");
    crono.stop();
}

//-- Poner a cero la expresión
//-- Y volver al estado inicial
clear.onclick = () => {
    display2.innerHTML = "0";
    estado = ESTADO.INIT;
    secretkey = [];
    valores = [];
    randomkey  = getRandomInt(0, 9)
    console.log(secretkey) // Para ver una vez hacemos reset si se limpia y rellena de nuevo nuestro array secretkey
    crono.stop();
    crono.reset();
    
  }

// Del profe:

//const secretkey = [];
//var long = secretkey.length;


//function getRandomInt(max) {
    //return Math.floor(Math.random()*max);
//}

//for (let i = 0; i < 10; i++) {
    //let rnum = getRandomInt(9);
    //secretkey.push(rnum.toString());
//}

//for (let j = 0; j < long; j++){
    //console.log(secretkey[j]);
//}



