import React from 'react';
import { Link} from 'react-router-dom';
import MathJax from 'react-mathjax2'

class FlashcardMode extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            cards: [],
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
        }
        this.toggleFlip = this.toggleFlip.bind(this);
        this.deleteThisSet = this.deleteThisSet.bind(this);
        
    }

    componentDidMount() {
        this.props.fetchSet(this.props.setId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.cards !== this.props.cards) {
            this.setState({cards: this.props.cards, 
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
        }
    }

    lastClick() {
        if (this.state.currentIndex > 1) {
            this.setState({flipCardClass: "flip-card"});
            let j = this.state.currentIndex - 1;
            setTimeout(()=> {
                this.setState({currentIndex: j});
            },200);
            this.setState({rightButtonDisabled: false});
            if (j === 1) this.setState({leftButtonDisabled: true});
        }
    }

    nextClick() {
        if (this.state.currentIndex < this.props.sets.card_count) {
            this.setState({flipCardClass: "flip-card"});
            let i = this.state.currentIndex + 1;
            setTimeout(()=> {
                this.setState({currentIndex: i});
            },200);
            // let i = this.state.currentIndex + 1;
            // this.setState({currentIndex: i});
            this.setState({leftButtonDisabled: false});
            if (i === this.props.sets.card_count) this.setState({rightButtonDisabled: true});
        }
    }

    toggleFlip() {
        if (this.state.flipCardClass === "flip-card") {
            this.setState({flipCardClass: "flip-card hover"});
        } else {
            this.setState({flipCardClass: "flip-card"});
        }
    }

    deleteThisSet() {
        this.props.deleteSet(this.props.setId)
    }

    trashSet() {
        if (this.props.session.id === this.props.sets.user_id) this.deleteThisSet();
    }

    render() {
        return (
            <div className = "flashcard-main-div">
                <div className = "flashcard-main-column">
                    <div className = "directory-container"><a>Home</a> <i className="fa fa-chevron-right" aria-hidden="true"></i> <a>Arts &amp; Humanities</a> <i className="fa fa-chevron-right" aria-hidden="true"></i> <a>English</a> <i className="fa fa-chevron-right" aria-hidden="true"></i> <a>Linguistics</a></div>
                    <div className ="set-title-container">{this.state.title}</div>
                    <div className = "flashcard-and-nav-container">
                        <div className="flashcard-menu">
                            <div className = "flashcard-menu-header">STUDY</div>
                            <div className = "flashcard-menu-link"><a href=""><div className="spacer"><i className="fa fa-address-card" aria-hidden="true"></i></div><div><u> Flashcards</u></div></a></div>
                            <div className = "flashcard-menu-link"><Link to={`/set/${this.props.setId}/learn`}><div className="spacer"><i className="fa fa-graduation-cap" aria-hidden="true"></i></div><div>  Learn</div></Link></div>
                            <div className = "flashcard-menu-link"><a className="inactive"><div className="spacer"><i className="fa fa-file-word" aria-hidden="true"></i></div><div>  Write</div></a></div>
                            <div className = "flashcard-menu-link"><a className="inactive"><div className="spacer"><i className="fa fa-volume-up" aria-hidden="true"></i></div><div>  Spell</div></a></div>
                            <div className = "flashcard-menu-link"><a className="inactive"><div className="spacer"><i className="fa fa-hourglass-start" aria-hidden="true"></i></div><div>  Test</div></a></div>
                            <div className = "flashcard-menu-header">PLAY</div>
                            <div className = "flashcard-menu-link"><a className="inactive"><div className="spacer"><i className="fa fa-object-ungroup" aria-hidden="true"></i></div><div>  Match</div></a></div>
                            <div className = "flashcard-menu-link"><a className="inactive"><div className="spacer"><i className="fa fa-rocket" aria-hidden="true"></i></div><div>  Gravity</div></a></div>
                            <div className = "flashcard-menu-link"><a className="inactive"><div className="spacer"><i className="fa fa-gamepad" aria-hidden="true"></i></div><div>  Live</div></a></div>
                        </div>
                        <div className="flashcards">
                            <div onClick={this.toggleFlip} className={this.state.flipCardClass}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">{this.state.currentTerm}</div>
                                    <div className="flip-card-back">
                                        <div>
                                            <MathJax.Context input='tex'>
                                                <div>
                                                    <MathJax.Node>{this.state.currentDefinition}</MathJax.Node>
                                                </div>
                                            </MathJax.Context>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "flashcards-nav">
                                <div></div>
                                <div><button disabled={this.state.leftButtonDisabled} className="flashcard-nav-button"  onClick={()=> this.lastClick()}><i className="fa fa-arrow-left" aria-hidden="true"></i></button></div>
                                <div>{this.state.currentIndex} / {this.state.cardCount}</div>
                                <div><button disabled={this.state.rightButtonDisabled} className="flashcard-nav-button" onClick={()=> this.nextClick()}><i className="fa fa-arrow-right" aria-hidden="true"></i></button></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className = "flashcards-hr-container"><hr className="flashcards-divider"/></div>
                    <div className = "flashcards-footer">
                        <div className = "flashcards-creator-info">
                            <div className="flashcards-profile-pic-container">
                                <div className="creator-icon"></div>
                            </div>
                            <div className="flashcards-creator-column">
                                <div className="flashcards-created-by">Created by</div>
                                <div className="flashcards-creator-username"></div>
                            </div>
                        </div>
                        <div className = "flashcards-buttons-container">
                            <button className = "footer-button inactive"><i className="fa fa-plus" aria-hidden="true"></i>
                                <span className="tooltiptext">Add set to class or folder</span>
                            </button>
                            <button className = "footer-button"><Link to={`/set/${this.props.setId}/edit`}><i className="fa fa-wrench" aria-hidden="true"></i></Link>
                                <span className="tooltiptext">Edit</span>
                            </button>
                            <button className = "footer-button inactive"><i className="fa fa-upload" aria-hidden="true"></i>
                                <span className="tooltiptext">Share</span>
                            </button>
                            <button className = "footer-button inactive"><i className="fa fa-info" aria-hidden="true"></i>
                                <span className="tooltiptext">Info</span>
                            </button>
                            <button className = "footer-button"><Link onClick={()=>this.trashSet()} to={`/user/${this.props.session.id}`}><i className="fa fa-trash" aria-hidden="true"></i></Link>
                                <span className="tooltiptext">Delete</span>
                            </button>
                        </div>
                    </div>
                    <div className = "flashcards-description">{this.state.description}</div>
                </div>
            </div>









            // <center>
            //     <p></p>
            //     <p>Current term: {this.state.currentTerm}</p>
            //     <p>Current definition: {this.state.currentDefinition}</p>
            //     <table>
            //         <tbody>
            //             <tr>
            //                 <td><button disabled={this.state.leftButtonDisabled} className="flashcard-nav"  onClick={()=> this.lastClick()}><i className="fa fa-arrow-left" aria-hidden="true"></i></button></td>
            //                 <td>{this.state.currentIndex} / {this.state.cardCount}</td>
            //                 <td><button disabled={this.state.rightButtonDisabled} className="flashcard-nav" onClick={()=> this.nextClick()}><i className="fa fa-arrow-right" aria-hidden="true"></i></button></td>
            //             </tr>
            //         </tbody>
            //     </table>
            // </center>
        )
    }
}

export default FlashcardMode;