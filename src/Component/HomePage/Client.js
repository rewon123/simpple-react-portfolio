import React from 'react';

const Client = () => {
    return (
        <div>
            <section id="client">
                <div className="client-heading">
                    <span>Comments</span>
                    <h3>Client's Say</h3>
                </div>
                <div className="c-box-container">
                    <div className="client-box">
                        <img src="images/client-1.png" alt='failed to load :( reload the page'  />
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. </p>
                        <a href="#">Read More</a>
                    </div>
                    <div className="client-box">
                        <img src="images/client-2.png"  alt='failed to load :( reload the page' />
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <p>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. </p>
                        <a href="#">Read More</a>
                    </div>
                    <div className="client-box">
                        <img src="images/client-3.png" alt='failed to load :( reload the page'  />
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <p>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. </p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Client;