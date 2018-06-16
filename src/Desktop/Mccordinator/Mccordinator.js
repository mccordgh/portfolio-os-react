import React, { Component } from 'react';

import './Mccordinator.css';

export default class Mccordinator extends Component {
    constructor() {
        super();

        this.state = {
            bubbleText: '',
            showBubble: false,
        };

        this.clickyTheFace = this.clickyTheFace.bind(this);
    }

    render() {
        return (
            <div onClick={this.clickyTheFace} className="mccordinatorHead">
                { this.state.showBubble &&
                    <div className="mccordinatorSpeechBubble">
                        <p>
                            { this.state.bubbleText }
                        </p>
                        <hr />
                        <span> + Yes </span>
                        <span> + No </span>
                    </div>
                }
            </div>
        );
    }

    nextDialogueShow() {
        this.setState({bubbleText: 'It looks like you are trying to browse this portfolio. Would you like me tell you just how awesome Matthew McCord is?'});
        this.setState({showBubble: true});
    }
   
    clickyTheFace() {
        this.nextDialogueShow();
    }
}