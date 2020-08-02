import React from 'react';
import NewCardForm from './new_card_form';


class CreateSet extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            sets: {title: '', description: ''},
            cards: []
            }
        
        this.addCard = this.addCard.bind(this);
    }
    
    componentDidMount() {
        if (!this.props.session.id) this.props.openProtected();
        if (this.props.formType === "edit" && this.props.session.id) this.props.fetchSet(this.props.setId);
        if (this.props.formType === "create" && this.props.session.id) this.props.createSet(this.props.session);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.cards !== this.props.cards && this.props.session.id) {
            this.setState({sets: this.props.sets});
            this.setState({cards: this.props.cards});
        }
    }

    componentWillUnmount() {
        this.props.closeProtected();
        this.setState({sets: {title: '', description: ''}});
        this.setState({cards: []});
    }

    addCard() {
        let cardsArray = this.state.cards;
        let nextCardId = cardsArray.slice(-1)[0]+1;
        cardsArray.push(nextCardId);
        this.setState({cards: cardsArray});
    }


    render() {
        const allCards = this.state.cards.map((card,i) => 
                <NewCardForm 
                    count={i+1} 
                    id={card.id} 
                    key={card.id} 
                    term={card.term} 
                    definition={card.definition} 
                    deleteCard={this.props.deleteCard}/>);
        return (
            <div className = "create-set-container">
                <div className = "create-set-header-container">
                    <div className = "create-set-header">
                        <div className = "create-set-header-bar">
                            <div className = "create-set-master-text">Create a new study set</div>
                            <button     className = "create-set-header-button">Create</button>
                        </div>
                        <div className ="create-set-messages"></div>
                        <form className = "create-set-header-form">
                            <input type="text" value={this.state.sets.title || ''} placeholder='Enter a title, like "Biology - Chapter 22: Evolution"'/>
                            <p>TITLE</p>
                            <input type="text" value={this.state.sets.description || ''} placeholder="Add a description..."/>
                            <p>DESCRIPTION</p>
                        </form>
                    </div>
                </div>
                    <div className = "cards-container">
                        {allCards}
                        <div className = "add-card-button-container">
                            <button onClick={this.addCard} className = "add-card">+ ADD CARD</button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default CreateSet;