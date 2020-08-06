import React from 'react';


class Splash extends React.Component {
    constructor(props) {
        super(props)

    }

    render () {
        return (
            <div className = "splash">
                <div className = "splash-first-row">
                    <div className="splash-slogan">
                        <div className="main-slogan">Become your most unstoppable self</div>
                        <div className="sub-slogan"></div>
                        <div className="get-started-button-container"></div>
                        <div className="slogan-sub-links"></div>
                    </div>
                    <div className="animation-container">
                        <div className="animation-pictures">
                            <img src="https://minicram-dev.s3.amazonaws.com/images/splash2a.png" />
                        </div>
                        <div className="animation-text"></div>
                    </div>
                </div>
                <div className = "second-row"></div>
                <div className = "footer"></div>
            </div>
        )}
};

export default Splash;