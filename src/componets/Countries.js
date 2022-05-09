import React from 'react';
import { v4 as uuidv4 } from "uuid";
import Country from './Country';

const Countries = (props) => {
    return (
        <section className='countries'>
            {props.countries.map((country) => {
                return (
                    <Country country={country} key={uuidv4()} onRemoveCountry={props.onRemoveCountry}/>
                )
            })}
        </section>
    )
}

export default Countries