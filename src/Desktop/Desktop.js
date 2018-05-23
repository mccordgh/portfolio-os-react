import React, { Component } from 'react';
import AppGroup from './AppGroup/AppGroup';
import OpenAppWindow from './OpenAppWindow/OpenAppWindow';

// import apiKey from '../key.json';
import appsList from '../json/apps';

import headIcon from '../res/mccordinator2_head.png';

import './Desktop.css';

const IPAD_PRO_WIDTH = 1024;

// TODO: IN ABOUT SECTION DO A FAQ

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
      <div className="desktopContainer">
        <div className="appgroupContainer">
          {
            this.state.apps.map((appGroup, key) => {
              return <AppGroup
                key={key}
                name={appGroup.name}
                list={appGroup.list}
                openAppCallback={this.openApp.bind(this)}
              />;
            })
          }
        </div>
        <div className="osImage">
          <img src={headIcon} alt="Mccordinator's Pixel Head"/>
        </div>

        {this.state.selectedApp.name &&
          <OpenAppWindow
            app={this.state.selectedApp}
            closeAppCallback={this.closeApp.bind(this)}
          />
        }
      </div>
    );

    const desktopMode = (
      <h1>Desktop Mode!</h1>
    );

    return this.state.mode === 'desktop' ? desktopMode : mobileMode;
  }

  componentDidMount() {
    this.setState({apps: this.getAppsInfo()});

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
    return this.setAppsBgColors(appsList.data);
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
    const colors = ['red', 'green', 'orange', 'blue', 'purple', 'gold'];
    const rndColor = Math.floor(Math.random() * 6);

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
