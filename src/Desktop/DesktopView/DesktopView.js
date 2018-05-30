import React, { Component } from 'react';
import FolderAppGroup from './FolderAppGroup/FolderAppGroup';

import './DesktopView.css';

export default class DesktopView extends Component {
    render() {
        return (
            <div className="desktopContainer">
                {
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
                }
            </div>
        );
    }
}