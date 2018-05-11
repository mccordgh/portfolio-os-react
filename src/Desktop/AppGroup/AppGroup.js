import React, { Component } from 'react';
import './AppGroup.css';

export default class AppGroup extends Component {
  render() {
    return (
      <div className="AppGroup">
        <div className="AppImage">
        </div>
        <div className="AppTitle">
          <h3>{ this.props.name }</h3>
        </div>
      </div>
    );
  }
}
