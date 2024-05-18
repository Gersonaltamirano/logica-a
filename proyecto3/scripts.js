function validar(operacion) {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    var numero3 = document.getElementById('numero3').value;

    if(operacion == 'and'){
        if(numero1 == '' || numero2 == '' || numero3 == ''){
            alert('Ingrese los 3 números');
            return;
        }

        if((numero1 != '1' && numero1 != '0') || (numero2 != '1' && numero2 != '0') || (numero3 != '1' && numero3 != '0')){
            alert('SOLO INGRESE 1 o 0');
            return;
        }

        resultado = numero1 == '1' && numero2 == '1' && numero3 == '1';

        if(resultado){
            resultado = 'VERDADERO';
        }else{
            resultado = 'FALSO';
        }
    }

    if(operacion == 'or'){
        if(numero1 == '' || numero2 == '' || numero3 == ''){
            alert('Ingrese los 3 números');
            return;
        }

        if((numero1 != '1' && numero1 != '0') || (numero2 != '1' && numero2 != '0') || (numero3 != '1' && numero3 != '0')){
            alert('SOLO INGRESE 1 o 0');
            return;
        }

        resultado = numero1 == '1' || numero2 == '1' || numero3 == '1';

        if(resultado){
            resultado = 'VERDADERO';
        }else{
            resultado = 'FALSO';
        }
    }


    document.getElementById('resultado').value = resultado;

}