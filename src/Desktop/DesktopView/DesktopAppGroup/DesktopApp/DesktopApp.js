import React, { Component } from 'react';

import './DesktopApp.css';

export default class DesktopApp extends Component {
    render() {
        return (
            <div className="desktopApp">
                <div
                    className="desktopAppBackground"
                    style={this.desktopAppStyleObject()}
                    onClick={() => { this.clickHandler() }}
                >
                </div>

                <div className="desktopAppTitle">
                    <h3>{ this.props.name }</h3>
                </div>
            </div>
        )
    }

    desktopAppStyleObject() {
        return {
            // backgroundImage: `url(${this.props.iconImage}), linear-gradient(to bottom right, ${this.props.bgColor} 30%, white 150%)`,
            backgroundImage: `url(${this.props.iconImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
    }

    clickHandler() {
        if (this.props.activeLink) {
            window.open(this.props.activeLink, '_blank');

            return;
        }

        this.props.openAppCallback(this.props.id, this.props.group);
    }
}