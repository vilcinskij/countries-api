import React from 'react'
import CountriesList from '../../components/CountriesList/CountriesList'
import MaxWidth from '../../components/UI/MaxWidth/MaxWidth'

const HomePage = () => {
  return (
    <div>
      <MaxWidth>

        <CountriesList></CountriesList>
      </MaxWidth>
    </div>
  )
}

export default HomePage