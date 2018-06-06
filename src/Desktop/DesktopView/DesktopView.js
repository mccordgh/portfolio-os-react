import React, { Component } from 'react';
import DesktopAppGroup from './DesktopAppGroup/DesktopAppGroup';

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
                        openAppCallback={this.props.openAppCallback}
                    />
                );
            })
        );

        const selectedApp = this.props.selectedApp.name
            ? (
                <div className="desktopSelectedAppWrapper">
                    <h1>{ this.props.selectedApp.name } </h1>
                    <h1>{ this.props.selectedApp.name } </h1>
                    <h1>{ this.props.selectedApp.name } </h1>
                    <h1>{ this.props.selectedApp.name } </h1>
                    <h1>{ this.props.selectedApp.name } </h1>
                    <h1>{ this.props.selectedApp.name } </h1>
                    <h1>{ this.props.selectedApp.name } </h1>
                </div>
            )
            : (
                <div></div>
            );

        return (
            <div className="desktopContainer">
                { appGroups }
                { selectedApp }
            </div>
        );
    }
}