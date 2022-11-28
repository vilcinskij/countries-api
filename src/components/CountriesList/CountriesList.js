import './CountriesList.css'
import React, { useEffect, useState } from 'react'

const CountriesList = () => {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(countriesData => {
        setCountries(countriesData)
      })
  }, [])


  return (
    <div className='countries-list'>
      {countries && (
        <ul>
          {countries.map((country, index) => <div className='card country-card' key={index}>{country.name.common}</div>)}
        </ul>
      )}
    </div>
  )
}

export default CountriesList