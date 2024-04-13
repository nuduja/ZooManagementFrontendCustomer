import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import '../styles/ticketProfile.css';

const TicketProfile = () => {
  const [localTickets, setLocalTickets] = useState([]);
  const [foreignTickets, setForeignTickets] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const username = sessionStorage.getItem('loggedUserDetails');
      if (!username) {
        console.error('Username is not available in session storage');
        return;
      }
      console.log('Logged-in username:', username);
      
      const response = await fetch(`http://localhost:8080/api/v1/ticket`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log('Fetched data:', data);

      const userTickets = data.filter(ticket => ticket.username === username);
      
      setLocalTickets(userTickets.filter(ticket => ticket.ticketType.includes('LOCAL')));
      setForeignTickets(userTickets.filter(ticket => ticket.ticketType.includes('FOREIGN')));
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
        <h3 className="section-ticket">Local Tickets</h3>
        {localTickets.map(ticket => (
          <Card key={ticket.id} title={ticket.ticketType} subTitle={`Price: ${ticket.price} | Date: ${ticket.ticketDate} `} className="ticket-card">
            <div className="p-mb-2">
              <Link to={`/ticket/${ticket.ticketID}`} className="p-button p-button-text">
                View Details
              </Link>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="ticket-section">
        <h3 className="section-ticket">Foreign Tickets</h3>
        {foreignTickets.map(ticket => (
          <Card key={ticket.id} title={ticket.ticketType} subTitle={`Price: ${ticket.price} | Date: ${ticket.ticketDate}`} className="ticket-card">
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
