import React, { Component } from 'react';

import './OsApp.css';

const IMAGE_PATH = '/res';

export default class OsApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bgImage: null,
        }
    }
    render() {
        return (
          <div className="osAppGroup">
            <div
                className="osAppGroupBackground"
                style={this.osAppStyleObject()}
            >
              <div className="osAppGroupContainer">
              </div>
            </div>
          </div>
        );
      }

      componentDidMount() {
          if (this.props.bgImage) {
            const img = `${IMAGE_PATH}/${this.props.bgImage}`;

            this.setState({bgImage: img});
          }
      }

    osAppStyleObject() {
        return {
            backgroundImage: `url(${this.state.bgImage}), linear-gradient(to bottom right, ${this.props.bgColor} 30%, white 150%)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        };
    }
}
