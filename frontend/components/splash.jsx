import React from 'react';


class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageNumber:1,
            opacityClass: 'opaque'

        }
        
    }

    componentDidMount() {
        this.updateImage();
    }

    componentDidUpdate() {
        
    }

    updateImage() {
        setInterval(()=>{
            this.setState({opacityClass: ''});
            setTimeout(() => this.setState({opacityClass: 'opaque'}),50);
            let num = this.state.imageNumber;
            if (num === 3) {
                this.setState({imageNumber: 1});
            } else {
                num = num + 1;
                this.setState({imageNumber: num});
            }
        } ,5000);
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
                        <div className={`animation-pictures background-image-${this.state.imageNumber}`} >
                            <div className = {`opacity-rectangle ${this.state.opacityClass}`}></div>
                            <div className="grow-full"></div>
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