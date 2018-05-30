import React, { Component } from 'react';

import './FolderApp.css';

export default class FolderApp extends Component {
    render() {
        return (
            <div className="folderApp">
                <div
                    className="folderAppBackground"
                    style={this.folderAppStyleObject()}
                    onClick={() => {this.props.openAppCallback(this.props.id, this.props.group)}}
                >
                </div>

                <div className="folderAppTitle">
                    <h3>{ this.props.name }</h3>
                </div>
            </div>
        )
    }

    folderAppStyleObject() {
        return {
            backgroundImage: `url(${this.props.bgImage}), linear-gradient(to bottom right, ${this.props.bgColor} 30%, white 150%)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
    }
}