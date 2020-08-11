import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


// class App extends Component {
//   render() {
//   return(
//     <div>
//     <div className="App">
//     <h1> Hello React </h1>
//     <Person></Person>
//     {/*importing in a different way */}
//     <Person/>
//     <Person/>
//     </div> 
//     <p>Hey!!!</p>
//     </div>
//   );
// }
// }

//  function App() {
//    return React.createElement('div', null, 
//    React.createElement('div', {className: 'App'}, 
//    React.createElement('h1', null, 'Hello Reactjs!!!')),
// React.createElement('p', null, 'Hey!!!'));
//  }

// class App extends Component {
//   render() {
//   return(
//     <div>
//     <div className="App">
//     <h1> Hello React </h1>
//   { /* {<Person></Person>} */}
//     {/*Passing named parameters */}
//     <Person name="Marry" age="23" />
//     <Person name="Max" age="20" />
//    {/* childre property*/}
//     <Person name="May" age="30" >
//    <p> My hobby is chess</p>
//     </Person>
//     </div> 
//     <p>Hey!!!</p>
//     </div>
//   );
// }
// }

class App extends Component {
 //var keywoed isnot used in class 
state= {
  person: [
    {name: "Marry", age: "23"},
    {name:"Max", age: "20"},
    { name: "May", age: "30"},
  ]
}
switchNamesHandler = () => {
  console.log("Clicked the button");
  console.log("Changed names");
this.setState({ 
  person: [
    {name: "Marvw", age: "23"},
  {name:"Bob", age: "20"},
  { name: "Mark", age: "30"},
    
  ]
});
console.log(this.state);
}
  
render() {
  return(
    <div>
    <div className="App">
   <Person name={this.state.person[0].name} age={this.state.person[0].age} />
    <Person name={this.state.person[1].name} age={this.state.person[1].age} />
    <Person name={this.state.person[2].name} age={this.state.person[2].age} />
    <Person name="Mepy" age="35" >
   <p> My hobby is chess</p>
    </Person>
    </div> 
    <button onClick= {this.switchNamesHandler}> Switch names </button>
    </div>
  );
}
}


export default App;
