import '../styles/Header.css'
import {Link} from "react-router-dom"
import logo from '../assets/NCLogo.png'

function Header () 
{ return(
    
    <header className="Header">
        <Link to="/" className='Header-left'>
            <img src={logo} alt="NC News Logo" className='Header-Logo'></img>
            <h1 className="Header-Title">NC <span>NEWS</span></h1>
        </Link>

        <div className="Header-UserBox">
            <img src="https://i.pravatar.cc/40"
                alt="User Avatar"
                className='User-Avatar' />       

            <span className='User-name'> Username </span>
            <span className='User-Chevron'> ▾ </span>
        </div>
    </header> 

)}

export default Header