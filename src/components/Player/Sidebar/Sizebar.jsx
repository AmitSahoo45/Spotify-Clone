import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOptions/SidebarOption'
import SpotifyLogo from '../../../assets/spotify-text.svg'
import { Home, Search, LibraryMusic } from '@material-ui/icons';
import { useStateValue } from '../../../StateProvider';

const Sizebar = () => {
  const [{ playlists }, dispatch] = useStateValue()


  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src={SpotifyLogo}
        alt="Spotify Logo"
      />
      <SidebarOption Icon={Home} title='Home' />
      <SidebarOption Icon={Search} title='Search' />
      <SidebarOption Icon={LibraryMusic} title='Your Library' />

      <strong className="sidebar__title">
        Playlists
      </strong>
      {
        playlists?.items?.map((playlist, key) => (
          <SidebarOption key={key} title={playlist.name} />
        ))
      }
    </div>
  )
}

export default Sizebar