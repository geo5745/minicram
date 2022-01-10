import React from 'react';

class Practice2 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            textContent : '',
            selStart: 0,
            selEnd: 0,
            selText: ''
        }
    }

    setTextContent (e) {
        let val = e.target.value
        this.setState({textContent : val})
    }

    captureSelection (e) {
        let textStart = e.target.selectionStart;
        let textEnd = e.target.selectionEnd;
        let chosenText = this.state.textContent.substring(textStart,textEnd);
        this.setState({
            selStart: textStart,
            selEnd: textEnd,
            selText: chosenText
        })
    }



    render() {
        return (
        <div className = "practice-main-container">
            <div className="practice-block">
                <textarea placeholder="Start typing here... " className="practice-textarea"
                    value = {this.state.textContent}
                    onChange = {(e)=>this.setTextContent(e)}
                    onSelect = {(e)=>this.captureSelection(e)}
                    >
                    </textarea>
            </div>
            <div><button>Log</button></div>
            <div>{this.state.textContent}</div>
            <div>Start: {this.state.selStart}</div>
            <div>End: {this.state.selEnd}</div>
            <div>Substring: {this.state.selText}</div>
        </div>
        )}
};

export default Practice2;