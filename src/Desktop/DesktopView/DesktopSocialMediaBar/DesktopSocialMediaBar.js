import React, { Component } from 'react';

import SocialMediaIcon from './SocialMediaIcon/SocialMediaIcon';

import './DesktopSocialMediaBar.css';

import socialIcons from '../../../json/social_media.json';

export default class DesktopSocialMediaBar extends Component {
    render() {
        console.log(socialIcons);

        const icons = socialIcons.data.map((icon, key) => {
            return (
                <SocialMediaIcon
                    key={key}
                    name={icon.name}
                    logo={icon.logo}
                />
            );
        })
        return (
            <div className="social-media__wrapper">
                { icons }
            </div>
        );
    }
}