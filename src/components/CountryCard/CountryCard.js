import './CountryCard.css'
import React from 'react'

const CountryCard = ({ data: { name, flags, population, capital, continents, cca2 } }) => {
  return (
    <a href={`./countries/${cca2}`}>
      <div className='card country-card' >
        <img src={flags.png} className="card-img-top" alt={`${name.common} flag`} />
        <div className="card-body">
          <h5 className="card-title">{name.common}</h5>
          <h6>Capital: {capital}</h6>
          <h6>Continent: {continents}</h6>
          <h6>Population: {population}</h6>
        </div>
      </div>
    </a>
  )
}

export default CountryCard