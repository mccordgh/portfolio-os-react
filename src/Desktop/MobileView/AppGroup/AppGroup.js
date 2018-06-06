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
        state={this.state.state}
      />
    ) : (
      <AppGroupBig
        list={this.props.list}
        name={this.props.name}
        state={this.state.state}
        openAppCallback={this.openApp.bind(this)}
      />
    );
  }

  makeGroupBig() {
    this.setState({state: 'big'});
  }

  makeGroupSmall() {
    this.setState({state: 'small'});
  }

  openApp(id, group) {
    this.makeGroupSmall();

    this.props.openAppCallback(id, group);
  }
}