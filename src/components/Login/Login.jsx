import React from 'react'
import './Login.css'
import SpotifyLogo from '../../assets/spotify-text.svg'
import { loginUrl } from './spotify'

const Login = () => {

    return (
        <div className="login">
            <img src={SpotifyLogo} alt="Spotify Logo" />
            <a href={loginUrl}>Login With Spotify</a>
        </div>
    )
}

export default Login