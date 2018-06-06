import React, { Component } from 'react';
import DesktopApp from './DesktopApp/DesktopApp';

import './DesktopAppGroup.css';

const IMAGE_PATH = '/res';

export default class DesktopAppGroup extends Component {
    render() {
        return (
            <div className="desktopAppGroupWrapper">
                <div className="desktopGroupTitleWrapper desktopGroupTitle">
                    <h1 className="desktopGroupTitle"> { this.props.name } </h1>
                </div>

                <div className="DesktopAppWrapper">
                    {
                        this.props.list.map((item, key) => {
                            return <DesktopApp
                                key={key}
                                bgColor="orange"
                                bgImage={`${IMAGE_PATH}/${item.bgImage}`}
                                group={this.props.name}
                                id={key}
                                name={item.name}
                                openAppCallback={this.props.openAppCallback}
                            />;
                        })
                    } 
                </div>
                    
                <hr />
            </div>
        );
    }
}