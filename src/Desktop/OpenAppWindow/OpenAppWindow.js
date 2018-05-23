import React, { Component } from 'react';

import './OpenAppWindow.css';

const IMAGE_PATH = '/res';

export default class OpenAppWindow extends Component {
    render() {
        const image = `${IMAGE_PATH}/${this.props.app.bgImage}`

        return (
            <div className="openApp">
                <div className="closeAppWrapper">
                    <span onClick={() => {this.props.closeAppCallback()}}>[X]</span>
                </div>

                <div className="appImageTitleWrapper">
                    <div className="appImageTitle appImageWrapper">
                        <img src={image} alt="App Logo"/>
                    </div>
                    <div className="appImageTitle">
                        <h1>{this.props.app.name}</h1>
                    </div>
                </div>

                <hr />

                <div className="appDescriptionWrapper">
                    <p> { this.props.app.description } </p>
                </div>

                <div className="appDescriptionWrapper appLinksWrapper">
                    <a href="#">Play Me!</a>
                    <a href="#">Github Source Code!</a>
                </div>
            </div>
        );
   } 
}