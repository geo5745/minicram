import React from 'react';
import NewCardForm from './new_card_form';
import {Link} from 'react-router-dom';
import {merge} from 'lodash';


class CreateSet extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            sets: {id: '', title: '', description: ''},
            cards: [],
            save: true,
            }
        this.timerId = null;
        this.save = true;
        this.authorized = false;
        this.ensureSave = this.ensureSave.bind(this);
    }
    
    componentDidMount() {
        if (!this.props.session.id) this.props.openProtected();
        if (this.props.formType === "edit" && this.props.session.id) this.props.fetchSet(this.props.setId);
        if (this.props.formType === "create" && this.props.session.id) this.props.createSet(this.props.session);
        this.save = this.props.save;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.cards !== this.props.cards && this.props.session.id) {
            this.setState({sets: this.props.sets});
            this.setState({cards: this.props.cards});
            if (this.props.session.id === this.props.sets.user_id) {
                this.authorized = true;
            } else {
                this.authorized = false;
            }
        }
    }

    componentWillUnmount() {
        this.props.closeProtected();
        if (!this.save) {
            this.props.deleteSet(this.state.sets.id);
        }
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

    ensureSave() {
        this.save = true;
    }


    render() {
        let buttonText;
        let headerText;
        let messages;
        if (this.props.formType === "create") {
            buttonText = "Create";
            headerText = "Create a new study set";
        } else {
            buttonText = "Save";
            headerText = "Edit your study set";
        }
        if (this.authorized) {
            messages = <section>FOR TESTING PURPOSES - SET # {this.state.sets.id}. TO VIEW IN EDIT MODE GO TO '/#/set/{this.state.sets.id}/edit'</section>
        } else {
            messages = <section>YOU ARE NOT AUTHORIZED TO EDIT THIS SET, LOG IN AS THE SET CREATOR</section>
        }
        const allCards = this.state.cards.map((card,i) => 
                <NewCardForm 
                    count={i+1} 
                    id={card.id} 
                    key={card.id} 
                    term={card.term} 
                    definition={card.definition} 
                    deleteCard={this.props.deleteCard}
                    updateCard={this.props.updateCard}
                    authorized={this.authorized}/>);
        return (
            <div className = "create-set-container">
                <div className = "create-set-header-container">
                    <div className = "create-set-header">
                        <div className = "create-set-header-bar">
                            <div className = "create-set-master-text">{headerText}</div>
                            <Link onClick = {this.ensureSave} to={`/user/${this.props.session.id}`} className = "create-set-header-button">{buttonText}</Link>
                        </div>
                        <div className ="create-set-messages">{messages}</div>
                        <form className = "create-set-header-form">
                            <input onChange = {this.authorized ? ({target: {value}} ) => this.debouncedUpdateTitle(value) : null} type="text" value={this.state.sets.title || ''} placeholder='Enter a title, like "Biology - Chapter 22: Evolution"'/>
                            <p>TITLE</p>
                            <input onChange = {this.authorized ? ({target: {value}} ) => this.debouncedUpdateDescription(value) : null} type="text" value={this.state.sets.description || ''} placeholder="Add a description..."/>
                            <p>DESCRIPTION</p>
                        </form>
                    </div>
                </div>
                    <div className = "cards-container">
                        {allCards}
                        <div className = "add-card-button-container">
                            <button onClick={this.authorized ? ()=>this.props.addCard(this.props.sets) : null} className = "add-card">+ ADD CARD</button>
                        </div>
                        <div className = "create-big-button">
                            <Link onClick = {this.ensureSave} to={`/user/${this.props.session.id}`} className = "create-set-footer-button">{buttonText}</Link>
                        </div> 
                    </div>
            </div>
        )
    }
}

export default CreateSet;