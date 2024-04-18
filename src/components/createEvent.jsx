import React, { useState, useEffect } from 'react';
import { Calendar } from 'primereact/calendar';
import '../styles/createevent.css';

function CreateEvent() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [price, setPrice] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [capacity, setCapacity] = useState('');
  const [eventDate, setEventDate] = useState(null); // Changed from ticketDate to date
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [username, setUsername] = useState(''); // State for the username

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);


  // const handleEventTypeChange = (e) => {
  //   const selectedEventType = e.value;
  //   const selectedEvent = eventTypes.find(event => event.value === selectedEventType);
  //   setEventType(selectedEventType);
  //   setPrice(selectedEvent.price);
  //   setSelectedPrice(selectedEvent.price); // Update selectedPrice when event type changes
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}event`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventName: eventName,
          eventDescription : eventDescription,
          // eventDate: eventDate.toISOString().substring(0, 10), // Use date instead of eventDate
          eventDate: eventDate.toISOString(), // Use date instead of eventDate
          // eventDate: "2019-04-25T14:05:15.953", // Use date instead of eventDate
          eventLocation :eventLocation,
          capacity : parseInt(capacity),
          username: username, // Include username in the request
          
          

        }),
      });
      if (!response.ok) {
        throw new Error('Failed to create event');
      }
      alert('Event created successfully');
      setEventName('');
      setEventDescription('');
      setPrice('');
      setEventLocation('');
      setCapacity('');
      setEventDate(null); // Reset date after successful creation
      setUsername(''); // Clear username field after successful creation
    } catch (error) {
      console.error('Error creating event:', error);
      setErrorMessage('Failed to create event. Please try again.');
    }
  };

  return (
    <div className="container">
      <img className="background-image" src="https://shorturl.at/oqFS2" alt="Background" />
      <h2>Book Online</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Event Type:
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </label>
        <label>
          Event Description:
          <input
            type="text"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Capacity:
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            required
          />
        </label>
        <label>
         Event Location:
          <input
            type="text"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
          />
        </label>
        <div className="calendar-container">
          <label>
            Select Date:
            <Calendar
              value={eventDate}
              onChange={(e) => setEventDate(e.value)}
              dateFormat="yy-mm-dd"
              required
            />
          </label>
        </div>
        <button type="submit">Book Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;
