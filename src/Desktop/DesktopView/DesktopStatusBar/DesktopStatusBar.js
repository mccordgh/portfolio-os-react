import React, { Component } from 'react';

import './DesktopStatusBar.css';

export default class DesktopStatusBar extends Component {
    render() {
        return (
            <div className="desktop_banner-container">
              <div className="desktop_banner-left">
               <span className="banner-left--highlights"><b>About This Portfolio</b></span>
              </div>
              <div className="desktop_banner-right">
              <span>{ this.currentTime() }</span>
              </div>
            </div>
          );
    }

    currentTime() {
    const days = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'];
    const currentTime = new Date(), currentDay = currentTime.getDay();
    let hours = currentTime.getHours(), minutes = currentTime.getMinutes();
  
    if (minutes < 10) {
       minutes = `0${minutes}`;
    }
  
    let suffix = "AM";

    if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
    }

    if (hours === 0) {
    hours = 12;
    }
  
    return `${days[currentDay]} ${hours}:${minutes} ${suffix}`;
    }
}