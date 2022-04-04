//Ejercicio 2
function textoTarjeta() {
    var texto;
    texto=prompt('Texto de tarjeta:','');
    document.getElementById('texto-tarjeta').innerHTML = texto;
}

//Ejercicio 3
function informePaginaInicio() {
    let p = document.getElementsByTagName('p').length;
    let li = document.getElementsByTagName('li').length;
    let div = document.getElementsByTagName('div').length;
    window.alert(`Informe página de inicio:\n  Número de párrafos: ${p}\n  Número de elementos de lista: ${li}\n  Número de cajas: ${div}`);      
}

//Ejercicio 4. El json debe estar en el propio código, inicializando una variable, porque
//si no fuera así habría que obtener los datos desde un servidor externo.
function calcularPrecioCompra(cliente) {
  let precioTotal = 0;
  let descuento = 100 - cliente.descuento;
  cliente.productosactual.forEach(p => {
    precioTotal += p.precioproducto;
  });
  return precioTotal = precioTotal * descuento/100;
}


//Ejercicio 5
function mostrarImporteCompra(precio, metodoPago) { 
    res = new Date();
    window.alert(`Importe de compra: ${precio}\nFecha de pago: ${metodoPago? res: addDaysToDate(res, 30)}`);
}

function addDaysToDate(date, days){
    var res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
}

const cliente1 = JSON.parse('{"nombre": "Juan","nacimiento":"la laguna","dni": "78654268B","numerocuenta": 20165687,'+
'"modalidadpago": false,"descuento": 20,"productosactual": [{"nombreproducto": "papas","precioproducto": 5 },{"nombreproducto": "agua",'+
'"precioproducto": 2},{"nombreproducto": "fruta","precioproducto": 4}]}');
const cliente2 = JSON.parse('{"nombre": "Maria","nacimiento":"la laguna","dni": "78654268B","numerocuenta": 20165687,"modalidadpago": true,'+
'"descuento": 20,"productosactual": [{"nombreproducto": "papas","precioproducto": 5},{"nombreproducto": "agua","precioproducto": 2},{'+
'"nombreproducto": "fruta","precioproducto": 4}]}');