function sumar() {
    varible1 = parseFloat(document.getElementById('variable1').value);
    varible2 = parseFloat(document.getElementById('variable2').value);

    console.log(varible1, varible2)
    resultado =  varible2 + varible1 ;
    document.getElementById('resultado').value = resultado;
}

function restar() {
    varible1 = document.getElementById('variable1').value;
    varible2 = document.getElementById('variable2').value;
    resultado = parseInt(varible1) - parseInt(varible2);
    document.getElementById('resultado').value = resultado;
}

function multiplicar() {
    varible1 = document.getElementById('variable1').value;
    varible2 = document.getElementById('variable2').value;
    resultado = parseInt(varible1) * parseInt(varible2);
    document.getElementById('resultado').value = resultado;
}

function dividir() {
    varible1 = document.getElementById('variable1').value;
    varible2 = document.getElementById('variable2').value;
    resultado = parseInt(varible1) / parseInt(varible2);
    document.getElementById('resultado').value = resultado;
}