import React, { useState, useEffect } from 'react'
import Countries from './componets/Countries'
import Search from './componets/Search';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState(countries);
  const [error, setError] = useState(null);
  const ErrorMessage = 'Data fatching not successfull. Please check your api url';

  const handleRemoveCountry = (name) => {
    setFilterCountries(filterCountries.filter((country) => country.name !== name));
  }
  const handleSearch = (search) => {
    let value = search.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilterCountries(newCountries);
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
        setFilterCountries(data);
      }
      )
      .catch(error => {
        setError(error.message);
      }
      );
  }, []);

  return (
    <div className='main-wrapper'>
      <h1>Country App</h1>
      <Search onSearch={handleSearch} />
      {error && <h4>{ErrorMessage}</h4>}
      <Countries countries={filterCountries} onRemoveCountry={handleRemoveCountry} />
    </div>
  )
}

export default App
