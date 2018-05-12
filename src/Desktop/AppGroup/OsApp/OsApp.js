import React, { Component } from 'react';
import './OsApp.css';

export default class OsApp extends Component {
  render() {
    return (
      <div className="OsApp">
        <div className="OsAppBackground" style={{backgroundImage: `linear-gradient(to bottom right, ${this.props.bgColor} 30%, white 150%)`}}>
        </div>
        <div className="OsAppTitle">
          <h3>{ this.props.name }</h3>
        </div>
      </div>
    );
  }
}
