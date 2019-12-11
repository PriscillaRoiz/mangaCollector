import React from 'react'
import { Link } from 'react-router-dom'

import Menu from './Menu'
import './style.css'

function Nav () {
  return (
    <nav className='navbar'>
      <div>
        <Link to='/'>
          {' '}
        </Link>
      </div>
      <Menu />
    </nav>
  )
}

export default Nav