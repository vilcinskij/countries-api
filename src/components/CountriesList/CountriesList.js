import './CountriesList.css'
import React, { useEffect, useState } from 'react'

const CountriesList = () => {

  const [country, setCountry] = useState([])

  useEffect(() => {

    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(countries => {
        countries.map(country => {
          // console.log(country);
          setCountry(prevState => [...prevState, country])
         })
      })
  }, []
  )

  return (
    <div className='countries-list'>
      {/* {country.name.common} */}
      LABAS
      {console.dir(country)}
      </div>
      countries
  )
}

export default CountriesList