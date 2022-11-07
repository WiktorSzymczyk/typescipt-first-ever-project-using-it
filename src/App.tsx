import React from 'react';
import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet 
      name='Wiktor'
    surname='Szymczyk'
    city='Slough'
    state='Berkshire'
    zip='ZIP ZIP ZIP'
    phone='+44 123456' />
    </div>
  );
}

export default App;
