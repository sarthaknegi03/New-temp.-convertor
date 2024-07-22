let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celToFar(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;   //accept string and convert it into floating point number
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farToCell(){
    let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat( output.toFixed(2));
    console.log(output);
}