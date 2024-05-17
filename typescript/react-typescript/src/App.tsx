import React from 'react';
import './App.css';
import Increment from './Hooks/useState/Increment';
import Index from './Hooks/useState/UseState-adv';

function App() {
  return (
    <main className='container'>
      <button className='button'>click me</button>
        <Increment />
        <Index />
    </main>
  )
}

export default App;
