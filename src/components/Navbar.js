import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h1>Web Warrior</h1>
            <div className="links">
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A propos</Link>
                <Link to="/projets">Portfolio</Link>
            </div>
        </nav>
    )
}
