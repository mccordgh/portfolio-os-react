import React, { Component } from 'react';
import OsAppSmall from './OsAppSmall/OsAppSmall';
import OsAppBig from './OsAppBig/OsAppBig';

const IMAGE_PATH = '/res';

export default class OsApp extends Component {
    render() {
        const image = `${IMAGE_PATH}/${this.props.bgImage}`
        return this.props.state === 'small' ? (
            <OsAppSmall
                bgImage={image}
                bgColor={this.props.bgColor}
            />
        ) : (
            <OsAppBig 
                name={this.props.name}
                bgImage={image}
                bgColor={this.props.bgColor}
            />
        );
    }
}
