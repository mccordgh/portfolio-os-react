import React, { Component } from 'react';

import './OpenAppWindow.css';

import IMAGE_PATH from '../../constants/image_path';

export default class OpenAppWindow extends Component {
    render() {
        const image = `${IMAGE_PATH}/${this.props.app.iconImage}`;

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
                    {
                        this.props.app.description.map((paragraph, key) => {
                            return (
                                <p key={key}>{ paragraph }</p>
                            )
                        })
                    }
                </div>

                <div className="appDescriptionWrapper appLinksWrapper">
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