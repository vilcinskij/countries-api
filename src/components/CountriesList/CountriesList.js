import './CountriesList.scss'
import React, { useEffect, useState } from 'react'
import CountryCard from '../CountryCard/CountryCard'

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
        <>
          {countries.map((country, index) =>
            <CountryCard key={index} data={country} />
          )}
        </>
      )}
    </div>
  )
}

export default CountriesList