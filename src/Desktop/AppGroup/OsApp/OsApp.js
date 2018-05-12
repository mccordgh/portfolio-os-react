import React, { Component } from 'react';
import OsAppSmall from './OsAppSmall/OsAppSmall';
import OsAppBig from './OsAppBig/OsAppBig';

const IMAGE_PATH = '/res';

export default class OsApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            state: 'small',
        }
    }

    render() {
        const image = `${IMAGE_PATH}/${this.props.bgImage}`
        return this.state.state === 'small' ? (
            <OsAppSmall
                bgImage={image}
                bgColor={this.props.bgColor}
            />
        ) : (
            <OsAppBig />
        );
    }

    componentDidMount() {
        if (this.props.bgImage) {
        const img = `${this.props.bgImage}`;

        this.setState({bgImage: img});
        }
    }
}
