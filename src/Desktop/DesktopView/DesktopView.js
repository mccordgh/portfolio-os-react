import React, { Component } from 'react';

import DesktopAppGroup from './DesktopAppGroup/DesktopAppGroup';
// import DesktopSocialMediaBar from './DesktopSocialMediaBar/DesktopSocialMediaBar';
import DesktopStatusBar from './DesktopStatusBar/DesktopStatusBar';
import Mccordinator from '../Mccordinator/Mccordinator';
import OpenDesktopAppWindow from './OpenDesktopAppWindow/OpenDesktopAppWindow';

import './DesktopView.css';

export default class DesktopView extends Component {
    render() {
        const appGroups = (
            this.props.apps.map((appGroup, key) => {
                return (
                    <DesktopAppGroup
                        key={key}
                        name={appGroup.name}
                        list={appGroup.list}
                        directory={appGroup.directory}
                        openAppCallback={this.props.openAppCallback}
                    />
                );
            })
        );

        const selectedApp = this.props.selectedApp.name
            ? (
                <OpenDesktopAppWindow
                    app={this.props.selectedApp}
                    closeAppCallback={this.props.closeAppCallback}
                />
            )
            : (
                <div></div>
            );

        return (
            <div className="desktopContainer">
                <DesktopStatusBar />
                { appGroups }

                {/* <DesktopSocialMediaBar />  */}

                { selectedApp }
                <Mccordinator />
            </div>
        );
    }
}