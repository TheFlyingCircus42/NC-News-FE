import '../styles/Header.css'
import {Link} from "react-router-dom"
import logo from '../assets/NCLogo.png'


function Header () 
{ return(<>
    
    <header className="Header">
    
    <Link to="/">
        <img src={logo} alt="NC News Logo" className='Header-Logo'></img>
    </Link>

    <h1 className="Header-Title">NC NEWS</h1>
    <div className="Header-UserBox">
        <p className="Header-UserBox-Avtr">Avatar</p>
        <p className="Header-UserBox-User">username</p>
    </div>
    </header>
    
    
    </>)
}


export default Header