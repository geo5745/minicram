import React from 'react';


class User extends React.Component{
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        //if (!this.props.session.id) this.props.openProtected();
    }

    componentWillUnmount() {
        //this.props.closeProtected();
    }


    render() {
        return (
            <div className="sidebar">
                <button>Home</button>
                <button>Premium Content</button>
                <button>Refer a Friend</button>
                <button>Settings</button>
            </div>
            
        )
    }
}

export default User;