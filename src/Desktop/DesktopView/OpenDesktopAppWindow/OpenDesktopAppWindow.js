import React, { Component } from 'react';

import './OpenDesktopAppWindow.css';

const IMAGE_PATH = '/res';

export default class OpenDesktopAppWindow extends Component {
    render() {
        const image = `${IMAGE_PATH}/${this.props.app.bgImage}`

        return (
            <div className="openDesktopApp">
                <div className="topWindowBanner">
                    <span className="windowTitle">{ this.props.app.name }</span>
                    <div className="closeDesktopAppWrapper">
                        <span onClick={() => {this.props.closeAppCallback()}}>X</span>
                    </div>
                </div>

                <div className="desktopAppImageTitleWrapper">
                    <div className="desktopImageWrapper">
                        <img src={image} alt="App Logo"/>
                    </div>
                    <div className="desktopTitleWrapper">
                        <h1>{this.props.app.name}</h1>
                    </div>
                </div>

                <hr />

                <div className="desktopAppDescriptionWrapper">
                    <p> { this.props.app.description } </p>
                </div>

                <div className="desktopAppDescriptionWrapper appLinksWrapper">
                {
                    this.props.app.links.map((link, key) => {
                        return (
                            <a key={key} href={link.url}>{link.text}</a>
                        )
                    })
                }
                </div>
            </div>
        );
   }
}