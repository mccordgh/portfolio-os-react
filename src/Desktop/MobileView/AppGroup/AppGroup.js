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
    this.makeGroupSmall = this.makeGroupSmall.bind(this);
  }
  render() {
    return this.state.state === 'small' ? (
      <AppGroupSmall
        list={this.props.list}
        name={this.props.name}
        activeLink={this.props.activeLink}
        clickCallback={this.makeGroupBig}
        state={this.state.state}
        directory={this.props.directory}
      />
    ) : (
      <AppGroupBig
        list={this.props.list}
        name={this.props.name}
        state={this.state.state}
        directory={this.props.directory}
        openAppCallback={this.openApp.bind(this)}
        makeGroupSmall={this.makeGroupSmall}
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
