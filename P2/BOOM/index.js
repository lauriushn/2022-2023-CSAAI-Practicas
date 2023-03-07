


function getRandomInt(min, max) {
    var counter1 = Math.floor(Math.random() * (max - min)) + min;
    var counter2 = Math.floor(Math.random() * (max - min)) + min;
    var counter3 = Math.floor(Math.random() * (max - min)) + min;
    var counter4 = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('contador1').innerHTML = counter1;
    document.getElementById('contador2').innerHTML = counter2;
    document.getElementById('contador3').innerHTML = counter3;
    document.getElementById('contador4').innerHTML = counter4;
}
counter = getRandomInt(0, 9);
console.log(counter)

