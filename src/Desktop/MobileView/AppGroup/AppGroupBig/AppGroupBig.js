import React, { Component } from 'react';
import OsApp from '../OsApp/OsApp';

import './AppGroupBig.css';

export default class AppGroupBig extends Component {
  render() {
    return (
      <div className="appGroupSmallPlaceholder">
            <div
                className="osAppGroupDimBehind"
                onClick={() => { this.props.makeGroupSmall() }}
            ></div>

        <div className="appGroupBig">
             <div className="appGroupBigTitle">
                <h1>{ this.props.name }</h1>
            </div>

            <div className="appGroupBigBackground">
                <div className="appGroupBigContainer">
                    {
                        this.props.list.map((item, key) => {
                            return <OsApp
                                key={key}
                                id={key}
                                name={item.name}
                                group={this.props.name}
                                bgColor={item.bgColor}
                                iconImage={item.iconImage}
                                directory={this.props.directory}
                                state={this.props.state}
                                openAppCallback={this.props.openAppCallback}
                            />;
                        })
                    }
                </div>
            </div>
        </div>
      </div>
    );
  }
}
