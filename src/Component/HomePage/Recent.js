import React from 'react';

const Recent = () => {
    return (
        <div>
            <section id="recent">
                <div className="recent-heading">
                    <span>Recent</span>
                    <h3>Recent Doing Project Design</h3>
                </div>
                <div className="recent-img">
                    <img src="images/recent.png" alt='failed to load :( reload the page' />
                </div>
                <a href="#" className="recent-btn">View Design</a>
            </section>
        </div>
    );
};

export default Recent;