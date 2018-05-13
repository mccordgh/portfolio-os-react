import React, { Component } from 'react';
import OsApp from '../OsApp/OsApp';
import './AppGroupSmall.css';

export default class AppGroupSmall extends Component {
    render() {
        return (
        <div className="appGroupSmall" onClick={this.props.clickCallback}>
            <div className="appGroupSmallBackground">
                <div className="appGroupSmallContainer">
                    {
                    this.props.list.map((item, key) => {
                        return <OsApp
                            key={key}
                            name={item.name}
                            bgColor={item.bgColor}
                            bgImage={item.bgImage}
                            state={this.props.state}
                        />;
                    })
                    }
                </div>

                <div className="appGroupSmallTitle">
                    <h3>{ this.props.name }</h3>
                </div>
            </div>
        </div>
        );
    }
}
