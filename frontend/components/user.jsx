import React from 'react';
import UserSetIndexItem from './user_set_index_item';


class User extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            sets: []
        }

    }

    componentDidMount() {
        this.props.fetchSetCollection(this.props.session);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.sets !== this.props.sets) {
            this.setState({sets: this.props.sets});
        }
    }

    //componentWillUnmount() {}

    render() {
        const allUserSetItems = this.state.sets.map(set => <UserSetIndexItem key={set.id} id={set.id} title={set.title} card_count={set.card_count}/>)
        return (
            <div className = "user-container">
                <div className="sidebar">
                    <button><i className="fa fa-home" aria-hidden="true"></i> Home</button>
                    <button><i className="fa fa-book" aria-hidden="true"></i> Premium Content</button>
                    <button><i className="fa fa-gift" aria-hidden="true"></i> Refer a Friend</button>
                    <button><i className="fa fa-cog" aria-hidden="true"></i> Settings</button>
                </div>
                <div className = "user-content">
                    <div className = "user-header">
                        <div className = "user-info-row">
                            <div className = "user-icon-container">
                                <div className="user-icon"></div>
                            </div>
                            <div className = "user-info-container">
                                <div className = "user-username">{this.props.user.username}</div>
                                <div className = "user-mininav">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Recent</td>
                                                <td>Created</td>
                                                <td>Studied</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "user-sets">
                        <div className = "user-divider-container">
                            <div className = "user-sets-time-elapsed">SETS CREATED BY YOU</div>
                            <div className = "hr-container"><hr className="user-sets-divider"/></div>
                        </div>
                        {allUserSetItems}
                    </div>
                </div> 
            </div>
        )
    }
}

export default User;