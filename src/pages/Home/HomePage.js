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
    </div>
  )
}

export default HomePage