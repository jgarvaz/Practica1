import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('el contador se incrementa al pulsar el botón', () => {
  render(<App />);

  // Valor inicial
  const contador = screen.getByTestId('contador');
  expect(contador).toHaveTextContent('Contador: 0');

  // Click en el botón
  const boton = screen.getByText(/incrementar/i);
  fireEvent.click(boton);

  // Valor esperado tras el click
  expect(contador).toHaveTextContent('Contador: 1');
});

