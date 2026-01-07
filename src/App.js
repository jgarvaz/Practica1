import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React + Jenkins</h1>

      <p data-testid="contador">
        Contador: {contador}
      </p>

      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default App;

