import React from "react";
import Logo from "../../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "./Login.css"


function Login() {
    return(
        <form>
            <div id="form-container">
                <Logo />

                <h2 id="sign-text">Sign In to your account</h2>

                <div id="inputs">
                    <input type="text" id="email" placeholder="Email address" />
                    <input type="text" id="password" placeholder="Password" />
                </div>

                <div id="important-buttons">
                    <div id="remember-box">
                        <label htmlFor="remember">Remember Me</label>
                        <input type="checkbox" name="remember" id="remember" />
                    </div>

                    <a href="##">Forgot your password?</a>
                </div>

                <button id="login-btn" type="submit">
                    <FontAwesomeIcon icon={faLock} />
                    <h2>Sign In</h2>
                </button>
            </div>
        </form>
    )
}

export default Login