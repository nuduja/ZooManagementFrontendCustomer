import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EventProfile = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchDataAndUpdateState = async () => {
            try {
                const data = await fetchData();
                if (data) {
                    setEvents(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataAndUpdateState();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/event');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    };

    return (
        <div>
            {events.map(event => (
                <div key={event.id}>
                    <Link to={`/event/${event.id}`}>
                        {event.eventType} - {event.price} - {event.availability}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default EventProfile;
