import React, { Component } from 'react';
// import ImageProcessor from '../../../Processors/ImageProcessor';

import './OpenDesktopAppWindow.css';

import IMAGE_PATH from '../../../constants/image_path';

export default class OpenDesktopAppWindow extends Component {
    render() {
        // const image = ImageProcessor.formatImageUrl(this.props.app.headerImage);
        const headerImage = `${IMAGE_PATH}/${this.props.directory}${this.props.app.headerImage}`;
        const iconImage = `${IMAGE_PATH}/${this.props.directory}${this.props.app.iconImage}`;
        // const additionalImage = ImageProcessor.formatImageUrl(this.props.app.additionalImage);
        const links = this.props.app.links.length
            ? (
                <ul>
                    {
                        this.props.app.links.map((link, key) => {
                            return (
                                <li key={key}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a></li>
                            )
                        })
                    }
                </ul>
            )
            : (<div></div>);

        return (
            <div>
                <div className="desktop-app_behind" onClick={() => {this.props.closeAppCallback()}}></div>

                <div className="desktop-app_open">
                    <div className="app_open-banner">
                        <span className="windowTitle">{ this.props.app.name }</span>

                        <div className="desktop-app_close">
                            <span onClick={() => {this.props.closeAppCallback()}}>X</span>
                        </div>
                    </div>

                    <div className="desktop-app--content_wrapper">

                        <div className="app--header-image">
                            <img src={headerImage} alt="App Logo"/>
                        </div>

                        <p>{this.props.app.shortText}</p>

                        <div className="app-description_wrapper">
                            {
                                this.props.app.description.map((paragraph, key) => {
                                    return (
                                        <p key={key}>
                                            <img className="app-description--icon" src={iconImage} alt="bullet points for description"></img>
                                            { paragraph }
                                        </p>
                                    );
                                })
                            }
                        </div>

                        { links }
                    </div>
                </div>
            </div>
        );
   }
}