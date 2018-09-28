import React, { Component } from 'react';
import MobileView from './MobileView/MobileView';
import DesktopView from './DesktopView/DesktopView';
// import RequestManager from '../Requests/RequestManager';

import appsList from '../json/apps';
// import gamesList from '../json/games';

import headIcon from '../res/mccordinator2_head.png';

import './Desktop.css';

const IPAD_PRO_WIDTH = 1024;

// TODO: IN ABOUT SECTION DO A FAQ??

export default class Desktop extends Component {
  constructor() {
    super();

    this.state = {
      apps: [],
      selectedApp: {},
      mode: '',
    };

    this.setModeByClientWidth = this.setModeByClientWidth.bind(this);
  }

  render() {
    const mobileMode = (
      <MobileView
        apps={this.state.apps}
        headIcon={headIcon}
        selectedApp={this.state.selectedApp}
        openAppCallback={this.openApp.bind(this)}
        closeAppCallback={this.closeApp.bind(this)}
        />
    );

    const desktopMode = (
      <DesktopView
        apps={this.state.apps}
        name={this.props.name}
        selectedApp={this.state.selectedApp}
        closeAppCallback={this.closeApp.bind(this)}
        openAppCallback={this.openApp.bind(this)}
      />
    );

    return this.state.mode === 'desktop' ? desktopMode : mobileMode;
  }

  init() {
    this.setState({apps: appsList.data});
    
    // const appsWithBgColors = this.setAppsBgColors(appsList.data);
    // console.log(appsWithBgColors);
    // this.setState({apps: appsWithBgColors});
  }

  componentDidMount() {
    this.init();
    this.setModeByClientWidth();
    window.addEventListener('resize', this.setModeByClientWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setModeByClientWidth);
  }

  setModeByClientWidth() {
    const mode = window.innerWidth > IPAD_PRO_WIDTH ? 'desktop' : 'mobile';

    this.setState({mode});
  }

  getAppsInfo() {
    // return new Promise((resolve) => {
      // resolve(this.setAppsBgColors(appsList.data))
    // });
  }

  setAppsBgColors(data) {
    return data.map(appGroup => {
      appGroup.list = appGroup.list.map((item) => {
        return item.bgColor ? item.bgColor : Object.assign({}, item, {bgColor: this.getRandomColor()})
      });

      return appGroup;
    });
  }

  getRandomColor() {
    // const colors = ['red', 'green', 'orange', 'blue', 'purple', 'gold'];
    const colors = ['#133F60', '#63B8F9', '#603E09', '#AD7C33'];
    const rndColor = Math.floor(Math.random() * colors.length);

    return colors[rndColor];
  }

  openApp(id, group) {
    this.setState({selectedApp: this.findAppByIdAndGroup(id, group)});
  }

  findAppByIdAndGroup(id, groupName) {
    const group = this.state.apps.find(group => group.name === groupName);
    const appToOpen = group.list[id];

    return appToOpen;
  }

  closeApp() {
    this.setState({selectedApp: {}});
  }
}
