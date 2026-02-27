import '../styles/NavBar.css'
import { useState , useEffect } from 'react'
import { Link } from "react-router-dom"

function NavBar () {
    
    const [showTopics , setShowTopics]=useState("false")

    
    function dropMenu (){
        setShowTopics(!showTopics)
    }
    
    return(<>
    <nav className="Nav-Bar">
        
    <div className='Nav-Bar-Links'>
        <Link to="/home">
        <p className="Nav-Bar-Link"> Home </p>
        </Link>

        {/* <Link to="/api/topics">
        <p className="Nav-Bar-Link"> All Topics </p>
        </Link> */}
        <button onClick={()=> dropMenu()}>All Topics</button>

        <Link to="/api/articles">
        <p className="Nav-Bar-Link"> All Articles </p>
        </Link>

        <Link to="/api">
        <p className="Nav-Bar-Link"> API Info </p>
        </Link>
    </div>
            

            {showTopics && 
        <div className='Nav-Bar-Topics-Drop'>
            <Link to="/topics/coding">Coding</Link>
            <Link to="/topics/football">Football</Link>
            <Link to="topics/cooking">cooking</Link>
            
        </div> }
    
        
        

    </nav>
    
    </>)
}

export default NavBar