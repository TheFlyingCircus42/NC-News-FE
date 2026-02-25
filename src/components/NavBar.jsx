import '../styles/NavBar.css'
// import { useState , useEffect } from 'react'
import { Link } from "react-router-dom"

function NavBar () {
    return(<>
    <nav className="Nav-Bar">
        
        <Link to="/home">
        <p className="Nav-Bar-Link"> Home </p>
        </Link>

        <Link to="/api/topics">
        <p className="Nav-Bar-Link"> All Topics </p>
        </Link>

        <Link to="/api/articles">
        <p className="Nav-Bar-Link"> All Articles </p>
        </Link>

        <Link to="/api">
        <p className="Nav-Bar-Link"> API Info </p>
        </Link>

        
        {/* <p className="Nav-Bar-Link"> ??? </p> */}

    </nav>
    
    </>)
}

export default NavBar