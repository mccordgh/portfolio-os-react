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

                    <div className="app--header-image">
                        <img src={headerImage} alt="App Logo"/>
                    </div>

                    {/* <div className="app-button_exit">
                        <button onClick={() => {this.props.closeAppCallback()}}>X</button>
                    </div> */}

                    <div className="desktop-app--content_wrapper">
                        {/* <h1>{this.props.app.name}</h1> */}

                        { this.props.app.shortText &&
                            <p>{this.props.app.shortText}</p>
                        }

                        {/* <hr /> */}

                        <div className="app-description_wrapper">
                            {/* {
                                this.props.app.language &&
                                <p>Written in: <span className="text--white">{this.props.app.language}</span></p>
                            } */}
                            {
                                this.props.app.description.map((paragraph, key) => {
                                    return (
                                        <p key={key}>
                                            <img className="app-description--icon" src={iconImage}></img>
                                            { paragraph }
                                        </p>
                                    );
                                })
                            }
                            {/* {
                                additionalImage &&
                                <div className="imageFrame additionalImageFrame">
                                    <img src={additionalImage} alt="App Logo"/>
                                </div>
                            } */}
                        </div>

                        <ul>
                            {
                                this.props.app.links.map((link, key) => {
                                    return (
                                        <li key={key}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
   }
}