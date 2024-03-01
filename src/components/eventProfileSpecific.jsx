import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Menu } from 'primereact/menu';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { deleteEvent } from '../hooks/deleteEventHook'; // Assuming you have the appropriate hook
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EventProfileSpecific = () => {
  let navigate = useNavigate();

  const { eventId } = useParams(); // Renamed from ticketId
  const [eventData, setEventData] = useState(null); // Renamed from ticketData

  useEffect(() => {
    const fetchEventData = async () => { // Renamed from fetchTicketData
      try {
        const response = await fetch(`http://localhost:8080/event/${eventId}`); // Updated endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setEventData(data);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, [eventId]); // Updated dependency

  const handleDelete = async (e) => {
    e.preventDefault();
    deleteEvent(eventId); // Updated function call
    navigate('/'); // Navigation after deletion
  };

  return (
    <>
      <div>
        {eventData ? (
          <div>
            <h2>Event Details</h2>
            <p>ID: {eventData.id}</p>
            <p>Price: ${eventData.price}</p>
            <p>Availability: {eventData.availability}</p>
            <p>Event ID: {eventData.eventID}</p> {/* Assuming this is the correct property */}
            <p>Event Type: {eventData.eventType}</p> {/* Assuming this is the correct property */}
            <button onClick={() => navigate(`/editevent/${eventData.eventID}`)}>Edit</button> {/* Assuming correct edit route */}
            <button onClick={handleDelete}>Delete</button>
          </div>
        ) : (
          <p>Loading event data...</p>
        )}
      </div>
    </>
  );
};

export default EventProfileSpecific;
