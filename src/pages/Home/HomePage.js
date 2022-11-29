import './HomePage.scss';
import React, { useState } from 'react';
import SearchResult from '../SearchResult/SearchResult';
import SearchForm from '../../components/SearchForm/SearchForm';

const HomePage = () => {
  const [country, setCountry] = useState('');


  const submitHandler = (event) => {
    event.preventDefault();
    setCountry(event.target[0].value)
  }


  return (
    <div>
      <SearchForm />
      {/* <form id="login-form" className="login-form" onSubmit={submitHandler}>
        <div className="form-element">
          <label htmlFor="user-name" className="label text-label">Find a country:</label>
          <input
            type="text"
            className="text-input"
            name="country"
            id="country-name"
            placeholder="Enter country name"
          />
        </div>
        <div className="form-element">
          <input
            type="submit"
            name="submit"
            id="submit-button"
            value="SEARCH"
            className="button login-button"
          />
        </div>
      </form>
      {country &&
        <SearchResult result={country} />
      } */}
    </div>
  )
}

export default HomePage