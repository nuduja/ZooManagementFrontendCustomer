import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import '../styles/createticket.css';

function CreateTicket() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [ticketType, setTicketType] = useState('');
  const [price, setPrice] = useState('');
  const [username, setUsername] = useState('');
  const [ticketDate, setTicketDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const ticketTypes = [
    { label: 'Local Adult', value: 'LOCAL_ADULT', price: 10 },
    { label: 'Local Child', value: 'LOCAL_KID', price: 5 },
    { label: 'Foreign Adult', value: 'FOREIGN_ADULT', price: 30 },
    { label: 'Foreign Child', value: 'FOREIGN_KID', price: 15 }
  ];

  const handleTicketTypeChange = (e) => {
    const selectedTicketType = e.value;
    const selectedTicket = ticketTypes.find(ticket => ticket.value === selectedTicketType);
    setTicketType(selectedTicketType);
    setPrice(selectedTicket.price);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!ticketType || !price || !username || !ticketDate) {
      setErrorMessage('Please fill out all fields.');
      setShowErrorDialog(true);
      return;
    }
  
    try {
      const response = await fetch(`${baseUrl}ticket`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ticketType: ticketType,
          price: parseFloat(price),
          username: username,
          ticketDate: ticketDate.toISOString().substring(0, 10)
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to create ticket');
      }
      setShowSuccessDialog(true);
      setTicketType('');
      setPrice('');
      setUsername('');
      setTicketDate('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error creating ticket:', error);
      setErrorMessage('Failed to create ticket. Please try again.');
      setShowErrorDialog(true);
    }
  };

  const onHideDialog = () => {
    setShowSuccessDialog(false);
    setShowErrorDialog(false);
  };

  return (
    <div className="container">
      <header className="zoo-header">
        <h1>Welcome to Our Zoo</h1>
        <p>Discover the wonders of nature and wildlife at our amazing zoo. Come and experience a day filled with fun, education, and adventure!</p>
        <p>Opening Hours: [9:00 AM - 6:00 PM]</p>
        <hr />
      </header>

      <div className="ticket-section-container">
        <div className="ticket-section-background"></div>
        <div className="create-ticket-container">
          <h2 className='h2'>Book Online</h2>
          {errorMessage && <Message severity="error" text={errorMessage} />}
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label className='t'>Ticket Type:</label>
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
              <label className='t'>Price:</label>
              <input
                type="text"
                value={price}
                disabled
                className="zoo-input"
              />
            </div>
            <div className="input-container">
              <label className='t'>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled
                className="zoo-input"
                required
              />
            </div>
            <div className="input-container">
              <label className='t'>Ticket Date:</label>
              <Calendar
                value={ticketDate}
                onChange={(e) => setTicketDate(e.value)}
                dateFormat="yy-mm-dd"
                className="zoo-input"
                required
              />
            </div>
            <Button label="Buy Tickets" type="submit" className="zoo-button" />
          </form>
        </div>
      </div>

      <div className="additional-content">
        <h3>Explore Our Zoo</h3>
        <p>Take a virtual tour of our zoo and discover our amazing attractions:</p>
        <ul>
          <li>Rainforest Pavilion</li>
          <li>Safari Zone - Meet the Big Cats</li>
          <li>Aquatic Adventure Aquarium</li>
          <li>Desert Discovery</li>
        </ul>
      </div>

      <Dialog
        visible={showSuccessDialog}
        onHide={onHideDialog}
        header="Success"
        className="custom-dialog"
        footer={<Button label="OK" onClick={onHideDialog} />}
      >
        <p>Ticket created successfully</p>
      </Dialog>

      <Dialog
        visible={showErrorDialog}
        onHide={onHideDialog}
        header="Error"
        className="custom-dialog"
        footer={<Button label="OK" onClick={onHideDialog} />}
      >
        <p>{errorMessage}</p>
      </Dialog>
    </div>
  );
}

export default CreateTicket;
