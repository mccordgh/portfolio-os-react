import React, { Component } from 'react';

import './OpenDesktopAppWindow.css';

const IMAGE_PATH = '/res';

export default class OpenDesktopAppWindow extends Component {
    render() {
        const image = this.getCoverImageForApp(this.props.app.coverImage);

        return (
            <div className="opendesktopApp">
                <div className="topWindowBanner">
                    <span className="windowTitle">{ this.props.app.name }</span>
                    <div className="closedesktopAppWrapper">
                        <span onClick={() => {this.props.closeAppCallback()}}>X</span>
                    </div>
                </div>

                <div className="desktopAppImageTitleWrapper">
                    <div className="desktopImageWrapper">
                        <img src={image} alt="App Logo"/>
                    </div>
                    <div className="desktopTitleWrapper">
                        <h1>{this.props.app.name}</h1>
                        <p>{ this.props.app.shortText }</p>
                    </div>
                </div>

                <hr />

                <div className="desktopAppDescriptionWrapper">
                    <p dangerouslySetInnerHTML={{__html: this.props.app.description }}></p>
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

   getCoverImageForApp(coverImageUrl) {
        return coverImageUrl.indexOf('://') >= 0
            ? coverImageUrl
            : `${IMAGE_PATH}/${coverImageUrl}`
   }
}