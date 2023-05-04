const axios = require('axios');
const { JSDOM } = require('jsdom');

// prueba unitaria de input
describe('Realiza una prueba si exite coincidencia con el valor del input o no', () => {
    test('El input debe tener el nombre de "LUIS"', () => {
      const input = new JSDOM(`<!DOCTYPE html><body><input id="buscador" class="buscador" value="LUIS" type="text" /></body>`);
      const buscador = input.window.document.querySelector('#buscador');
      expect(buscador.value).toBe('LUIS');
    });
  });
  