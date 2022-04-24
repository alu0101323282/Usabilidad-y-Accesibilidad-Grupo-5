function cargarDatos(){  
    $("#boton").click(function(){
        var encontrado = false;
        var name = $("#first_name").val();
        var lastname = $("#last_name").val();
        var phoneNumber = $("#phone_number").val();
        $.get( 'data.json', function(datos){
            datos.clientes.forEach(cliente => {
                if ((cliente.nombre.toString() === name) && (cliente.apellido.toString() === lastname) &&
                (cliente.telefono === phoneNumber)) {
                    encontrado = true;
                    $("#respuesta").html('Nombre completo: ' + cliente.nombre + ' ' + cliente.apellido +
                      ' Número de teléfono: ' + cliente.telefono + ' Nacionalidad: ' + cliente.nacionalidad +
                      ' Edad: '+ cliente.edad)
                }
            });      
        });
        if(!encontrado) {
            $("#respuesta").html('Cliente no encontrado');
        }
    });
}

