import React from 'react'
import './Body.css'
import Header from './Header/Header'
import Banner from './Banner/Banner'

const Body = ({ spotify }) => {
    return (
        <div className="body">
            <Header spotify={spotify} />
            <Banner />
        </div>
    )
}

export default Body