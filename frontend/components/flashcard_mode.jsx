import React from 'react';

class FlashcardMode extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            cards: [],
            cardCount: 0,
            currentTerm: '',
            currentDefinition: '',
            currentIndex: 1,
            oldIndex: 0,
            leftButtonDisabled: true,
            rightButtonDisabled: false
        }
    }

    componentDidMount() {
        this.props.fetchSet(this.props.setId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.cards !== this.props.cards) {
            this.setState({cards: this.props.cards, cardCount: this.props.sets.card_count})
        }
        if (this.state.cards.length > 0 && this.state.currentIndex !== this.state.oldIndex) {
            //debugger
            let idx = this.state.currentIndex-1
            let newTerm = this.state.cards[idx].term;
            let newDefinition = this.state.cards[idx].definition;
            this.setState({currentTerm: newTerm});
            this.setState({currentDefinition: newDefinition});
            let z = this.state.currentIndex;
            this.setState({oldIndex: z});
        }
    }

    lastClick() {
        //debugger
        if (this.state.currentIndex > 1) {
            // this.currentIndex = this.currentIndex - 1;
            let j = this.state.currentIndex - 1;
            this.setState({currentIndex: j});
            this.setState({rightButtonDisabled: false});
        } else {
            this.setState({leftButtonDisabled: true});
        }
    }

    nextClick() {
        //debugger
        if (this.state.currentIndex < this.props.sets.card_count) {
            // this.currentIndex = this.currentIndex + 1;
            let i = this.state.currentIndex + 1;
            this.setState({currentIndex: i});
            this.setState({leftButtonDisabled: false});
        } else {
            this.setState({rightButtonDisabled: true});
        }
    }

    render() {
        return (
            <center>
                <p></p>
                <p>Current term: {this.state.currentTerm}</p>
                <p>Current definition: {this.state.currentDefinition}</p>
                <table>
                    <tbody>
                        <tr>
                            <td><button disabled={this.state.leftButtonDisabled} className="flashcard-nav"  onClick={()=> this.lastClick()}><i className="fa fa-arrow-left" aria-hidden="true"></i></button></td>
                            <td>{this.state.currentIndex} / {this.state.cardCount}</td>
                            <td><button disabled={this.state.rightButtonDisabled} className="flashcard-nav" onClick={()=> this.nextClick()}><i className="fa fa-arrow-right" aria-hidden="true"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </center>
        )
    }
}

export default FlashcardMode;