import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

const Login = () => {

    return (
        <div className="login">
            <img src="https://cdn.dribbble.com/users/441326/screenshots/3165191/spotify-gif---oliver-keane.gif" alt="Spotify Logo" />
            <a href={loginUrl}>Login With Spotify</a>
        </div>
    )
}

export default Login