import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';

import './Home.css';

const Home = () => {

    return (
        <div>
            <div className="landing">
                <h1 className="home-phrase-h">Interaction is what makes a competition fun.</h1>
                <div className="home-phrase-p">Let's recreate it !</div>
            </div>
            <div className="signin-buttons">
                <div className="signin">
                    <a href="/api/auth/google"><div className="o-auth-signin google">
                        <div className="signin-img"><img src="/images/search.svg" alt="google-logo"/></div>
                        <p className="o-auth-signin-text">Sign In With Google</p>
                    </div></a>
                </div>
                <div className="signin">
                <a href="/api/auth/github"><div href="/api/auth/github" className="o-auth-signin github">
                        <div className="signin-img"><GitHubIcon /></div>
                        <p className="o-auth-signin-text">Sign In With Github</p>
                    </div></a>
                </div>
            </div>
        </div>
    )
}   

export default Home;