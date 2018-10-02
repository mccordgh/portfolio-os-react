import React, { Component } from 'react';
import OsAppSmall from './OsAppSmall/OsAppSmall';
import OsAppBig from './OsAppBig/OsAppBig';

export default class OsApp extends Component {
    render() {
        const image = `${this.props.directory}${this.props.iconImage}`;

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
                openAppCallback={this.props.openAppCallback}
            />
        );
    }
}
