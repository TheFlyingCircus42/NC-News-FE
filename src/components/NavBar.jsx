import '../styles/NavBar.css'
import { useState , useEffect } from 'react'
import { Link } from "react-router-dom"

function NavBar () {
    
    const [showTopics , setShowTopics]=useState(false)

    
    function dropMenu ()
    {
        setShowTopics(!showTopics)
    }
    
    return(
    
        <nav className="Nav-Bar">
        
            <div className='Nav-Bar-Links'>
                <Link to="/home" className='nav-link'> Home </Link>           
                <Link to="/api/articles" className='nav-link'> All Articles </Link>      
                <Link to="/api" className='nav-link'> API </Link>
                <button onClick={()=> dropMenu()}>Topics</button>
            </div>
            
            {/* TOPICS DROP DOWN MENU  */}
                {showTopics && 
            <div className='Nav-Bar-Topics-Drop'>
                <Link to="/topics/alltopics">All Topics</Link>
                <Link to="/topics/coding">Coding</Link>
                <Link to="/topics/football">Football</Link>
                <Link to="topics/cooking">Cooking</Link>  
            </div> }
    
        </nav>
    
    )
}

export default NavBar