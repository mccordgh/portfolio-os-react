import React, { Component } from 'react';
import AppGroup from './AppGroup/AppGroup';

// import apiKey from '../key.json';
import appsList from '../json/apps';

import headIcon from '../res/mccordinator2_head.png';

import './Desktop.css';

// TODO: IN ABOUT SECTION DO A FAQ

export default class Desktop extends Component {
  constructor() {
    super();

    this.state = {
      apps: [],
      selectedApp: {},
    };
  }

  render() {
    return (
      <div className="desktop__container">
        <div className="appgroup__container">
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
        <div className="os__image">
          <img src={headIcon} alt="Mccordinator's Pixel Head"/>
        </div>

        {this.state.selectedApp.name &&
          <div className="openApp">
            <h1>{this.state.selectedApp.name}</h1>
          </div>
        }
      </div>
    );
  }

  componentDidMount() {
    this.setState({apps: this.getAppsInfo()});
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

  openApp(id, group, event) {
    this.setState({selectedApp: this.findAppByIdAndGroup(id, group)});
  }

  findAppByIdAndGroup(id, groupName) {
    const group = this.state.apps.find(group => group.name === groupName);
    const appToOpen = group.list[id];

    return appToOpen;
  }
}
