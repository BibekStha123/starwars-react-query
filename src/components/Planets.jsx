import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

function Planets() {

    const fetchPlanets = async (key) => {
        const page = key.queryKey[1]
        const res = await fetch(`https://swapi.dev/api/planets?page=${page}`)
        return res.json();
    }

    const [page, setPage] = useState(1);
    const { data, status } = useQuery(['planets', page], fetchPlanets);

    const handleNextPage = () => {
        if (data.next) {
            setPage(page + 1)
        } 
    }

    const handlePreviousPage = () => {
        if (data.previous) {
            setPage(page - 1)
        } 
    }

    return (
        <div>
            <h1>Planets</h1>
            <button onClick={handlePreviousPage}>Previous Page</button>
            <span>{page}</span>
            <button onClick={handleNextPage}>Next Page</button>

            {status === 'loading' && (
                <div>
                    Loading data...
                </div>
            )}
            {status === 'error' && (
                <div>
                    Error while fetching data
                </div>
            )}
            {status === 'success' && (
                <div>
                    {data.results.map(planet =>
                        <Planet key={planet.name} planet={planet} />
                    )}
                </div>
            )}
        </div>
    );
}

export default Planets;