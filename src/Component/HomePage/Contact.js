import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        fetch('http://localhost:8080/addComment',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('We have recieved your email')
            }
        })
    };


    return (
        <div>
            <section id="contact">
                <img src="images/contact.svg" alt='failed to load :( reload the page'/>
                <h3>Get The Best Project Estimation</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="contact-input">

                        <input type="email" name='email' placeholder="Example@gmail.com" ref={register({ required: true })} />
                        <button type="submit">Submit</button>

                    </div>
                </form>
            </section>
            <footer>
                <p>Rizwan Rashid, Ltd Consumer Website</p>
                <p>Copyright 2020 - Rizwan rashid</p>
            </footer>
        </div>
    );
};

export default Contact;