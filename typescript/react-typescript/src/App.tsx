import React from 'react';
import './App.css';
import Increment from './Hooks/Increment';

function App() {
  return (
    <main className='container'>
      <button className='button'>click me</button>
        <Increment />
    </main>
  )
}

export default App;
