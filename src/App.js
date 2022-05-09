import React, { useState, useEffect } from 'react'
import Countries from './componets/Countries'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const ErrorMessage = "Data fatching not successfull. Please check your api url";

  const handleRemoveCountry = (name) => {
    setCountries(countries.filter((country) => country.name !== name));
  }

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error({ ErrorMessage });
        } else {
          return response.json();
        }
      })
      .then(data => {
        setCountries(data);
      }
      )
      .catch(error => {
        setError(error.message);
      }
      );
  }, []);

  return (
    <div>
      <h1>Country App</h1>
      {error && <h4>{ErrorMessage}</h4>}
      <Countries countries={countries} onRemoveCountry={handleRemoveCountry} />
    </div>
  )
}

export default App
