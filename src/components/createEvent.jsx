import React, { useState, useEffect } from 'react';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown'; // Import Dropdown component
import '../styles/createevent.css';

function CreateEvent() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [capacity, setCapacity] = useState('');
  const [eventDate, setEventDate] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [displayDialog, setDisplayDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!eventName || !eventDescription || !eventLocation || !capacity || !eventDate) {
      setErrorMessage('Please fill in all fields.');
      setDisplayDialog(true);
      return;
    }

    const parsedCapacity = parseInt(capacity);
    if (isNaN(parsedCapacity) || parsedCapacity <= 0) {
      setErrorMessage('Capacity should be a positive number.');
      setDisplayDialog(true);
      return;
    }

    try {
      const response = await fetch(`${baseUrl}event`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventName,
          eventDescription,
          eventDate: eventDate.toISOString(),
          eventLocation,
          capacity: parsedCapacity,
          username,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to create event');
      }
      setDisplayDialog(true);
      setDialogMessage('Event created successfully');
      setEventName('');
      setEventDescription('');
      setEventLocation('');
      setCapacity('');
      setEventDate(null);
      setUsername('');
    } catch (error) {
      console.error('Error creating event:', error);
      setErrorMessage('Failed to create event. Please try again.');
      setDisplayDialog(true);
      setDialogMessage(errorMessage);
    }
  };

  const dialogFooter = (
    <div>
      <Button label="OK" icon="pi pi-check" onClick={() => setDisplayDialog(false)} />
    </div>
  );

  // Define location options with park names
  const locationOptions = [
    { label: 'Safari Zone', value: 'Safari Zone' },
    { label: 'Aquatic Pavilion', value: 'Aquatic Pavilion' },
    { label: 'Bird Aviary', value: 'Bird Aviary' },
    { label: 'Primate Enclosure', value: 'Primate Enclosure' },
    { label: 'Central Park', value: 'Central Park' },
    { label: 'Golden Gate Park', value: 'Golden Gate Park' },
    { label: 'Hyde Park', value: 'Hyde Park' },
  ];

  return (
    <div className="container">
      <img className="background-image" src="https://shorturl.at/oqFS2" alt="Background" />
      <h2>Book Online</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          {/* Username: */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            hidden={true}
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
        <div>
          {/* Dropdown for Event Location */}
          <label>Event Location:</label>
          <Dropdown
            value={eventLocation}
            options={locationOptions}
            onChange={(e) => setEventLocation(e.value)}
            placeholder="Select Location"
            required
          />
        </div>
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

        <Dialog
          visible={displayDialog}
          onHide={() => setDisplayDialog(false)}
          header="Message"
          footer={dialogFooter}
        >
          <p>{dialogMessage}</p>
        </Dialog>
      </form>
    </div>
  );
}

export default CreateEvent;
