import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const NavBar = () => {
    return (
        <div class="container">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span class="fs-4">Routes-React</span>
                </a>

                <ul class="nav nav-pills">
                    <li class="nav-item"><Link to="/" class="nav-link my-button" aria-current="page">Home</Link></li><li class="nav-item"><Link to="/menu" class="nav-link my-button" aria-current="page">Menu</Link></li>
                    <li class="nav-item"><Link to="/profile" class="nav-link my-button" aria-current="page">Profile</Link></li>
                    <li class="nav-item"><Link to="/contact" class="nav-link my-button" aria-current="page">Contact</Link></li>

                </ul>
            </header>
        </div>
    )
}
export default NavBar