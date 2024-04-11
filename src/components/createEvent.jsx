import React, { useState } from 'react';

function CreateEvent() {
    const [eventType, setEventType] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          EventType: eventType,
          Price: parseFloat(price),
          Availability: availability,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to create event');
      }
      // Optionally, you can handle success response here
      alert('Event created successfully');
      // Clear form fields after successful creation
      setEventType('');
      setPrice('');
      setAvailability('');
    } catch (error) {
      console.error('Error creating event:', error);
      setErrorMessage('Failed to create event. Please try again.');
    }
  };
  return (
    <div>
      <h2>Book Online</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Event Type:
          <input
            type="text"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label>
          Availability:
          <input
            type="text"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
          />
        </label>
        <button type="submit">Book Event</button>
      </form>
    </div>
  );

}

export default CreateEvent;