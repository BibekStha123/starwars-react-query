import React from 'react';

function Planet({planet}) {
    return (
        <div className='card'>
            <h3>{planet.name}</h3>
            <p>Population- {planet.population}</p>
        </div>
    );
}

export default Planet;