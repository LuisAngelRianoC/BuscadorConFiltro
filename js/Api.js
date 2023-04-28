
let people = 'https://644c2ed817e2663b9d020061.mockapi.io/buscador/People'
fetch(people)
    .then(response => response.json())
    .then(data => mostrarPeople(data))
    .catch(error => console.log(error))

const mostrarPeople = (data) => {
    let body = ''

    for (let i = 0; i < data.length; i++) {
        body += `
                <tr> 
                    <td> <div class="circulo"> <img src="${data[i].foto}"></div> </td> 
                    <td class="registro">${data[i].nombre} <div class="espacio"></div> <div id="statusP${i+1}">${data[i].conexion} </div> </td> 
                </tr>
            `;
    }

    document.getElementById('people').innerHTML = body
    validStatusCard(data);
}


// Obtencion de los datos de Files
let files = 'https://644c2ed817e2663b9d020061.mockapi.io/buscador/Files'
fetch(files)
    .then(response => response.json())
    .then(data => mostrarFiles(data))
    .catch(error => console.log(error))

const mostrarFiles = (data) => {
    let body = ''

    for (let i = 0; i < data.length; i++) {
        body += `
        <tr> 
        <td> <div class="circulo"> <img src="${data[i].icono}"></div </td> 
        <td class="registro">${data[i].nombre} <div class="espacio"></div> <div id="statusF${i+1}"> ${data[i].subido} </div> </td> 
        </tr>`
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
    for (let i = 0; i < data.length; i++) {

        body += `
        <tr> 
        <td><div class="circulo"> <i class="fa-thin fa-hashtag"></i> </div></td> 
        <td class="registro">${data[i].nombre} <div class="espacio"></div> <div>${data[i].miembros} Miembros </div> </td> 
        </tr>`
    }
    document.getElementById('channels').innerHTML = body
}

// validacion de status 
function validStatusCard(data){
    for (let i = 0; i < data.length; i++) {
        let edoconp = document.getElementById(`statusP${i+1}`);
            let dato = `${data[i].status}`
            
            if (dato == 1) {
                edoconp.classList.add("edoConexion");
            } else {
                edoconp.classList.remove('edoConexion')
            }
    }
}

