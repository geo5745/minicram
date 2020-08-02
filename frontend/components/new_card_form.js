import React from 'react';



class NewCardForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);

    }


    handleDelete(e) {
        e.preventDefault();
        this.props.deleteCard(this.props.id);
    }
    
    
    render () {
        return (
            <div className = "new-card-container">
                <div className = "new-card-header">
                    <div className = "new-card-number">{this.props.count}</div>
                    <div className = "new-card-formatting-buttons">
                        <button className="inactive"><i className="fa fa-font" aria-hidden="true"></i></button>
                        <button className="inactive paint"><i className="fa fa-paint-brush" aria-hidden="true"></i></button>
                        <button className="inactive"><i className="fa fa-microphone" aria-hidden="true"></i></button>
                        <button className="inactive"><i className="fa fa-plus-square" aria-hidden="true"></i></button>
                    </div>
                    <div className = "new-card-organize-buttons">
                        <button className="inactive"><i className="fa fa-align-justify" aria-hidden="true"></i></button>
                        <button onClick={this.handleDelete}><i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div className = "new-card-content">
                    <div className="term-container">
                        <div className = "term-input-container">
                            <input type="text" value={this.props.term || ''}/>
                        </div>
                        <div className = "labels-container">
                            <div className="input-label">TERM</div>
                            <div className="choose-language-label"><a className = "inactive" href="#">CHOOSE LANGUAGE</a></div>
                        </div>
                    </div>
                    <div className="definition-container">
                    <div className = "definition-input-container">
                            <input type="text" value={this.props.definition || ''}/>
                        </div>
                    <div className = "labels-container">
                        <div className="input-label">DEFINITION</div>
                        <div className="choose-language-label"><a className = "inactive" href="#">CHOOSE LANGUAGE</a></div>
                    </div>
                    </div>
                    <div className="image-drop-container">
                        <button>
                            <i className="fa fa-file-image" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
    )}
}

export default NewCardForm;