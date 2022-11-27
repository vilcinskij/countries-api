import './Navigation.css'
import React from 'react'
import { Link } from 'react-router-dom'
import MaxWidth from '../UI/MaxWidth/MaxWidth'

const Navigation = () => {
  return (
    <div className='navigation'>
      <MaxWidth>
        <Link to="./home">Home</Link>
      </MaxWidth>
    </div>
  )
}

export default Navigation