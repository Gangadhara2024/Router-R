import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
     
        <h1>header part</h1>
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/courses'}>Courses</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>
            </ul>
        </nav>
    </div>
  )
}
