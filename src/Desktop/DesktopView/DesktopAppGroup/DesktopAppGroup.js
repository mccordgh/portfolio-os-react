import React, { Component } from 'react';
import DesktopApp from './DesktopApp/DesktopApp';

import './DesktopAppGroup.css';

const IMAGE_PATH = '/res';

export default class DesktopAppGroup extends Component {
    constructor() {
        super();

        this.state = {
          wrapperClass: '',
        };

        this.toggleExpansionClasses = this.toggleExpansionClasses.bind(this);
    }

    render() {
        return (
            <div className="desktopAppGroupWrapper">
                <div className="desktopGroupFolder" onClick={this.toggleExpansionClasses}>
                    <div className="desktopGroupFolder_back"></div>

                    <div className={"desktopGroupFolder_front " + this.state.wrapperClass}>
                        <h1 className="desktopGroupTitle">{ this.props.name }</h1>
                    </div>
                </div>

                <div className="desktopAppWrapper">
                    {
                        this.props.list.map((item, key) => {
                            return <DesktopApp
                                key={key}
                                activeLink={item.activeLink}
                                bgColor="orange"
                                iconImage={`${IMAGE_PATH}/${item.iconImage}`}
                                group={this.props.name}
                                id={key}
                                name={item.name}
                                openAppCallback={this.props.openAppCallback}
                            />;
                        })
                    }
                </div>
            </div>
        );
    }

    toggleExpansionClasses() {
        const expandedClass = this.state.wrapperClass === 'expanded' ? '' : 'expanded';

        this.setState({ wrapperClass: expandedClass });
    }
}