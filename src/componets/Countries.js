import React from 'react'
import Country from './Country'
import { v4 as uuidv4 } from "uuid";

const Countries = (props) => {
    console.log(props)
    return (
        <section>
            {props.countries.map((country) => {
                return (
                    <Country country={country} key={uuidv4()} />
                )
            })}
        </section>
    )
}

export default Countries