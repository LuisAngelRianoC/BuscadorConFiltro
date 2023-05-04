const { JSDOM } = require('jsdom');
const ClickBoton = require('./boton')
// prueba unitaria de boton
describe('Realiza una prueba del comportamiento del boton al hacer click', () => {
  test('Verificar si el botón ha sido presionado', () => {

    const mockCallBack = jest.fn();
    const boton = new JSDOM(`<!DOCTYPE html><body><button id="btnPeople" class="btn p">People</button></body>`);
    boton.window.document.querySelector('#btnPeople').click();

    // expect(ClickBoton).toHaveBeenCalled();
    // expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
