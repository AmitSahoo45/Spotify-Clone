import React from 'react'
import './Header.css'
import { Search } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { useStateValue } from '../../../../StateProvider';


const Header = () => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <Search />
                <input
                    placeholder='Search for playlists, artists & songs'
                    type='text'
                />
            </div>
            <div className="header__right">
                <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header