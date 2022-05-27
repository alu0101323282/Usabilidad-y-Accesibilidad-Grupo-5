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
  const telefono=formulario['phone_number'];

  saveUser(nombre.value, apellido.value, telefono.value)

})