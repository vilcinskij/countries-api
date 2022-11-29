import './CountryPage.scss';
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
            <div className='country-wrapper'>

                {!country
                    ? <h1>Loading......</h1>
                    : <div>
                        <img src={country[0].flags.png} alt={`${country[0].name.common} flag`} />
                        <h3>{country[0].name.common}</h3>

                    </div>
                }
            </div>
        </MaxWidth>
    )
}

export default CountryPage