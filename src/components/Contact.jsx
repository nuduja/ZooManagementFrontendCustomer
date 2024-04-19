import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../styles/contact.css';

const Contact = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic validation
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');
    if (!name || !email || !message) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    emailjs
        .sendForm('service_ee8vgtm', 'template_4rw6m8r', form.current, {
          publicKey: 'zXAlVVivBD7BlgIVm',
        })
        .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
        );
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <h4>Have a question or feedback? Reach out to us!</h4>
      {/*<form onSubmit={handleSubmit}>*/}
      {/*  <div className="p-field">*/}
      {/*    <label htmlFor="name">Your Name:</label>*/}
      {/*    <InputText*/}
      {/*      id="name"*/}
      {/*      name="name"*/}
      {/*      value={formData.name}*/}
      {/*      onChange={handleChange}*/}
      {/*      required*/}
      {/*      placeholder="Enter your name"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className="p-field">*/}
      {/*    <label htmlFor="email">Your Email:</label>*/}
      {/*    <InputText*/}
      {/*      id="email"*/}
      {/*      name="email"*/}
      {/*      value={formData.email}*/}
      {/*      onChange={handleChange}*/}
      {/*      required*/}
      {/*      placeholder="Enter your email"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className="p-field">*/}
      {/*    <label htmlFor="message">Your Message:</label>*/}
      {/*    <InputTextarea*/}
      {/*      id="message"*/}
      {/*      name="message"*/}
      {/*      rows={5}*/}
      {/*      value={formData.message}*/}
      {/*      onChange={handleChange}*/}
      {/*      required*/}
      {/*      placeholder="Enter your message"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <Button type="submit" label="Send Message" />*/}
      {/*</form>*/}
      <form ref={form} onSubmit={sendEmail}>
        <div className="p-field">
          <label htmlFor="name">Name</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="p-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="user_email" required />
        </div>
        <div className="p-field">
          <label htmlFor="message">Message</label>
          <textarea name="message" required />
        </div>
        <Button type="submit" label="Send Message" />
        {errorMessage && <Message severity="error" text={errorMessage} />}
      </form>
    </div>
  );
};

export default Contact;
