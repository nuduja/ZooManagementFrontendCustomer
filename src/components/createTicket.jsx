import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Dropdown } from 'primereact/dropdown';
import '../styles/createticket.css'; // Import your CSS file

function CreateTicket() {
  const [ticketType, setTicketType] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
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
    
    <div className="container">
      {/* <!-- #CodePenChallenge: Lightness --> */}

{/* <div class="overlay"></div>

<div class="text">
	<div class="wrapper">
		<div id="Z" class="letter">Z</div>
		<div class="shadow">Z</div>
	</div>
	<div class="wrapper">
		<div id="O" class="letter">O</div>
		<div class="shadow">O</div>
	</div>
	<div class="wrapper">
		<div id="O" class="letter">O</div>
		<div class="shadow">O</div>
	</div>
	<div class="wrapper">
		<div id="T" class="letter">T</div>
		<div class="shadow">T</div>
	</div>
	<div class="wrapper">
		<div id="O" class="letter">O</div>
		<div class="shadow">O</div>
	</div>
	<div class="wrapper">
		<div id="P" class="letter">P</div>
		<div class="shadow">P</div>
	</div>
	<div class="wrapper">
		<div id="I" class="letter">I</div>
		<div class="shadow">I</div>
	</div>
	<div class="wrapper">
		<div id="A" class="letter">A</div>
		<div class="shadow">A</div>
	</div>
	<div class="wrapper">
		<div id="Stwo" class="letter">S</div>
		<div class="shadow">S</div>
	</div>
</div> */}
      <header className="zoo-header">
        
        <h1>Welcome to Our Zoo</h1>
        <p>Discover the wonders of nature and wildlife at our amazing zoo. Come and experience a day filled with fun, education, and adventure!</p>
        {/* <p>Location: [Your Zoo's Location]</p> */}
        <p>Opening Hours: [9:00 AM - 6:00 PM]</p>
        <hr />
      </header>
      
      <div className="blob">
    </div>
      <div className="ticket-section-container">
        <div className="ticket-section-background"></div> {/* Background image */}
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
              <label className='t'>Availability:</label>
              <input
                type="text"
                value={availability}
                disabled
                className="zoo-input"
              />
            </div>
            <Button label="Buy Tickets" type="submit" className="zoo-button" />
          </form>
        </div>
      </div>
      {/* <div className="blob">
    </div> */}
      
      
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
      
      
    </div>
  );
}

export default CreateTicket;
