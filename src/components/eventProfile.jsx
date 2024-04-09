// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Card } from 'primereact/card';
// // import { Button } from 'primereact/button';
// // // import '../styles/eventProfile.css';

// // const EventProfile = () => {
// //   const [events, setEvents] = useState([]);

// //   useEffect(() => {
// //     const fetchDataAndUpdateState = async () => {
// //       try {
// //         const response = await fetch('http://localhost:8080/event');
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         const data = await response.json();
// //         setEvents(data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchDataAndUpdateState();
// //   }, []);
// //   export default function AdvancedDemo() {
// //     const header = (
// //         <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
// //     );
// //     const footer = (
// //         <>
// //             <Button label="Save" icon="pi pi-check" />
// //             <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
// //         </>
// //     );
// //   return (
// //     <div className="card flex justify-content-center">
// //     <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
// //         <p className="m-0">
// //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
// //             numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
// //         </p>
// //     </Card>
// // </div>
    
// //   );
// // };

// // export default EventProfile;
// import React, { useEffect, useState } from 'react';
// import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';
// import { Menu } from 'primereact/menu';
// import '../styles/eventProfile.css';

// const EventProfile = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchDataAndUpdateState = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/event');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setEvents(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchDataAndUpdateState();
//   }, []);

//   const header = (
//     <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
//   );

//   const footer = (
//     <>
//       <Button label="Edite" icon="pi pi-check" />
//       <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
//     </>
//   );

//   const items = [
//     { label: 'Profile', icon: 'pi pi-palette', url: '/profile' },
//     { label: 'Booked Events', icon: 'pi pi-link', url: '/eventprofile' },
//     { label: 'Booked Tickets', icon: 'pi pi-home', url: '/ticketprofile' },
//   ];
//   return (
//     <div className="ticket-profile-container">
//       <div className="left-sidebar">
//         <Menu model={items} />
//       </div>
//       <div className="ticket-section">
//         <h3 className="section-title">Local Tickets</h3>
//         {localTickets.map(ticket => (
//           <Card key={ticket.id} title={ticket.ticketType} subTitle={`Price: ${ticket.price} | Availability: ${ticket.availability}`} className="ticket-card">
//             <div className="p-mb-2">
//               <Link to={`/ticket/${ticket.ticketID}`} className="p-button p-button-text">
//                 View Details
//               </Link>
//             </div>
//           </Card>
//         ))}
//       </div>
//       <div className="ticket-section">
//         <h3 className="section-title">Foreign Tickets</h3>
//         {foreignTickets.map(ticket => (
//           <Card key={ticket.id} title={ticket.ticketType} subTitle={`Price: ${ticket.price} | Availability: ${ticket.availability}`} className="ticket-card">
//             <div className="p-mb-2">
//               <Link to={`/ticket/${ticket.ticketID}`} className="p-button p-button-text">
//                 View Details
//               </Link>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };
// //   return (
// //     <div className="card flex justify-content-center">
// //       {/* First Card */}
// //       <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
// //         <p className="m-0">
// //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
// //           numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
// //         </p>
// //       </Card>

// //     </div>
// //   );
// // };

// export default EventProfile;
import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Link } from 'react-router-dom';
import '../styles/eventProfile.css';

const EventProfile = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      try {
        const response = await fetch('http://localhost:8080/event');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndUpdateState();
  }, []);

  const header = (
    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
  );

  const footer = (
    <>
      <Button label="Edite" icon="pi pi-check" />
      <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
    </>
  );

  const items = [
    { label: 'Profile', icon: 'pi pi-palette', url: '/profile' },
    { label: 'Booked Events', icon: 'pi pi-link', url: '/eventprofile' },
    { label: 'Booked Tickets', icon: 'pi pi-home', url: '/ticketprofile' },
  ];
  return (
    <div className="event-profile-container">
      <div className="left-sidebar">
        <Menu model={items} />
      </div>
      <div className="event-section">
        <h3 className="section-title">Local Events</h3>
        {events.map(event => (
          <Card key={event.id} title={event.eventType} subTitle={`Price: ${event.price} | Availability: ${event.availability}`} className="event-card">
            <div className="p-mb-2">
              <Link to={`/event/${event.eventID}`} className="p-button p-button-text">
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
