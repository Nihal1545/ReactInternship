import React from 'react';

const Person= (props) => 
   // return <p> Hello! I am a {props.name} having the age {props.age} </p>
<div>
    <p>Hello I am {props.name} having the age {props.age} </p>
    <span> {props.children} </span>
</div>;


export default Person;