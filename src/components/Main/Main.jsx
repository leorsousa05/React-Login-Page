import React from "react";
import Login from "./Login/Login";
import './Main.css'

function Main() {
    return (
        <main>
            <div id="main-draw">
                <div className="inline-circle circle"></div>
                <div className="inline-circle big-circle"></div>    
            </div>

            <Login />
        </main>
    )
}

export default Main