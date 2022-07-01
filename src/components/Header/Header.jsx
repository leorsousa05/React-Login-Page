import React, { useState } from "react"
import Logo from "../Logo/Logo"
import "./Header.css"

function Header({ links }) {
    const [menu, setMenu] = useState(false)

    const handleClick = () => setMenu(!menu)

    return(
        <header id="header">
            <Logo/>


            <nav>
                <ul className={menu ? "activated" : ""} >
                    {links.map((link) => {
                        return <li key={link.nome}><a href={link.address}>{link.nome}</a></li>
                    })}
                </ul>
            </nav>
            
            <div id="nav-menu" className={menu ? "burger" : ""} onClick={handleClick}>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
            </div>
        </header>
    )
}

export default Header