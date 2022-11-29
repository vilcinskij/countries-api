import styles from './CountryCard.scss'
import React from 'react'

const CountryCard = ({ data: { name, flags, population, capital, continents, cca2 } }) => {
  return (
    <a href={`./countries/${cca2}`}>
      <div className='card country-card' >
        <img src={flags.png} className="card-img-top" alt={`${name.common} flag`} />
        <div className="card-body">
          <h5 className="card-title">{name.common}</h5>
          <ul>
            <li>
              <h8><span className='cardContentTitle'>Capital: </span>{capital}</h8>
            </li>
            <li>
              <h8><span className='cardContentTitle'>Continent: </span>{continents}</h8>
            </li>
            <li>
              <h8><span className='cardContentTitle'>Population: </span>{population}</h8>
            </li>
          </ul>
        </div>
      </div>
    </a>
  )
}

export default CountryCard