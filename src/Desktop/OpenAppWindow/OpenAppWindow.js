import React, { Component } from 'react';

import './OpenAppWindow.css';

import IMAGE_PATH from '../../constants/image_path';

export default class OpenAppWindow extends Component {
    render() {
        const image = `${IMAGE_PATH}/${this.props.app.directory}/${this.props.app.headerImage}`;
        const iconImage = `${IMAGE_PATH}/${this.props.app.directory}/${this.props.app.iconImage}`;
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
            <div className="openApp">
                {/* <div className="closeAppWrapper">
                    <span onClick={() => {this.props.closeAppCallback()}}>[X]</span>
                </div> */}


                <div className="appImageTitle">
                    <span>{this.props.app.name}</span>
                    
                    <div className="app_close">
                        <span onClick={() => {this.props.closeAppCallback()}}>X</span>
                    </div>
                </div>

                <div className="appImageWrapper">
                    <img src={image} alt="App Logo"/>
                </div>

                <p>{this.props.app.shortText}</p>

                <div className="appDescriptionWrapper">
                    {
                        this.props.app.description.map((paragraph, key) => {
                            return (
                                <div key={key} className="app-description--image-wrapper">
                                    <img className="app-description--icon" src={iconImage} alt="bullet points for description"></img>
                                    <p>{ paragraph }</p>
                                </div>
                            )
                        })
                    }
                </div>

                { links }
            </div>
        );
   }
}