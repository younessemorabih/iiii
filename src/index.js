import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//  import Welcom from './compente2/comp2';
//import Navbar from './compenent/comp1';
import  Siadbar from './compenent/comp3'
import Hello from './TpCv/inputS'
import Anformatonpersonne from './TpCv/inputS' 
import  Usetp from './TpCv/useState'
import Message from './tp3/index';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
 {/* <App/> *
  {/* <Anformatonpersonne/> */}
 {/* <Usetp/> */}
 <App/>
</React.StrictMode>

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
