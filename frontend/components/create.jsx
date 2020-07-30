import React from 'react';


class Create extends React.Component{
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.openProtected();
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