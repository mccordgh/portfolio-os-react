import React, { Component } from 'react';
import DesktopApp from './DesktopApp/DesktopApp';

import './DesktopAppGroup.css';

const IMAGE_PATH = '/res';

export default class DesktopAppGroup extends Component {
    constructor() {
        super();

        this.state = {
          titleClass: '',
          wrapperClass: '',
        };

        this.toggleExpansionClasses = this.toggleExpansionClasses.bind(this);
    }


    render() {
        const titleClass = `desktopAppWrapper ${this.state.titleClass}`;
        const wrapperClass = `desktopAppGroupWrapper ${this.state.wrapperClass}`;

        return (
            <div className={wrapperClass}>
                <div className="desktopGroupTitleWrapper desktopGroupTitle">
                    <h1
                        onClick={this.toggleExpansionClasses}
                        className="desktopGroupTitle"
                    > { this.props.name } </h1>
                </div>

                <div className={titleClass}>
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
        const expandedClass = this.state.titleClass === 'expanded' ? '' : 'expanded';

        this.setState({
            titleClass: expandedClass,
            wrapperClass: expandedClass,
        });
    }
}