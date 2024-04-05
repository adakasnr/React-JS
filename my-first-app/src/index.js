import React from "react"; //we are importing react from node modules
import ReactDOM from "react-dom/client";
import App from "./App";

// function PrintName (){
//   return <h1>hello react JS</h1>
// }

/*ReactDOM.render(<PrintName/>,document.getElementById("root")) this is used for react 18V*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <App/>
  </>
);