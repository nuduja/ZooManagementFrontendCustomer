import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Menu } from 'primereact/menu';
import '../styles/eventProfile.css';

const EventProfile = () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const username = sessionStorage.getItem('username');
            if (!username) {
                console.error('Username is not available in session storage');
                return;
            }
            console.log('Logged-in username:', username);
            
            const response = await fetch(`${baseUrl}event`);
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            console.log('Fetched data:', data);
    
            const userEvents = data.filter(event => {
                console.log('Checking event:', event);
                console.log('Event username:', event.username);
                console.log('Filtering with username:', username);
                return event.username === username;
            });
            
            console.log('Filtered events:', userEvents);
            setEvents(userEvents);
      
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
        <div>
            <div className="left-sidebar">
                <Menu model={items} />
            </div>
            <div className="event-container">
                {events.map(event => (
                    <Card 
                        key={event.id} 
                        title={event.eventName} 
                        subTitle={
                            <div>
                                <div>Date: {event.eventDate}</div>
                                <div>Event ID: {event.eventID}</div>
                                <div>Capacity: {event.capacity}</div>
                            </div>
                        } 
                        className="event-card"
                    >
                        <div className="p-mb-2">
                            <Link to={`/eventProfileSpecific/${event.eventID}`} className="p-button p-button-text">
                                View Details
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default EventProfile;
