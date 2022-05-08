import React from 'react'

const Country = (props) => {
    const { name, capital, population, area, flag } = props.country;
    return (
        <article>
            <div>
                <img src={flag} alt={name} />
                <h3>Name: {name}</h3>
                <h3>Capital: {capital}</h3>
                <h3>Population: {population}</h3>
                <h3>Area: {area}</h3>
            </div>
        </article>
    )
}

export default Country