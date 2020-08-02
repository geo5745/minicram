import React from 'react';
import NewCardForm from './new_card_form';
import {merge} from 'lodash';


class CreateSet extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            sets: {id: '', title: '', description: ''},
            cards: []
            }
        
        this.timerId = null;
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
        this.setState({sets: {id: '', title: '', description: ''}});
        this.setState({cards: []});
    }

    debouncedUpdateTitle(value) {
        let set_id = this.state.sets.id;
        let set_description = this.state.sets.description
        this.setState({sets: {id: set_id, title: value, description: set_description}});
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.timerId = setTimeout(() => {
            this.props.updateSet(this.state.sets);
        },500)

    }

    debouncedUpdateDescription(value) {
        let set_id = this.state.sets.id;
        let set_title = this.state.sets.title
        this.setState({sets: {id: set_id, title: set_title, description: value}});
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.timerId = setTimeout(() => {
            this.props.updateSet(this.state.sets);
        },500)

    }


    render() {
        const allCards = this.state.cards.map((card,i) => 
                <NewCardForm 
                    count={i+1} 
                    id={card.id} 
                    key={card.id} 
                    term={card.term} 
                    definition={card.definition} 
                    deleteCard={this.props.deleteCard}
                    updateCard={this.props.updateCard}/>);
        return (
            <div className = "create-set-container">
                <div className = "create-set-header-container">
                    <div className = "create-set-header">
                        <div className = "create-set-header-bar">
                            <div className = "create-set-master-text">Create a new study set</div>
                            <button     className = "create-set-header-button">Create</button>
                        </div>
                        <div className ="create-set-messages"><section>FOR TESTING PURPOSES - SET # {this.state.sets.id}. TO VIEW IN EDIT MODE GO TO '/#/set/{this.state.sets.id}/edit'</section></div>
                        <form className = "create-set-header-form">
                            <input onChange = {({target: {value}} ) => this.debouncedUpdateTitle(value)} type="text" value={this.state.sets.title || ''} placeholder='Enter a title, like "Biology - Chapter 22: Evolution"'/>
                            <p>TITLE</p>
                            <input onChange = {({target: {value}} ) => this.debouncedUpdateDescription(value)} type="text" value={this.state.sets.description || ''} placeholder="Add a description..."/>
                            <p>DESCRIPTION</p>
                        </form>
                    </div>
                </div>
                    <div className = "cards-container">
                        {allCards}
                        <div className = "add-card-button-container">
                            <button onClick={()=>this.props.addCard(this.props.sets)} className = "add-card">+ ADD CARD</button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default CreateSet;