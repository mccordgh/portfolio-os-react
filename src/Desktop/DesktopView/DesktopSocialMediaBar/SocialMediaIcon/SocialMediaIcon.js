import React, { Component } from 'react';

import './SocialMediaIcon.css';

import IMAGE_PATH from '../../../../constants/image_path';

export default class SocialMediaIcon extends Component {
    render() {
        return (
            <div className="social-media__icon">
                <img src={`${IMAGE_PATH}/${this.props.logo}`}></img>
            </div>
        );
    }
}