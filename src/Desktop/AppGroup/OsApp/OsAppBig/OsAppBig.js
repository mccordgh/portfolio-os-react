import React, { Component } from 'react';

import './OsAppBig.css';

export default class OsAppBig extends Component {
    render() {
        return (
            <div className="osAppGroupBig" onClick={this.props.callback}>
                <div
                    className="osAppGroupBigBackground"
                    style={this.osAppSmallStyleObject()}
                >
                    <div className="osAppGroupBigContainer">
                    </div>
                </div>
            </div>
        )
    }
}