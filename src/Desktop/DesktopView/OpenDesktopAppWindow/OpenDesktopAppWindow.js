import React, { Component } from 'react';
import ImageProcessor from '../../../Processors/ImageProcessor';

import './OpenDesktopAppWindow.css';

export default class OpenDesktopAppWindow extends Component {
    render() {
        const image = ImageProcessor.formatImageUrl(this.props.app.coverImage);
        const additionalImage = ImageProcessor.formatImageUrl(this.props.app.additionalImage);

        return (
            <div className="opendesktopApp">
                <div className="topWindowBanner">
                    <span className="windowTitle">{ this.props.app.name }</span>

                    <div className="closedesktopAppWrapper">
                        <span onClick={() => {this.props.closeAppCallback()}}>X</span>
                    </div>
                </div>

                <div className="desktopAppImageTitleWrapper">
                    <div className="imageFrame">
                        <img src={image} alt="App Logo"/>
                    </div>

                    <h1>{this.props.app.name}</h1>

                    { this.props.app.shortText &&
                        <h3>{this.props.app.shortText}</h3>
                    }

                    <hr />

                    <div className="appDescriptionWrapper">
                        {
                            this.props.app.language &&
                            <p>Written in: <span className="text--white">{this.props.app.language}</span></p>
                        }
                        {
                            this.props.app.description.map((paragraph, key) => {
                                return (
                                    <p key={key}>{ paragraph }</p>
                                );
                            })
                        }
                        {
                            this.props.app.links.map((link, key) => {
                                return (
                                    <a key={key} href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
                                )
                            })
                        }
                        {
                            additionalImage &&
                            <div className="imageFrame additionalImageFrame">
                                <img src={additionalImage} alt="App Logo"/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
   }
}