let btnPeople = document.getElementById('btnPeople')
let btnFiles = document.getElementById('btnFiles')
let btnChannels = document.getElementById('btnChannels')

let sectionPeople = document.getElementById('peopleSection');
let sectionFiles = document.getElementById('filesSection');
let sectionChannels = document.getElementById('channelsSection');

let hr = document.getElementById('hr')
let hr2 = document.getElementById('hr2')

let tabla = document.getElementsByClassName('tabla')

let flag1 
let flag2
let flag3

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

btnPeople.addEventListener('click', () => {

    if ( flag1 == 1) {
        mostrarTodo()
    }else{
        mostrarP()
    }
})

btnFiles.addEventListener('click', () => {

    if (flag2 == 1) {
        mostrarTodo()
    }else{
        mostrarF()
    }
})

btnChannels.addEventListener('click', () => {

    if (flag3 == 1) {
        mostrarTodo()
    }else{
        mostrarC()
    }
})


function mostrarTodo() {

    sectionPeople.style.display = 'block'
    sectionFiles.style.display = 'block'
    sectionChannels.style.display = 'block'
    
    btnPeople.classList.remove('p-activo')
    btnFiles.classList.remove('f-activo')
    btnChannels.classList.remove('c-activo')

    

    mostrarHr()

    flag1 = 0 
    flag2 = 0 
    flag3 = 0 
}

function mostrarP() {

    sectionPeople.style.display = 'block'
    sectionFiles.style.display = 'none'
    sectionChannels.style.display = 'none'

    btnPeople.classList.add('p-activo')
    btnFiles.classList.remove('f-activo')
    btnChannels.classList.remove('c-activo')

    ocultarHr()

    flag1 = 1
    flag2 = 0 
    flag3 = 0 
}

function mostrarF() {
    sectionPeople.style.display = 'none'
    sectionFiles.style.display = 'block'
    sectionChannels.style.display = 'none'

    btnPeople.classList.remove('p-activo')
    btnFiles.classList.add('f-activo')
    btnChannels.classList.remove('c-activo')

    ocultarHr()

    flag1 = 0
    flag2 = 1
    flag3 = 0 
    
}

function mostrarC() {
    sectionPeople.style.display = 'none'
    sectionFiles.style.display = 'none'
    sectionChannels.style.display = 'block'

    btnPeople.classList.remove('p-activo')
    btnFiles.classList.remove('f-activo')
    btnChannels.classList.add('c-activo')

    ocultarHr()
    
    flag1 = 0
    flag2 = 0
    flag3 = 1
}


function ocultarHr(){
    hr.classList.add('hr-oculto')
    hr2.classList.add('hr-oculto')
}

function mostrarHr(){
    hr.classList.remove('hr-oculto')
    hr2.classList.remove('hr-oculto')
}