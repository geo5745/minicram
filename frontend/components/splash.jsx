import React from 'react';


class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageNumber:1,
            opacityClass: 'opaque',
            growBarClass: '',
            wiseWordsClass: ''

        }
        
    }

    componentDidMount() {
        setTimeout(()=>this.setState({growBarClass: 'full', wiseWordsClass: 'motion'}),50);
        this.updateImage();
    }

    componentDidUpdate() {
        
    }

    

    updateImage() {
        setInterval(()=>{
            this.setState({opacityClass: '', growBarClass:'', wiseWordsClass: ''});
            setTimeout(() => this.setState({opacityClass: 'opaque', growBarClass:'full', wiseWordsClass: 'motion'}),50);
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

        const wiseWords = ["",'"Is this book up-side-down?" students','"I will just wing it tomorrow" students','"My parents will bribe the admissions office" students'];

        return (
            <div className = "splash">
                <div className = "splash-first-row">
                    <div className="splash-slogan">
                        <div className = "slogan-container">
                            <div className="main-slogan">Become your most unstoppable self</div>
                            <div className="sub-slogan">Master any subject, one success at a time</div>
                            <div className="get-started-button-container"><button onClick={()=>this.props.openSignup()} className="get-started-button">Get started</button></div>
                            <div className="slogan-sub-links">
                                <div><a>I'm a teacher</a></div>
                                <div><a>I'm a parent</a></div>
                                <div>&nbsp;</div>
                            </div>
                        </div>
                    </div>
                    <div className="animation-container">
                        <div className={`animation-pictures background-image-${this.state.imageNumber}`} >
                            <div className = {`opacity-rectangle ${this.state.opacityClass}`}></div>
                        </div>
                        <div className="animation-text">
                            <div className="minicram-is-for">minicram is for</div>
                            <div>&nbsp;</div>
                            <div className={`wise-words ${this.state.wiseWordsClass}`}>{wiseWords[this.state.imageNumber]}</div>
                        </div>
                        <div className={`grow-bar ${this.state.growBarClass}`}></div>
                    </div>
                </div>
                <div className = "quizlet-copies"><img src="https://minicram-dev.s3.amazonaws.com/images/splash4.png"/></div>
                <div className = "quizlet-copies"><img src="https://minicram-dev.s3.amazonaws.com/images/splash5.png"/></div>
                <div className = "quizlet-copies"><img src="https://minicram-dev.s3.amazonaws.com/images/splash6.png"/></div>
                <div className = "quizlet-copies"><img src="https://minicram-dev.s3.amazonaws.com/images/splash7.png"/></div>
                <div className = "splash-footer">
                    <div className = "splash-footer-column">
                        <div className =  "splash-footer-column-header">Subjects</div>
                        <div className = "splash-footer-column-topic">Arts and Humanities</div>
                        <div className = "splash-footer-column-topic">Languages</div>
                        <div className = "splash-footer-column-topic">Math</div>
                        <div className = "splash-footer-column-topic">Science</div>
                        <div className = "splash-footer-column-topic">Social Science</div>
                        <div className = "splash-footer-column-topic">Other</div>
                    </div>
                    <div className = "splash-footer-column">
                        <div className =  "splash-footer-column-header">Features</div>
                        <div className = "splash-footer-column-topic">minicram Live</div>
                        <div className = "splash-footer-column-topic">minicram Learn</div>
                        <div className = "splash-footer-column-topic">Diagrams</div>
                        <div className = "splash-footer-column-topic">Flashcards</div>
                        <div className = "splash-footer-column-topic">Mobile</div>
                        <div className = "splash-footer-column-topic">Premium Content</div>
                        <div className = "splash-footer-column-topic">Partnerships</div>
                    </div>
                    <div className = "splash-footer-column">
                    <div className =  "splash-footer-column-header">Help</div>
                        <div className = "splash-footer-column-topic">Sign up</div>
                        <div className = "splash-footer-column-topic">Help Center</div>
                        <div className = "splash-footer-column-topic">Honor Code</div>
                        <div className = "splash-footer-column-topic">Community Guidelines</div>
                        <div className = "splash-footer-column-topic">Students</div>
                        <div className = "splash-footer-column-topic">Teachers</div>
                    </div>
                    <div className = "splash-footer-column">
                    <div className =  "splash-footer-column-header">About</div>
                        <div className = "splash-footer-column-topic">Company</div>
                        <div className = "splash-footer-column-topic">Blog</div>
                        <div className = "splash-footer-column-topic">Press</div>
                        <div className = "splash-footer-column-topic">Careers</div>
                        <div className = "splash-footer-column-topic">How minicram Works</div>
                        <div className = "splash-footer-column-topic">Advertise</div>
                        <div className = "splash-footer-column-topic">Privacy</div>
                        <div className = "splash-footer-column-topic">Ad and Cookie Policy</div>
                        <div className = "splash-footer-column-topic">Terms</div>
                    </div>
                    <div className = "splash-footer-column">
                    <div className =  "splash-footer-column-header">Language</div>
                        <div className = "splash-footer-column-topic">English (USA #1)</div>
                    </div>
                </div>
                <div className = "splash-hr-container"><div className="splash-hr"></div></div>
                <div className = "twitter-links-container">
                    <div className = "twitter-links">
                        <div><img src="https://minicram-dev.s3.amazonaws.com/images/twitter-links.png"/></div>
                        <div>© 2020 minicram, LLC</div>
                    </div>
                </div>
            </div>
        )}
};

export default Splash;