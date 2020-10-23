import React from 'react';
import Client from './Client';
import Contact from './Contact';
import Recent from './Recent';
import Skill from './Skill';

const Home = () => {
    return (
        <div>
            <div className="content">
                <div className="model">
                    <img src="images/model.png" alt='failed to load :( reload the page' />
                </div>
                <div className="main-text">
                    <h1>Hello, I am Rewon</h1>
                    <p>Hey, In this video i am gonna show you how to make a responisve personal website only using HTML and CSS.</p>
                    <a href="#" className="portfolio-btn">See My Portfolio</a>
                </div>
            </div>
            <Skill />
            <Recent />
            <Client />
            <Contact />
        </div>
    );
};

export default Home;