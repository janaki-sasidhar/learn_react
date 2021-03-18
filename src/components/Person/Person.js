import React from 'react';
const person =(props) => {
    return (
        <div>
            <h2 className="title" onClick={props.click}>Inside person component</h2>
            <p onClick={props.click}>{`I am ${props.name} and i am ${props.age} years old`}</p>
            <input type="text" className="input" value={props.name} onChange={props.change}></input>
       </div>

    );
}

export default person