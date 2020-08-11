import React from 'react';
//import logo from './logo.svg';
import './App.css';

// function App()
// {
//   return(
//     <div>
//     <div className="App"
//     <h1> Hello</h1>
//     </div> 
   
//     <p>Hey!!!</p>
//     </div>
//   );
// }

 function App() {
   return React.createElement('div', null, 
   React.createElement('div', {className: 'App'}, 
   React.createElement('h1', null, 'Hello Reactjs!!!')),
React.createElement('p', null, 'Hey!!!'));
 }

export default App;
