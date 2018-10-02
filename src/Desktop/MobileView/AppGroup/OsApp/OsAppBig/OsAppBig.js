import React, { Component } from 'react';

import './OsAppBig.css';

export default class OsAppBig extends Component {
    render() {
        return (
            <div className="OsAppGroupBig">
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
            backgroundImage: `url(${this.props.iconImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
    }

    clickHandler() {
        console.log(this.props);
        if (this.props.activeLink) {
            window.open(this.props.activeLink, '_blank');

            return;
        }

        this.props.openAppCallback(this.props.id, this.props.group)
    }
}
