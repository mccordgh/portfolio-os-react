import React, { Component } from 'react';
import FolderApp from './FolderApp/FolderApp';

import './FolderAppGroup.css';

const IMAGE_PATH = '/res';

export default class FolderAppGroup extends Component {
    render() {
        return (
            <div className="desktopAppWrapper">
                <h1 className="folderGroupTitle"> { this.props.name } </h1>

                <div className="folderAppWrapper">
                    {
                        this.props.list.map((item, key) => {
                            return <FolderApp
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