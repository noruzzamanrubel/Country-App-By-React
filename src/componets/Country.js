import React from 'react';

const Country = (props) => {
    const { name, capital, population, area, flag } = props.country;
    const handleClick = (name) => {
        props.onRemoveCountry(name);
    }
    return (
        <article className='country'>
            <div>
                <img src={flag} alt={name} className='flag' />
                <h3>Name: {name}</h3>
                <h3>Capital: {capital}</h3>
                <h3>Population: {population}</h3>
                <h3>Area: {area}</h3>
                <button className='btn' onClick={() => {
                    handleClick(name);
                }}>
                    Remove Country
                </button>
            </div>
        </article>
    )
}

export default Country