import '../styles/Header.css'
import {Link} from "react-router-dom"
import logo from '../assets/NCLogo.png'


function Header () 
{ return(<>
    
    <header className="Header">
    

    <Link to="/" className='Header-left'>

    
        <img src={logo} alt="NC News Logo" className='Header-Logo'></img>
    
    <h1 className="Header-Title">NC <span>NEWS</span></h1>
    </Link>

    <div className="Header-UserBox">
        <p className="Header-UserBox-Avtr">Avatar</p>
        <p className="Header-UserBox-User">username</p>
    </div>
    </header>
    
    
    </>)
}


export default Header