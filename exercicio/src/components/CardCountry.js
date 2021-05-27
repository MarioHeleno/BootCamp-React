import React from 'react';

function CardCountry(props) {
    return (

        <div className="card-do-pais">
            <h1>{props.nome}</h1>
            <h2>{props.continente}</h2>
            <h3>{props.capital}</h3>
            <p>{props.idioma}</p>
        </div>
        
    );
}

export default CardCountry;
