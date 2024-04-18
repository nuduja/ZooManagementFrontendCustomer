// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Card } from 'primereact/card';
// import { Menu } from 'primereact/menu';
// import '../styles/eventProfile.css';

// const EventProfile = () => {
//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         const fetchDataAndUpdateState = async () => {
//             try {
//                 const data = await fetchData();
//                 console.log('Fetched data:', data);
//                 if (data) {
//                     setEvents(data);
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchDataAndUpdateState();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://localhost:8080/event');
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             return null;
//         }
//     };

//     // Menu items
//     const items = [
//         { label: 'Profile', icon: 'pi pi-palette', url: '/profile' },
//         { label: 'Booked Events', icon: 'pi pi-link', url: '/eventprofile' },
//         { label: 'Booked Tickets', icon: 'pi pi-home', url: '/ticketprofile' }
//     ];

//     return (
//         <div>
//             <Menu model={items} />
//             {events.map(event => (
//                 <Card key={event.id} title={event.eventType} subTitle={`Price: ${event.price} | Availability: ${event.availability}`} className="event-card">
//                     <div className="p-mb-2">
//                         <Link to={`/eventProfileSpecific/${event.eventID}`} className="p-button p-button-text">
//                             View Details
//                         </Link>
//                     </div>
//                 </Card>
//             ))}
//         </div>
//     );
// };

// export default EventProfile;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Menu } from 'primereact/menu';
import '../styles/eventProfile.css';

const EventProfile = () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchDataAndUpdateState = async () => {
            try {
                const data = await fetchData();
                console.log('Fetched data:', data);
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
            const response = await fetch(`${baseUrl}/event`);
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

    // Menu items
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
                    <Card key={event.id} title={event.eventType} subTitle={`Price: ${event.price} | Availability: ${event.availability}`} className="event-card">
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
