import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useParams, useNavigate } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import '../styles/eventProfileSpecific.css'; 


const EventProfileSpecific = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const { eventId } = useParams(); 
  const [eventData, setEventData] = useState(null); 

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(`${baseUrl}event/${eventId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEventData(data);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, [eventId]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${baseUrl}event/${eventId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete event');
      }
      navigate(-1);
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const items = [
    { label: 'Profile', icon: 'pi pi-palette', url: '/profile' },
    { label: 'Booked Events', icon: 'pi pi-link', url: '/eventprofile' },
    { label: 'Booked Tickets', icon: 'pi pi-home', url: '/ticketprofile' }
  ];

  return (
    <div>
      <div className="left-sidebar">
        <Menu model={items} />
        </div>
    <div className="event-profile-specific-container"> 

      {eventData ? (
        <Card title="Event Details" className="event-card"> 
          <div>
            <p>ID: {eventData.id}</p> 
            <p>Event Name: {eventData.eventName}</p>
            <p>Event ID: {eventData.eventID}</p> 
            <p>Price: ${eventData.price}</p>
            <p>Date: {eventData.eventDate}</p>
            <p>Capacity: {eventData.capacity}</p>
            <p>Location: {eventData.eventLocation}</p>
          </div>
          <div className="button-group">
            <Button label="Edit" className="p-button-raised p-button-info p-mr-2" onClick={() => navigate(`/editevent/${eventData.eventID}`)} /> {/* Updated to edit event */}
            <Button label="Delete" className="p-button-raised p-button-danger" onClick={handleDelete} />
            </div>
         </Card>
       ) : (
         <p>Loading event data...</p>
       )}
  </div>
  </div>
  );
};

export default EventProfileSpecific;



