import React from 'react';



class NewCardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            term: '',
            definition: ''
        }
        this.timerId = null;
        this.handleDelete = this.handleDelete.bind(this);

    }

    componentDidMount() {
        this.setState({id: this.props.id})
        this.setState({term: this.props.term});
        this.setState({definition: this.props.definition});
    }


    debouncedUpdate(field,value) {
        this.setState({[field]: value});
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.timerId = setTimeout(() => {
            this.props.updateCard(this.state)
        },500)

    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteCard(this.props.id);
    }
    
    
    render () {
        return (
            <div className = "new-card-container">
                <div className = "new-card-header">
                    <div className = "new-card-number">{this.props.count} - FOR TESTING CARD # {this.state.id}</div>
                    <div className = "new-card-formatting-buttons">
                        <button className="inactive"><i className="fa fa-font" aria-hidden="true"></i></button>
                        <button className="inactive paint"><i className="fa fa-paint-brush" aria-hidden="true"></i></button>
                        <button className="inactive"><i className="fa fa-microphone" aria-hidden="true"></i></button>
                        <button className="inactive"><i className="fa fa-plus-square" aria-hidden="true"></i></button>
                    </div>
                    <div className = "new-card-organize-buttons">
                        <button className="inactive"><i className="fa fa-align-justify" aria-hidden="true"></i></button>
                        <button onClick={this.props.authorized ? this.handleDelete : null}><i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div className = "new-card-content">
                    <div className="term-container">
                        <div className = "term-input-container">
                            <input onChange = {this.props.authorized ? ({target: {value}} ) => this.debouncedUpdate("term",value) : null} type="text" value={this.state.term || ''}/>
                        </div>
                        <div className = "labels-container">
                            <div className="input-label">TERM</div>
                            <div className="choose-language-label"><a className = "inactive" href="#">CHOOSE LANGUAGE</a></div>
                        </div>
                    </div>
                    <div className="definition-container">
                    <div className = "definition-input-container">
                            <input onChange = {this.props.authorized ? ({target: {value}} ) => this.debouncedUpdate("definition",value) : null} type="text" value={this.state.definition || ''}/>
                        </div>
                    <div className = "labels-container">
                        <div className="input-label">DEFINITION</div>
                        <div className="choose-language-label"><a className = "inactive" href="#">CHOOSE LANGUAGE</a></div>
                    </div>
                    </div>
                    <div className="image-drop-container">
                        <button className="inactive">
                            <i className="fa fa-file-image" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
    )}
}

export default NewCardForm;