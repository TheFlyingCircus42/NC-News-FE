import '../styles/Header.css'
<styles />
import { useState , useEffect } from 'react'

function Header () 
{ return(<>
    
    <header className="Header">
    
    <p className="Header-Logo">Logo</p>    
    <h1 className="Header-Title">HEADER TITLE</h1>
    {/* <div className="Header-UserBox"> */}
        <p className="Header-UserBox-Avtr">Avatar</p>
        <p className="Header-UserBox-User">username</p>
    {/* </div> */}
    </header>
    
    
    </>)
}


export default Header