import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useParams, useNavigate } from 'react-router-dom';
import { Menu } from 'primereact/menu'; // Import Menu component
import '../styles/ticketProfileSpecific.css'; // Import your custom CSS file

const TicketProfileSpecific = () => {
  const navigate = useNavigate();
  const { ticketId } = useParams();
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/ticket/${ticketId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTicketData(data);
      } catch (error) {
        console.error('Error fetching ticket data:', error);
      }
    };

    fetchTicketData();
  }, [ticketId]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/ticket/${ticketId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete ticket');
      }
      navigate('/');
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

  // Menu items for the left sidebar
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
    <div className="ticket-profile-specific-container">
      
      {ticketData ? (
        <Card title="Ticket Details" className="ticket-card">
          <div className='info'>
            <p>ID: {ticketData.id}</p>
            <p>Price: ${ticketData.price}</p>
            <p>Availability: {ticketData.availability}</p>
            <p>Ticket ID: {ticketData.ticketID}</p>
            <p>Ticket Type: {ticketData.ticketType}</p>
          </div>
          <div className="button-group">
            <Button label="Edit" className="p-button-raised p-button-info p-mr-2" onClick={() => navigate(`/editticket/${ticketData.ticketID}`)} />
            <Button label="Delete" className="p-button-raised p-button-danger" onClick={handleDelete} />
          </div>
        </Card>
      ) : (
        <p>Loading ticket data...</p>
      )}
    </div>
    </div>
  );
};

export default TicketProfileSpecific;
