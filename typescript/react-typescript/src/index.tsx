import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextPrivider } from './Hooks/useContext/UserContext';
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root.render(
//   <UserContextPrivider>   {/*strictmode helps to highligt problems */}
//     <App />
//   </UserContextPrivider>
// );

root.render(
  <BrowserRouter>.
    <App />
  </BrowserRouter>);
