import React, { Component } from 'react';

import './DesktopStatusBar.css';

import { version } from '../../../json/version';

export default class DesktopStatusBar extends Component {
    mounted = true;
    timeInterval = null;

    constructor() {
        super();

        this.state = {
            time: '',
        };
    }

    render() {
        return (
            <div className="desktop_banner-container">
                <div className="desktop_banner-left">
                    <span>Portfolio OS v{ version }</span>
                    <span className="banner-left--highlights" onClick={this.props.openAboutCallback}>
                        About This Portfolio
                    </span>
                </div>

                <div className="desktop_banner-right">
                    <span>{ this.state.time }</span>
                </div>
            </div>
          );
    }

    componentDidMount() {
        this.setState({time: this.getCurrentTime()})

        this.timeInterval = setInterval(() => {
            if (this.mounted) {
                this.setState({time: this.getCurrentTime()});

                return;
            }

            clearInterval(this.timeInterval);
        }, 1000);
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    getCurrentTime() {
    const days = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'];
    const currentTime = new Date(), currentDay = currentTime.getDay();
    let hours = currentTime.getHours(), minutes = currentTime.getMinutes(), seconds = currentTime.getSeconds();

    if (minutes < 10) {
       minutes = `0${minutes}`;
    }

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    let suffix = "AM";

    if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
    }

    if (hours === 0) {
    hours = 12;
    }

    return `${days[currentDay]} ${hours}:${minutes}:${seconds} ${suffix}`;
    }
}