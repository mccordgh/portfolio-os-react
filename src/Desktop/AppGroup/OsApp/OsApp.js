import React, { Component } from 'react';
import './OsApp.css';

export default class OsApp extends Component {
    render() {
        return (
          <div className="osAppGroup">
            <div
                className="osAppGroupBackground"
                style={this.osAppStyleObject()}
            >
              <div className="osAppGroupContainer">
                {/* {
                  this.props.list.map((item, key) => {
                    return <OsApp key={key} name={item.name} bgColor={item.bgColor} />;
                  })
                } */}
              </div>
            </div>
            {/* <div className="osAppGroupTitle">
              <h3>{ this.props.name }</h3>
            </div> */}
          </div>
        );
      }

    osAppStyleObject() {
        return {
            backgroundImage: `linear-gradient(to bottom right, ${this.props.bgColor} 30%, white 150%)`,
        };
    }
}
