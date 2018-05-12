import React, { Component } from 'react';
import OsAppSmall from './OsAppSmall/OsAppSmall';
import OsAppBig from './OsAppBig/OsAppBig';

const IMAGE_PATH = '/res';

export default class OsApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bgImage: null,
            state: 'small',
        }
    }

    render() {
        return this.state.state === 'small' ? (
            <OsAppSmall
                bgImage={this.props.bgImage}
                bgColor={this.props.bgColor}
            />
        ) : (
            <OsAppBig />
        );
    }

    componentDidMount() {
        if (this.props.bgImage) {
        const img = `${IMAGE_PATH}/${this.props.bgImage}`;

        this.setState({bgImage: img});
        }
    }
}
