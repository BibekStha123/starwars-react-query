import React from 'react';
import { Button } from 'bootstrap';

function Navbar({click}) {
    return (
        <nav>
            <button onClick={() => click('people')}>People</button>
            <button onClick={() => click('planets')}>Planets</button>
        </nav>
    );
}

export default Navbar;