import './CountryPage.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MaxWidth from '../../components/UI/MaxWidth/MaxWidth';

const CountryPage = () => {
    let params = useParams()

    const [country, setCountry] = useState(null)

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${params.countryCode}`)
            .then(res => res.json())
            .then(countryData => {
                setCountry(countryData)
            })
    }, [params.countryCode])

    return (
        <MaxWidth>
            {!country
                ? <h1>Loading......</h1>
                : <div>
                    <img src={country[0].flags.png}/>
                    <h3>{country[0].name.common}</h3>
                    
                </div>
            }
        </MaxWidth>
    )
}

export default CountryPage