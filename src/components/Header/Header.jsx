import React, { useState } from "react"
import Logo from "../Logo/Logo"
import "./Header.css"

function Header({ links }) {
    const [menu, setMenu] = useState(false)

    const handleClick = () => {setMenu(!menu)}

    return(
        <header id="header">
            <Logo/>


            <nav>
                <ul className={menu && "activated"} >
                    <li><a href="##">Home</a></li>
                    <li><a href="##">Contatos</a></li>
                    <li><a href="##">Sobre Nós</a></li>
                </ul>
            </nav>
            
            <div id="nav-menu" className={menu && "burger"} onClick={handleClick}>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
            </div>
        </header>
    )
}

export default Header