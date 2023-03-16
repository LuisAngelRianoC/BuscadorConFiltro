// Obtencion de los datos de People
let people = 'http://localhost:3001/People'
fetch(people)
        .then(response => response.json())
        .then(data => mostrarPeople(data))
        .catch(error => console.log(error))

const mostrarPeople = (data) => {
    let body = ''
    for (let i = 0; i < data.length; i++){
        body += `<tr><td>${data[i].nombre}</td><td>${data[i].conexion}</td></tr>`
    }
    document.getElementById('people').innerHTML = body
}

// Obtencion de los datos de Files
let files = 'http://localhost:3001/Files'
fetch(files)
        .then(response => response.json())
        .then(data => mostrarFiles(data))
        .catch(error => console.log(error))

const mostrarFiles = (data) => {
    let body = ''
    for (let i = 0; i < data.length; i++){
        body += `<tr> <td>${data[i].nombre}</td><td>${data[i].subido}</td></tr>`
    }
    document.getElementById('files').innerHTML = body
}

// Obtencion de los datos de Channels
let channels = 'http://localhost:3001/Channels'
fetch(channels)
        .then(response => response.json())
        .then(data => mostrarChannels(data))
        .catch(error => console.log(error))

const mostrarChannels = (data) => {
    let body = ''
    for (let i = 0; i < data.length; i++){
        body += `<tr> <td><div class="circulo"> <i class=" fa-solid fa-hashtag"></i></div></td> <td>${data[i].nombre}</td><td>${data[i].miembros}</td></tr>`
    }
    document.getElementById('channels').innerHTML = body
}
