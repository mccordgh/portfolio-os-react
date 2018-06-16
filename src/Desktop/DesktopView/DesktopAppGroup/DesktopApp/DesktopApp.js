import React, { Component } from 'react';

import './DesktopApp.css';

export default class DesktopApp extends Component {
    render() {
        return (
            <div className="DesktopApp">
                <div
                    className="DesktopAppBackground"
                    style={this.DesktopAppStyleObject()}
                    onClick={() => {this.props.openAppCallback(this.props.id, this.props.group)}}
                >
                </div>

                <div className="DesktopAppTitle">
                    <h3>{ this.props.name }</h3>
                </div>
            </div>
        )
    }

    DesktopAppStyleObject() {
        return {
            backgroundImage: `url(${this.props.iconImage}), linear-gradient(to bottom right, ${this.props.bgColor} 30%, white 150%)`,
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