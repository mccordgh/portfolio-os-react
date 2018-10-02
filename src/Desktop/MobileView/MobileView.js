import React, { Component } from 'react';
import Banner from './Banner/Banner';
import AppGroup from './AppGroup/AppGroup';
import OpenAppWindow from '../OpenAppWindow/OpenAppWindow';

import IMAGE_PATH from '../../constants/image_path';

export default class MobileView extends Component {
    render() {
        return (
            <div className="mobileContainer">
                {/* <h1 style={{textAlign:'center', width: '100%', marginTop: '10rem', fontSize: '5rem'}}>Mobile View is coming soon!!</h1> */}
                <Banner 
                    openAboutCallback={this.props.openAboutCallback}
                />

                <div className="appgroupContainer">
                {
                    this.props.apps.map((appGroup, key) => {
                    return <AppGroup
                        key={key}
                        name={appGroup.name}
                        list={appGroup.list}
                        directory={`${IMAGE_PATH}/${appGroup.directory}`}
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
