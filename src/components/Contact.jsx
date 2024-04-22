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

    
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');
    if (!name || !email || !message) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    emailjs
        .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
            () => {
              console.log('SUCCESS!');
              form.current.reset();
              setErrorMessage('');

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
      <form ref={form} onSubmit={sendEmail}>
        <div className="p-field">
          <label htmlFor="name">Name</label>
          <InputText type="text" name="user_name" required />
        </div>
        <div className="p-field">
          <label htmlFor="email">Email</label>
          <InputText type="email" name="user_email" required />
        </div>
        <div className="p-field">
          <label htmlFor="message">Message</label>
          <InputTextarea name="message" required />
        </div>
        <Button type="submit" label="Send Message" />
        {errorMessage && <Message severity="error" text={errorMessage} />}
      </form>
    </div>
  );
};

export default Contact;