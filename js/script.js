let btnPeople = document.getElementById('btnPeople')
let btnFiles = document.getElementById('btnFiles')
let btnChannels = document.getElementById('btnChannels')

let sectionPeople = document.getElementById('peopleSection');
let sectionFiles = document.getElementById('filesSection');
let sectionChannels = document.getElementById('channelsSection');

let tbodyP = document.getElementById('people')
let tbodyF = document.getElementById('files')
let tbodyC = document.getElementById('channels')

let hr = document.getElementById('hr')
let hr2 = document.getElementById('hr2')

let tabla = document.getElementsByClassName('tabla')

let flag1 
let flag2
let flag3

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

    hideRegister()
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

    showRegister()
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

    showRegister()
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

    showRegister()
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

function showRegister() {
    tbodyP.classList.remove('hideRegister')
    tbodyF.classList.remove('hideRegister')
    tbodyC.classList.remove('hideRegister')
}

function hideRegister() {
    tbodyP.classList.add('hideRegister')
    tbodyF.classList.add('hideRegister')
    tbodyC.classList.add('hideRegister')
}