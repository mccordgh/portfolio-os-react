import React, { Component } from 'react';
import Banner from './Banner/Banner';
import AppGroup from './AppGroup/AppGroup';
import OpenAppWindow from '../OpenAppWindow/OpenAppWindow';

export default class MobileView extends Component {
    render() {
        return (
            <div className="mobileContainer">
                <Banner />

                <div className="appgroupContainer">
                {
                    this.props.apps.map((appGroup, key) => {
                    return <AppGroup
                        key={key}
                        name={appGroup.name}
                        list={appGroup.list}
                        openAppCallback={this.props.openAppCallback}
                    />;
                    })
                }
                </div>
                <div className="osImage">
                <img src={this.props.headIcon} alt="Mccordinator's Pixel Head"/>
                </div>

                {this.props.selectedApp.name &&
                <OpenAppWindow
                    app={this.props.selectedApp}
                    closeAppCallback={this.props.closeAppCallback}
                />
                }
            </div>
      );
    }
}
