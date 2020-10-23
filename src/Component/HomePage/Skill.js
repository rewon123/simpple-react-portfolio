import React from 'react';

const Skill = () => {
    return (
        <div>
            <section id="skills">
                <div className="skill-text">
                    <div className="skill-heading">
                        <span>My Skills</span>
                        <h2>My Experties</h2>
                    </div>
                    <div className="s-box-container">
                        <div className="skill-box">
                            <div className="s-box-icon">
                                <i className="fab fa-html5"></i>
                            </div>
                            <div className="s-box-text">
                                <strong>Hyper Text Markup Language(HTML)</strong>
                                <p>I have 3 years experience in HTML and i completed 100+ HTML project.</p>
                            </div>
                        </div>
                        <div className="skill-box">
                            <div className="s-box-icon">
                                <i className="fab fa-css3-alt"></i>
                            </div>
                            <div className="s-box-text">
                                <strong>Cascading Style Sheets(CSS)</strong>
                                <p>I have 3 years experience in CSS and i completed 100+ CSS project.</p>
                            </div>
                        </div>
                        <div className="skill-box">
                            <div className="s-box-icon">
                                <i className="fab fa-js-square"></i>
                            </div>
                            <div className="s-box-text">
                                <strong>JavaScript(Js)</strong>
                                <p>I have 3 years experience in JavaScript and i completed 100+ Js project.</p>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="skill-img">
                    <img src="images/skill2.png" alt='failed to load :( reload the page' />
                </div>
            </section>
        </div>
    );
};

export default Skill;