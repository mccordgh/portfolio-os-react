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
    };
  }

  render() {
    return (
      <div className="desktop__container">
        <div className="appgroup__container">
          {
            this.state.apps.map((appGroup, key) => {
              return <AppGroup key={key} name={appGroup.name} list={appGroup.list} />;
            })
          }
        </div>
        <div className="os__image">
          <img src={headIcon} alt="Mccordinator's Pixel Head"/>
        </div>
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
}
