import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../styles/contact.css';

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  //
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission, you can send the formData to backend or do any other actions here
  //   console.log('Form submitted:', formData);
  //   // Reset the form fields after submission
  //   setFormData({ name: '', email: '', message: '' });
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
