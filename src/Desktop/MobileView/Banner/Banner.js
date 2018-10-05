import React, { Component } from 'react';
import './Banner.css';
import { version } from '../../../json/version'

export default class Banner extends Component {
  render() {
    return (
        <div className="banner-container">
          <div className="banner-left">
            <span onClick={this.props.openAboutCallback}><b>Portfolio OS v{ version }</b></span>
          </div>
           
          <div className="banner-right">
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
