import React, { Component } from 'react';

import './OsAppSmall.css';

export default class OsAppSmall extends Component {
    render() {
        return (
            <div className="OsAppGroupSmall">
                <div
                    className="OsAppGroupSmallBackground"
                    style={this.osAppSmallStyleObject()}
                >
                    <div className="OsAppGroupSmallContainer">
                    </div>
                </div>
            </div>
        )
    }

    osAppSmallStyleObject() {
        return {
            backgroundImage: `url(${this.props.iconImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
    }
}