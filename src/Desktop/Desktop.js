import React, { Component } from 'react';
import AppGroup from './AppGroup/AppGroup';
import './Desktop.css';

export default class Desktop extends Component {
  render() {
    return (
      <div className="desktop__container">
        <div className="appgroup__container">
          <AppGroup />
          <AppGroup />
          <AppGroup />
          <AppGroup />
          <AppGroup />
          <AppGroup />
        </div>
      </div>
    );
  }
}
