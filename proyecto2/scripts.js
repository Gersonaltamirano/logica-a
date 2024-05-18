function unir() {
    nombre = document.getElementById('name').value;
    apellido = document.getElementById('apellido').value;

    if(nombre != '' || apellido != '') {
        resultado = nombre + ' ' + apellido;
    }else  {
        alert('Ingrese nombre y apellido');
        return;
    }


    document.getElementById('resultado').value = resultado;

}