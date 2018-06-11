import React, { Component } from 'react';
import OsAppSmall from './OsAppSmall/OsAppSmall';
import OsAppBig from './OsAppBig/OsAppBig';

const IMAGE_PATH = '/res';

export default class OsApp extends Component {
    render() {
        const image = `${IMAGE_PATH}/${this.props.iconImage}`
        return this.props.state === 'small' ? (
            <OsAppSmall
                iconImage={image}
                bgColor={this.props.bgColor}
            />
        ) : (
            <OsAppBig
                id={this.props.id}
                name={this.props.name}
                group={this.props.group}
                iconImage={image}
                bgColor={this.props.bgColor}
                openAppCallback={this.props.openAppCallback}
            />
        );
    }
}
