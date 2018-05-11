import React, { Component } from 'react';
import AppGroup from './AppGroup/AppGroup';
import apiKey from '../key.json';
import headIcon from '../res/mccordinator2_head.png';
import './Desktop.css';

export default class Desktop extends Component {
  render() {
    return (
      <div className="desktop__container">
        <div className="appgroup__container">
          <AppGroup name="games" bgColor="red"/>
          <AppGroup name="apps" bgColor="green"/>
          <AppGroup name="music" bgColor="orange"/>
          <AppGroup name="about" bgColor="blue"/>
        </div>
        <div className="os__image">
          <img src={headIcon} />
        </div>
      </div>
    );
  }
}
