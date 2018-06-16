import React, { Component } from 'react';

import './OsAppBig.css';

export default class OsAppBig extends Component {
    render() {
        return (
            <div className="OsAppGroupBig">
                <div
                    className="osAppGroupDimBehind"
                ></div>

                <div
                    className="OsAppGroupBigBackground"
                    style={this.osAppBigStyleObject()}
                    onClick={() => { this.clickHandler() }}
                >
                    <div className="OsAppGroupBigContainer">
                    </div>
                </div>

                <div className="OsAppGroupBigTitle">
                    <h3>{ this.props.name }</h3>
                </div>
            </div>
        )
    }

    osAppBigStyleObject() {
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

        this.props.openAppCallback(this.props.id, this.props.group)
    }
}
