import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';

// Functional component that combines Greeting and Counter components
function App() {
  return (
    <div style={{ padding: '2rem' }}>
      {/* Pass the required 'name' prop to Greeting */}
      <Greeting name="Asma" />
      {/* Render the Counter component */}
      <Counter />
    </div>
  );
}

export default App;