import React from 'react';


class Create extends React.Component{
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        if (!this.props.session.id) this.props.openProtected();
    }

    componentWillUnmount() {
        this.props.closeProtected();
    }


    render() {
        return (
            <p>Create Auth Route</p>
        )
    }
}

export default Create;