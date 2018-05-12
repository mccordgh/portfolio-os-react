import React, { Component } from 'react';
import OsApp from './OsApp/OsApp';
import './AppGroup.css';

export default class AppGroup extends Component {
  render() {
    return (
      <div className="AppGroup">
        <div className="AppGroupBackground">
        </div>
        <div className="AppGroupTitle">
          <h3>{ this.props.name }</h3>
        </div>
      </div>
    );
  }
}
