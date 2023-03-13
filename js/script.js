const productos =[ 
    {nombre: ' luis angel',sesion: 3 minutos},
    {nombre: ' giovanni',sesion: 5 minutos},
    {nombre: ' javier',sesion: 15 minutos},
    {nombre: ' Ericka',sesion: 30 minutos},
   
    ]

const buscador=document.querySelector('#buscador');
const boton =document.querySelector('#boton');
const Resultado =document.querySelector('#Resultado')

const filtrar = ()=>{
    //console.log(buscador.value);
Resultado.innerHTML = ´´;

boton.addEventListener('click',filtrar)
const texto = buscador.value.toLowerCase();
for (let producto of productos){
    let nombre = producto.nombre.toLowerCase();
    if (nombre.indexOf(texto) !=-1){
        Resultado.innerHTML +='
        <li>${producto.nombre} - sesion:${producto.sesion} </li>

    '

    
}
    }

