import './Navigation.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navigation'>
      <ul className='main-menu'>
        <li className='menu-item'><Link to="./">Home</Link></li>
        <li className='menu-item'><Link to="./countries">All countries</Link></li>
        {/* <li className='menu-item'><Link to="/home">Continents</Link></li> */}
      </ul>

    </div>
  )
}

export default Navigation