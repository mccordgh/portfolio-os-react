import React, { Component } from 'react';
import OsApp from './OsApp/OsApp';
import './AppGroup.css';

export default class AppGroup extends Component {
  render() {
    return (
      <div className="appGroup">
        <div className="appGroupBackground">
          <div className="appGroupContainer">
            {
              this.props.list.map((item, key) => {
                return <OsApp key={key} name={item.name} bgColor={item.bgColor} />;
              })
            }
          </div>
          
          <div className="appGroupTitle">
            <h3>{ this.props.name }</h3>
          </div>
        </div>
      </div>
    );
  }
}
