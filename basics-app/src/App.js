import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  return() {
  return(
    <div>
    <div className="App">
    <h1> Hello React </h1>
    <Person></Person>
    {/*importing in a different way */}
    <Person/>
    <Person/>
    </div> 
    <p>Hey!!!</p>
    </div>
  );
}
}

//  function App() {
//    return React.createElement('div', null, 
//    React.createElement('div', {className: 'App'}, 
//    React.createElement('h1', null, 'Hello Reactjs!!!')),
// React.createElement('p', null, 'Hey!!!'));
//  }

export default App;
