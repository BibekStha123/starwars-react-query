import React from 'react';

function Person({person}) {
    return (
        <div className='card'>
            <h3>{person.name}</h3>
            <p>Height- {person.height}</p>
        </div>
    );
}

export default Person;