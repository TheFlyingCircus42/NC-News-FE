import '../styles/NavBar.css'

import { useState , useEffect } from 'react'
import { Link } from "react-router-dom"

function NavBar () {
    return(<>
    <nav className="nav">
    
        <p className="Nav-AllTopics">All Topics</p>
        
        <Link to="/api/articles">
        <p className="Nav-AllArticles">All Articles</p>
        </Link>

        <p className="Nav-APIInfo">API Info</p>
        
        <p className="Nav-OtherLink">???</p>

    </nav>
    
    </>)
}

export default NavBar