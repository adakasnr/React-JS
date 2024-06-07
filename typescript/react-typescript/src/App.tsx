import React from 'react';
import './App.css';
import Increment from './Hooks/useState/Increment';
import Index from './Hooks/useState/UseState-adv';
import Final from './Hooks/useEffect/UseEffect';
import UseEffect1 from './Hooks/useEffect/UseEffectPractice';
import UseEffect2 from './Hooks/useEffect/UseEffectPractice2';
// import ParentComponent from './Hooks/useContext/UseContext';
// import ParentComponent1 from './Hooks/useContext/ParentConponent';
// import UseReducer from './Hooks/useReducer/UseReducer';
import UseReducerEx from './Hooks/useReducer/UseReducerEx';
import UseRef from './Hooks/useRef/useRef';

function App() {
  return (
    <main className='container'>
      <button className='button'>click me</button>
        <Increment />
        <Index />
    </main>
  )
}

export default UseRef;
