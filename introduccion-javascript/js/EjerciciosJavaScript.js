function textoTarjeta() {
    var texto;
    texto=prompt('Texto de tarjeta:','');
    document.getElementById('texto-tarjeta').innerHTML = texto;
}

function informePaginaInicio() {
    let p = document.getElementsByTagName('p').length;
    let li = document.getElementsByTagName('li').length;
    let div = document.getElementsByTagName('div').length;
    window.alert(`Informe página de inicio:\n  Número de párrafos: ${p}\n  Número de elementos de lista: ${li}\n  Número de cajas: ${div}`);      
}