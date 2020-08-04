import React from 'react';
import { Link } from 'react-router-dom';



const UserSetIndexItem = (props) => (
    <div className = "set-link-container">
        <Link to={`/set/${props.id}/flashcards`} className = "set-link">
            <div className = "set-link-num-cards">{props.card_count} Terms</div>
            <div className = "set-link-title">{props.title}</div> 
        </Link>
    </div>

);

export default UserSetIndexItem;