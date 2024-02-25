import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';
import { Menu } from 'primereact/menu'; // Import Menu component
import '../styles/ticketProfile.css'; // Import your custom CSS file

const TicketProfile = () => {
  const [localTickets, setLocalTickets] = useState([]);
  const [foreignTickets, setForeignTickets] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/ticket');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setLocalTickets(data.filter(ticket => ticket.ticketType.includes('Local')));
      setForeignTickets(data.filter(ticket => ticket.ticketType.includes('Foreign')));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Menu items for the left sidebar
  const items = [
    { label: 'Profile', icon: 'pi pi-palette', url: '/profile' },
    { label: 'Booked Events', icon: 'pi pi-link', url: '/eventprofile' },
    { label: 'Booked Tickets', icon: 'pi pi-home', url: '/ticketprofile' }
  ];

  return (
    <div className="ticket-profile-container">
      <div className="left-sidebar">
        <Menu model={items} />
      </div>
      <div className="ticket-section">
        <h3 className="section-title">Local Tickets</h3>
        {localTickets.map(ticket => (
          <Card key={ticket.id} title={ticket.ticketType} subTitle={`Price: ${ticket.price} | Availability: ${ticket.availability}`} className="ticket-card">
            <div className="p-mb-2">
              <Link to={`/ticket/${ticket.ticketID}`} className="p-button p-button-text">
                View Details
              </Link>
            </div>
          </Card>
        ))}
      </div>
      <div className="ticket-section">
        <h3 className="section-title">Foreign Tickets</h3>
        {foreignTickets.map(ticket => (
          <Card key={ticket.id} title={ticket.ticketType} subTitle={`Price: ${ticket.price} | Availability: ${ticket.availability}`} className="ticket-card">
            <div className="p-mb-2">
              <Link to={`/ticket/${ticket.ticketID}`} className="p-button p-button-text">
                View Details
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TicketProfile;
