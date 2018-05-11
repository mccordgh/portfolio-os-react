import React, { Component } from 'react';
import './Banner.css';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner__container">
        <div className="banner__left">
         <span>Matthew McCord</span>
        </div>
         <span>13:37</span>
        <div className="banner__right">
         <span>Portfolio OS 1.0</span>
        </div>
      </div>
    );
  }
}
