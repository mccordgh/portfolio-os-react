import React, { Component } from 'react';
import ImageProcessor from '../../../Processors/ImageProcessor';

import './OpenDesktopAppWindow.css';

export default class OpenDesktopAppWindow extends Component {
    render() {
        const image = ImageProcessor.getCoverImageForApp(this.props.app.coverImage);

        return (
            <div className="opendesktopApp">
                <div className="topWindowBanner">
                    <span className="windowTitle">{ this.props.app.name }</span>
                    <div className="closedesktopAppWrapper">
                        <span onClick={() => {this.props.closeAppCallback()}}>X</span>
                    </div>
                </div>

                {/* <div className="desktopAppImageTitleWrapper">
                    <div className="desktopImageWrapper">
                        <img src={image} alt="App Logo"/>
                    </div>
                    <div className="desktopTitleWrapper">
                        <h1>{this.props.app.name}</h1>
                        <p>{ this.props.app.shortText }</p>
                        <hr />
                    </div>
                </div> */}

        <div className="desktopAppImageTitleWrapper">
            <div className="imageFrame">
                <img src={image} alt="App Logo"/>
            </div>

            <h1>{this.props.app.name}</h1>
            <h3>{this.props.app.shortText}</h3>

            <hr />

            <div className="appDescriptionWrapper">
                {
                    this.props.app.description.map((paragraph, key) => {
                        console.log(key);
                        return key === 0
                        ? (
                            <p key={key} className="white--text">{ paragraph }</p>
                        )
                        : (
                            <p key={key}>{ paragraph }</p>
                        );
                    })
                }
            </div>
		</div>

               {/* <div className="appDescriptionWrapper">
                    {
                        this.props.app.description.map((paragraph, key) => {
                            return (
                                <p key={key}>{ paragraph }</p>
                            )
                        })
                    }
                </div> */}

                {/* <div className="desktopAppDescriptionWrapper appLinksWrapper">
                {
                    this.props.app.links.map((link, key) => {
                        return (
                            <a key={key} href={link.url}>{link.text}</a>
                        )
                    })
                }
                </div> */}
            </div>
        );
   }
}