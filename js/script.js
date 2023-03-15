const productos =[ 
    {nombre: ' p',sesion: '3 minutos'},
    {nombre: ' giovanni',sesion: '5 minutos'},
    {nombre: ' javier',sesion: '15 minutos'},
    {nombre: ' Ericka',sesion: '30 minutos'},
]

$("#boton").on('click', function () {
    
    for (let producto of productos){
        
        var escribi = $("#buscador").val();
        escribi = escribi.toLowerCase();
        escribi = escribi.split(" ").join("");

        var andoBuscando = producto.nombre;
        andoBuscando = andoBuscando.toLowerCase();
        andoBuscando = andoBuscando.split(" ").join("");

        console.log(escribi + ' con ' + andoBuscando)

        if(escribi == andoBuscando) {
            console.log("lo encontre")
            console.log(producto)
        }
    }
})
