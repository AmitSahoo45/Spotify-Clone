import { useEffect, useState } from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './components/Login/Login';
import { getTokenFromResponse } from './components/Login/spotify';
import Player from './components/Player/Player';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {

  // const [token, setToken] = useState(null);
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const hashval = getTokenFromResponse();

    window.location.hash = "";

    const _token = hashval.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })

      spotify.getPlaylist('37i9dQZEVXcX4CeLCIHpEs').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      })

    }

  }, []);


  return (
    <div>
      {
        token ? (
          <Player
            spotify={spotify}
          />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
