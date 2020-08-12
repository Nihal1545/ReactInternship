import React from 'react';
// importing css
import './Person.css';

const Person= props =>
<div className="Person">
<p>Hello! I am {props.name} having the age {props.age} </p>
<span>{props.children}</span>
<input type="text" onChange={props.changed} value={props.name} />
</div>;
 
   // return <p> Hello! I am a {props.name} having the age {props.age} </p>
{/* <div>
    <p>Hello I am {props.name} having the age {props.age} </p>
    <span> {props.children} </span>
</div>; */}


export default Person;