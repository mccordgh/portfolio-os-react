import React, { Component } from 'react';
import AppGroupSmall from './AppGroupSmall/AppGroupSmall';
import AppGroupBig from './AppGroupBig/AppGroupBig';

export default class AppGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state: 'small',
    };

    this.makeGroupBig = this.makeGroupBig.bind(this);
  }
  render() {
    return this.state.state === 'small' ? (
      <AppGroupSmall
        list={this.props.list}
        name={this.props.name}
        clickCallback={this.makeGroupBig}
      />
    ) : (
      <AppGroupBig
        list={this.props.list}
        name={this.props.name}
      />
    );
  }

  makeGroupBig() {
    this.setState({state: 'big'});
  }
}
