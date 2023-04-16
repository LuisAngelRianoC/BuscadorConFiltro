const axios = require('axios');
const { JSDOM } = require('jsdom');

// prueba unitaria de api

describe('Realiza una prueba si exite conexion con la api y compruba los datos obtenidos', () => {
test('debe obtener la información de la api People', async () => {
  const response = await axios.get('http://localhost:3001/People');
  expect(response.status).toEqual(200);
  // console.log(response.data)
});

test('debe obtener la información de la api Files', async () => {
  const response = await axios.get('http://localhost:3001/Files');
  expect(response.status).toEqual(200);
  // console.log(response.data)
});

test('debe obtener la información de la api Channels', async () => {
  const response = await axios.get('http://localhost:3001/Channels');
  expect(response.status).toEqual(200);
  console.log(response.data)
});
});


// prueba unitaria de input
describe('Realiza una prueba si exite coincidencia con el valor del input o no', () => {
  test('El input debe tener el nombre de "LUIS"', () => {
    const dom = new JSDOM(`<!DOCTYPE html><body><input id="buscador" class="buscador" value="LUIS" type="text" /></body>`);
    const buscador = dom.window.document.querySelector('#buscador');
    expect(buscador.value).toBe('LUIS');
  });
});


