import React from 'react';

const Header = () => {
    return (
        <div>
            <section id="main">
                <nav>
                    <a href="#" className="logo">
                        <img src="images/logo.png" alt='failed to load :( reload the page' />
                    </a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="nav-icon"></span>
                    </label>
                    <ul className="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#recent">Recent</a></li>
                        <li><a href="#client">Client</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <a href="#" className="hey">Say Hi!</a>
                </nav>
            </section>
        </div>
    );
};

export default Header;