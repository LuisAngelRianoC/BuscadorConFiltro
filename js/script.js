let btnPeople = document.getElementById('btnPeople')
let btnFiles = document.getElementById('btnFiles')
let btnChannels = document.getElementById('btnChannels')

const sectionPeople = document.getElementById('peopleSection');
let sectionFiles = document.getElementById('filesSection');
let sectionChannels = document.getElementById('channelsSection');

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
    
    flag1 = 0
    flag2 = 0
    flag3 = 1
}