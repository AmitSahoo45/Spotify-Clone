import React from 'react'
import './Footer.css'
import { PlayCircleFilledOutlined, PlaylistPlay, SkipNext, SkipPrevious, Shuffle, Repeat, VolumeDown } from '@material-ui/icons';
import { Grid, Slider } from '@material-ui/core';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="" alt="" />
        <div className="footer__songInfo">
          <h4>Lorem, ipsum.</h4>
          <p>Lorem, ipsum.</p>
        </div>
      </div>

      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleFilledOutlined fontSize='large' className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>

      <div className="footer__right ">
        <Grid container spacing={2} >
          <Grid item >
            <PlaylistPlay />
          </Grid>
          <Grid item >
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer