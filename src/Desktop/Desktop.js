import React, { Component } from 'react';
import AppGroup from './AppGroup/AppGroup';
import headIcon from '../res/mccordinator2_head.png';
import './Desktop.css';

export default class Desktop extends Component {
  render() {
    return (
      <div className="desktop__container">
        <div className="appgroup__container">
          <AppGroup name="games"/>
          <AppGroup name="apps"/>
          <AppGroup name="music"/>
          <AppGroup name="about"/>
        </div>
        <div className="os__image">
          <img src={headIcon} />
        </div>
      </div>
    );
  }
}
