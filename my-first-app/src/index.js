import React from "react"; //we are importing react from node modules
import ReactDOM from "react-dom/client";
import App from "./App";
import PropsEx from "./components/props/propsEx";
import "./index.css";
import PropsEx2 from "./components/props/propsEx2";

// function PrintName (){
//   return <h1>hello react JS</h1>
// }

/*ReactDOM.render(<PrintName/>,document.getElementById("root")) this is used for react 18V*/

const root = ReactDOM.createRoot(document.getElementById("root"));


// setInterval(() => {   //it renders the functonality based on the interval
//   root.render(<App/>);
// }, 1000);             //number is timer period given in milliSec

root.render(<PropsEx2/>)      // to remove set interval, i commented the above function 