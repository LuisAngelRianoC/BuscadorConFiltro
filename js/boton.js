// Prueba boton presionado 
// Importar el código a probar
import { Button } from './boton';

// Definir una prueba usando Jest
describe('Prueba para el componente Button', () => {
  test('El botón debe estar presionado después de hacer clic', () => {
    // Crear un elemento HTML de ejemplo usando jsdom
    const button = new Button();

    // Simular un clic en el botón
    button.click();

    // Verificar que el botón esté presionado
    expect(button.isPressed()).toBe(true);
  });

  test('El botón no debe estar presionado al inicio', () => {
    // Crear un elemento HTML de ejemplo usando jsdom
    const button = new Button();

    // Verificar que el botón no esté presionado al inicio
    expect(button.isPressed()).toBe(false);
  });
});


export class Button {
    constructor() {
      this._pressed = false;
  
      // Crear el botón y añadir un controlador de eventos para el clic
      this._element = document.createElement('button');
      this._element.addEventListener('click', () => {
        this._pressed = true;
      });
    }
  
    // Devuelve si el botón está presionado o no
    isPressed() {
      return this._pressed;
    }
  
    // Simula un clic en el botón
    click() {
      this._element.click();
    }
  
    // Devuelve el elemento HTML del botón
    getElement() {
      return this._element;
    }
  }
  