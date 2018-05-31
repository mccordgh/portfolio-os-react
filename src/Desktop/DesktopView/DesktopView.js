import React, { Component } from 'react';
import FolderAppGroup from './FolderAppGroup/FolderAppGroup';

import './DesktopView.css';

export default class DesktopView extends Component {
    render() {
        const appGroups = (
            this.props.apps.map((appGroup, key) => {
                return (
                    <FolderAppGroup
                        key={key}
                        name={appGroup.name}
                        list={appGroup.list}
                        openAppCallback={this.props.openAppCallback}
                    />
                );
            })
        );

        const selectedApp = (
            <div className="desktopSelectedAppWrapper">

            </div>
        );

        return (
            <div className="desktopContainer">
                { appGroups }
                { selectedApp }
            </div>
        );
    }
}