import React, { Component } from 'react';
import './AppGroup.css';

export default class AppGroup extends Component {
  render() {
    return (
      <div className="AppGroup">
        <div className="AppImage" style={{backgroundImage: `linear-gradient(to bottom right, ${this.props.bgColor} 30%, white 150%)`}}>
        </div>
        <div className="AppTitle">
          <h3>{ this.props.name }</h3>
        </div>
      </div>
    );
  }
}
