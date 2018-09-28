import React, { Component } from 'react';

import './DesktopStatusBar.css';

export default class DesktopStatusBar extends Component {
    render() {
        return (
            <div className="desktop_banner-container">
              <div className="desktop_banner-left">
               <span><b>About This Portfolio</b></span>
              </div>
               <span>{ this.currentTime() }</span>
              <div className="desktop_banner-right">
               <span>Portfolio OS 1.0</span>
              </div>
            </div>
          );
    }

    currentTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours(), minutes = currentTime.getMinutes();
  
    if (minutes < 10) {
       minutes = `0${minutes}`;
    }
  
    let suffix = "AM";

    if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
    }

    if (hours == 0) {
    hours = 12;
    }
  
    return `${hours}:${minutes} ${suffix}`;
    }
}