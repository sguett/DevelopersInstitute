


import React from 'react';
import './hello.css';

const Hello = (props) => {
    const { id, name, username } = props;
    console.log(props);
    return (
        <div>
            <h1>Your id is: {id}</h1>
            <h3>Your name is: {name}</h3>
            <h4>Your username is: {username}</h4>
        </div >
    )
}

export default Hello