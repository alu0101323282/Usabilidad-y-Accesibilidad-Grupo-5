import {saveUser, getUser, updateUser} from './firebase.js';    //Importamos desde firebase.js saveUser, getUser, updateUser

window.addEventListener('DOMContentLoaded', async ()=>{   //Usamos async para que espere a la base de datos de forma asincrona, ya esta tiene un leve retraso
  //console.log('holaaaa')

  /* Mostrar un usuario con el Id */
  const u =  await getUser('y5dX2sS9deswvwgHMvUo');   //await hace esperar a la informacion, le pasamos el id del usuario, esta la obtenemos en firebase
  console.log(u.data());
  /* Actualizar usuario */
  const cambios={   //Introducimos los cambios a actualizar
    nombre:'Juanv2',
    apellido:'Perezv2',
    telefono:'000000000'
  }
  updateUser('y5dX2sS9deswvwgHMvUo',cambios);   //Aplicamos al usuario con esa id los cambios 
})

const formulario = document.getElementById('formulario');   //Obtenemos la informacion del index.html a trabves del id=formulario


formulario.addEventListener('submit',(e)=>{
  e.preventDefault();   //Podemos usar esta funcion para evitar que la pagina se recarge al pulsar el boton submit
  console.log(formulario)

  const nombre=formulario['first_name'];
  const apellido=formulario['last_name'];
  const email=formulario['email'];

  saveUser(nombre.value, apellido.value, email.value)

})



function cargarDatos(){  
  $("#boton").click(function(){
      var encontrado = false;
      var name = $("#first_name").val();
      var lastname = $("#last_name").val();
      var email = $("#email").val();
      $.get( 'data.json', function(datos){
          datos.clientes.forEach(cliente => {
              if ((cliente.nombre.toString() === name) && (cliente.apellido.toString() === lastname) &&
              (cliente.email.toString() === email)) {
                  encontrado = true;
                  $("#respuesta").html('Nombre completo: ' + cliente.nombre + ' ' + cliente.apellido +
                    ' Email: ' + cliente.email) 
              }
          });      
      });
     /*  if(!encontrado) {
          $("#respuesta").html('Cliente no encontrado');
      } */

  });
}