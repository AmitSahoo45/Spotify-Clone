import React from 'react'
import './Body.css'
import './Banner/Banner.css'
import Header from './Header/Header'
import { useStateValue } from '../../../StateProvider'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons'
import SongRow from './Banner/SongRow/SongRow'

const Body = ({ spotify }) => {

    const [{ discover_weekly }, dispatch] = useStateValue();

    const playPlaylist = (id) => {
        spotify
            .play({
                context_uri: `spotify:playlist:37i9dQZEVXcX4CeLCIHpEs`,
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };

    const playSong = (id) => {
        spotify
            .play({
                uris: [`spotify:track:${id}`],
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };

    return (
        <div className="body">
            <Header spotify={spotify} />


            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="Playlist Banner" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>
                        {
                            discover_weekly?.description
                        }
                    </p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled
                        className="body__shuffle"
                        onClick={playPlaylist}
                    />
                    <Favorite fontSize='large' />
                    <MoreHoriz />
                </div>
            </div>
            <div className="music__box__container">
                {
                    discover_weekly?.tracks.items.map((item, key) =>
                        <SongRow key={key} track={item.track} />
                    )
                }
            </div>
        </div>
    )
}

export default Body