import React, { Component } from 'react';
import OsAppSmall from './OsAppSmall/OsAppSmall';
import OsAppBig from './OsAppBig/OsAppBig';

import IMAGE_PATH from '../../../../constants/image_path';

export default class OsApp extends Component {
    render() {
        const image = `${IMAGE_PATH}/${this.props.iconImage}`;

        return this.props.state === 'small' ? (
            <OsAppSmall
                iconImage={image}
                bgColor={this.props.bgColor}
            />
        ) : (
            <OsAppBig
                id={this.props.id}
                activeLink={this.props.activeLink}
                name={this.props.name}
                group={this.props.group}
                iconImage={image}
                bgColor={this.props.bgColor}
                openAppCallback={this.props.openAppCallback}
            />
        );
    }
}
