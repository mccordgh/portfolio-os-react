import React, { Component } from 'react';

import './Mccordinator.css';

import dialogue from '../../json/dialogue.json';

export default class Mccordinator extends Component {
    constructor() {
        super();

        this.state = {
            dialogueNumber: 0,
            bubbleText: '',
            showBubble: false,
        };

        this.clickyTheFace = this.clickyTheFace.bind(this);
        this.nextDialogueQueue = this.nextDialogueQueue.bind(this);
        this.closeDialogue = this.closeDialogue.bind(this);
    }

    render() {
        return (
            <div>
                <div onClick={this.clickyTheFace} className="mccordinatorHead"></div>

                { this.state.showBubble &&
                    <div className="mccordinatorSpeechBubble">
                        <p>
                            { this.state.bubbleText.text }
                        </p>
                        <span onClick={this.nextDialogueQueue}> + {this.state.bubbleText.continue}</span>
                        <span onClick={this.closeDialogue}> + {this.state.bubbleText.exit}</span>
                    </div>
                }
            </div>
        );
    }

    componentDidMount() {
        this.nextDialogueQueue();
    }

    nextDialogueQueue() {
        const next = (this.state.dialogueNumber >= (dialogue.length - 1))
            ? 0
            : this.state.dialogueNumber + 1;
        
        this.setState({
                bubbleText: dialogue[this.state.dialogueNumber],
                dialogueNumber: next,
        });
    }

    closeDialogue() {
        this.setState({
            showBubble: false,
            dialogueNumber: 0,
        });

        this.nextDialogueQueue();
    }

    showDialogue() {
        this.setState(() => { return {showBubble: true} });
    }

    clickyTheFace() {
        this.showDialogue();
    }
}