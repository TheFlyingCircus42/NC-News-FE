import '../styles/NavBar.css'
<styles />
import { useState , useEffect } from 'react'

function NavBar () {
    return(<>
    <nav className="nav">
        {/* <h3>Navigation Bar</h3> */}
        <p className="Nav-AllTopics">All Topics</p>
        <p className="Nav-AllArticles">All Articles</p>
        <p className="Nav-APIInfo">API Info</p>
        <p className="Nav-OtherLink">???</p>
    </nav>
    
    </>)
}

export default NavBar