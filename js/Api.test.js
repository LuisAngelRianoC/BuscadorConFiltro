const axios = require('axios');

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

