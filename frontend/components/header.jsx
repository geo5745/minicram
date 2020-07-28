import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="header">
                <nav className="header-nav">
                    <h1 className="header-nav-logo">minicram</h1>
                    <ul className="header-nav-list">
                        <li><a href="#"></a><i className="fa fa-search" aria-hidden="true"></i>  Search</li>
                        <li><a href="#"></a><i className="fa fa-bars" aria-hidden="true"></i>  Browse</li>
                        <li><a href="#"></a><i className="fa fa-clone" aria-hidden="true"></i>  Create</li>
                    </ul>
                </nav>
                <div className="header-buttons">Buttons</div>
            </header>
    )}


}

export default Header;