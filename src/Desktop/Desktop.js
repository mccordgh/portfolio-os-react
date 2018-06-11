import React, { Component } from 'react';
import MobileView from './MobileView/MobileView';
import DesktopView from './DesktopView/DesktopView';

import API_KEY from '../json/key';
import appsList from '../json/apps';

import headIcon from '../res/mccordinator2_head.png';

import './Desktop.css';

const IPAD_PRO_WIDTH = 1024;
const API_URL = 'https://itch.io/api/1/key';

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

  componentDidMount() {
    this.setState({apps: this.getAppsInfo()});
    this.fetchGames();

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

  fetchGames() {
    this.makeGamesRequest()
      .then(response => response.json())
      .then((response) => {
        this.parseGamesResponse(response);
      })
  }

  makeGamesRequest() {
    return fetch(`${API_URL}/my-games`, {
      method: 'get',
      headers: new Headers({
        'Authorization': `Bearer ${API_KEY.key}`,
      }),
    });
  }

  parseGamesResponse(response) {
    const appList = this.state.apps;

    const gamesList = response.games.map((game) => {
      return Object.assign({}, {
        name: game.title,
        iconImage: this.getIconByGameName(game.title),
        description: this.getDetailsByGameName(game.title),
        shortText: game.short_text,
        coverImage: game.cover_url,
        releaseDate: game.published_at,
        type: game.type,
        links: [{ url: game.url, text: `Get more info and play ${game.title} on itch.io!` }],
      });
    });

    appList.unshift({
      name: 'Games',
      list: gamesList,
    });

    this.setState({apps: appList});
  }

  getIconByGameName(gameName) {
    return 'temp3.png';
  }

  getDetailsByGameName(gameName) {
    return 'It is game. you like';
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
