import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Dropdown } from 'primereact/dropdown';
import "../styles/createticket.css" ;

function CreateTicket() {
  const [ticketType, setTicketType] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const ticketTypes = [
    { label: 'Local Adult', value: 'Local Adult', price: 10, availability: 100 },
    { label: 'Local Child', value: 'Local Child', price: 5, availability: 50 },
    { label: 'Foreign Adult', value: 'Foreign Adult', price: 20, availability: 75 },
    { label: 'Foreign Child', value: 'Foreign Child', price: 10, availability: 25 }
  ];

  const handleTicketTypeChange = (e) => {
    const selectedTicketType = e.value;
    const selectedTicket = ticketTypes.find(ticket => ticket.value === selectedTicketType);
    setTicketType(selectedTicketType);
    setPrice(selectedTicket.price);
    setAvailability(selectedTicket.availability);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          TicketType: ticketType,
          Price: parseFloat(price),
          Availability: availability,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to create ticket');
      }
      // Optionally, you can handle success response here
      alert('Ticket created successfully');
      // Clear form fields after successful creation
      setTicketType('');
      setPrice('');
      setAvailability('');
    } catch (error) {
      console.error('Error creating ticket:', error);
      setErrorMessage('Failed to create ticket. Please try again.');
    }
  };

  return (
    <div>
      <header className="zoo-header">
        <h1>Welcome to Our Zoo</h1>
        <p>Discover the wonders of nature and wildlife at our amazing zoo. Come and experience a day filled with fun, education, and adventure!</p>
        <p>Location: [Your Zoo's Location]</p>
        <p>Opening Hours: [Your Zoo's Opening Hours]</p>
        <hr />
      </header>
      <div className="ticket-section-container">
        <div className="ticket-section-background"></div> {/* Background image */}
        <div className="create-ticket-container">
          <h2>Book Online</h2>
          {errorMessage && <Message severity="error" text={errorMessage} />}
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Ticket Type:</label>
              <Dropdown
                value={ticketType}
                options={ticketTypes}
                onChange={handleTicketTypeChange}
                optionLabel="label"
                placeholder="Select a Ticket Type"
                className="zoo-dropdown"
              />
            </div>
            <div className="input-container">
              <label>Price:</label>
              <InputText
                value={price}
                disabled
                className="zoo-input"
              />
            </div>
            <div className="input-container">
              <label>Availability:</label>
              <InputText
                value={availability}
                disabled
                className="zoo-input"
              />
            </div>
            <Button label="Buy Tickets" type="submit" className="zoo-button" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
