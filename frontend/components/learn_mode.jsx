import React from 'react';
import { Link } from 'react-router-dom';
import {arraySample} from '../util/mc_util';

class LearnMode extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            cards: [],
            cardsLeft: [],
            currentCard: {},
            questionSet: [],
            completedCards: [],
            title: '',
            description: '',
            cardCount: 0,
            currentTerm: '',
            currentDefinition: '',
            currentIndex: 1,
            oldIndex: 0,
            leftButtonDisabled: true,
            rightButtonDisabled: false,
            flipCardClass: "flip-card",
            message: '',
            messageClass: '',
            wrongAnswerVisible: false,
            correctButtonClass: 'ms-button',
            percentComplete: '0',
            masteredClass: 'num-mastered',
            allDoneVisible: false,
            addOne: 1
        }
        this.generateQuestionSet = this.generateQuestionSet.bind(this);


    }

    componentDidMount() {
        this.props.fetchSet(this.props.setId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.cards !== this.props.cards) {
            this.setState({cards: this.props.cards,
                cardsLeft: this.props.cards, 
                cardCount: this.props.sets.card_count,
                title: this.props.sets.title,
                description: this.props.sets.description})
        }
        if (this.state.cards.length > 0 && this.state.currentIndex !== this.state.oldIndex) {
            let idx = this.state.currentIndex-1
            let newTerm = this.state.cards[idx].term;
            let newDefinition = this.state.cards[idx].definition;
            this.setState({currentTerm: newTerm});
            this.setState({currentDefinition: newDefinition});
            let z = this.state.currentIndex;
            this.setState({oldIndex: z});
            this.generateQuestionSet();
        }
    }

    generateQuestionSet() {
        // draw card from the remaining cards at random
        // draw 3 more cards from the original set at random
        // shuffle the set
        // set the "right answer" as current card
        // take out the "right card" crom the cards left array. This card will be plugged back in if the Q is wrong.
        let sampleSet = [];
        let randIdx = Math.floor(Math.random() * this.state.cardsLeft.length);
        let cardDrawn = this.state.cardsLeft[randIdx];
        let cardsLeftMinusOne = this.state.cardsLeft.slice(0,randIdx).concat(this.state.cardsLeft.slice(randIdx+1));
        sampleSet.push(cardDrawn);
        let minQuestions = Math.min(this.state.cards.length,4);
        sampleSet = arraySample(this.state.cards,minQuestions,sampleSet);
        sampleSet = arraySample(sampleSet,minQuestions);
        this.setState({questionSet: sampleSet, currentCard: cardDrawn, cardsLeft: cardsLeftMinusOne, currentTerm: cardDrawn.term, currentDefinition: cardDrawn.definition });
    }



    clickedCorrect() {
        this.setState({currentDefinition: "Correct! 😀", correctButtonClass: 'button-correct'});
        // need to disable buttons once clicked 
        setTimeout(()=>{
            let correctCards = this.state.completedCards;
            let cardToPutAway = this.state.currentCard;
            correctCards.push(cardToPutAway);
            this.setState({completedCards: correctCards, message:'', correctButtonClass: 'ms-button'});
            this.calculatePercentage();
            if (this.state.cardsLeft.length > 0) {
                this.generateQuestionSet();
            } else {
                this.setState({cardsLeft: [], currentTerm: '', questionSet: [], allDoneVisible:true, addOne:0});
            }
        },1000);
    }

    clickedWrong() {
        this.setState({wrongAnswerVisible: false});
        setTimeout(()=>{
            let cardToPutBack = this.state.currentCard;
            let cardsInDeck = this.state.cardsLeft;
            cardsInDeck.push(cardToPutBack);
            this.setState({cardsLeft: cardsInDeck, message:''})
            this.generateQuestionSet();
        },0);
    }

    calculatePercentage() {
        let percentage = Math.floor(this.state.completedCards.length / this.state.cards.length * 100)
        this.setState({percentComplete: percentage, masteredClass: 'num-mastered mastered-correct'});
    }

    showWrongAnswer() {
        this.setState({wrongAnswerVisible: true});
    }


    render() {
        let allButtons = [];
        if (this.state.questionSet.length > 0) {
            allButtons = this.state.questionSet.map((question,i) => {
                if (question === this.state.currentCard) {
                    return (<div key={i}><button className={this.state.correctButtonClass} onClick={()=>this.clickedCorrect()}>{this.state.currentDefinition}</button></div>)
                } else {
                    return (<div key={i}><button className="ms-button" onClick={()=>this.showWrongAnswer()}>{question.definition}</button></div>)
                }
            })
        }

        let wrongAnswerDiv = (
            <div className="wrong-container">
                <div className ="wrong-header">😕 Study this one!</div>
                <div className = "wrong-hr"></div>
                <div className = "wrong-definition-header">DEFINITION</div>
                <div className = "wrong-definition">{this.state.currentDefinition}</div>
                <div className = "correct-answer-header">CORRECT ANSWER</div>
                <div className = "correct-answer">{this.state.currentTerm}</div>
                <div className = "escape-button-container"><button onClick={()=>this.clickedWrong()} className ="escape-button">Continue</button></div>
            </div>)

        let allDoneDiv = (
            <div className = "all-done">
                <div></div>
                <div></div>
                <div className = "trophy-container"><i className="fas fa-trophy"></i></div>
                <div className = "done-main-text">Congratulations, you've learned everything!</div>
                <div className = "done-sub-text">Keep reviewing your most missed terms to make sure they stick</div>
                <div></div>
                <div></div>
                <div><Link className="end-back-link" to={`/set/${this.props.setId}/flashcards`}>Finish</Link></div>
            </div>
        )

        return (
            <div className="learn-main-div">
                <div className="learn-sidebar">
                    <div className="back-link-container"><Link to={`/set/${this.props.setId}/flashcards`}><section><i className="fa fa-chevron-left" aria-hidden="true"></i></section><div>&nbsp;&nbsp;&nbsp;Back to set page</div></Link></div>
                    <div className="learn-hr-container"></div>
                    <div className="learn-sidebar-header"><i className="fa fa-graduation-cap" aria-hidden="true"></i><div>&nbsp;&nbsp;&nbsp;LEARN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></div>
                    <div className="num-remaining">{this.state.cardsLeft.length+this.state.addOne}</div>
                    <div className="remaining-text">REMAINING</div>
                    <div className="arrow-down"><i className="fa fa-arrow-down" aria-hidden="true"></i></div>
                    <div className={this.state.masteredClass}>{this.state.completedCards.length}</div>
                    <div className="mastered-text">MASTERED</div>
                </div>
                <div className="learn-test-container">
                {this.state.wrongAnswerVisible ? wrongAnswerDiv : <></>}
                {this.state.allDoneVisible ? allDoneDiv : <></>}
                <div className="progressbar-empty"><div className="progressbar-full" style={{width: `${this.state.percentComplete}%`}}></div></div>
                    <div className="learn-canvas">
                        <div className="learn-term-container">{this.state.currentTerm}</div>
                        <div className="learn-buttons">
                            {allButtons}
                        </div>
                    </div>
                </div>
            </div>





            // <div>
            //     <p>Current Term: {this.state.currentTerm}</p>
            //     <p></p>
            //     <ul>
            //         {allButtons}
            //     </ul>
            //     <p></p>
            //     <p> -- {this.state.message} --</p>
            //     <p>Cards Correct: {this.state.completedCards.length}</p>
            //     <p>Cards Left: {this.state.cardsLeft.length+1}</p>
            //     <p>{(this.state.cardsLeft === 0) ? "All Done!" : ""}</p>
            // </div>
        )
    }

}

export default LearnMode;