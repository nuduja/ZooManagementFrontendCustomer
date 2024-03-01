// import React, { useState } from 'react';
// import { Button } from 'primereact/button';
// import { Message } from 'primereact/message';
// import { Dropdown } from 'primereact/dropdown';
// import '../styles/createEvent.css';

// function CreateEvent() {
//     const [eventType, setEventType] = useState('');
//   const [price, setPrice] = useState('');
//   const [availability, setAvailability] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8080/event', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           EventType: eventType,
//           Price: parseFloat(price),
//           Availability: availability,
//         }),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to create event');
//       }
//       // Optionally, you can handle success response here
//       alert('Event created successfully');
//       // Clear form fields after successful creation
//       setEventType('');
//       setPrice('');
//       setAvailability('');
//     } catch (error) {
//       console.error('Error creating event:', error);
//       setErrorMessage('Failed to create event. Please try again.');
//     }
//   };
//   return (
//     // <div>
//     //   <h2>Book Online</h2>
//     //   {errorMessage && <p>{errorMessage}</p>}
//     //   <form onSubmit={handleSubmit}>
//     //     <label>
//     //       Event Type:
//     //       <input
//     //         type="text"
//     //         value={eventType}
//     //         onChange={(e) => setEventType(e.target.value)}
//     //         required
//     //       />
//     //     </label>
//     //     <label>
//     //       Price:
//     //       <input
//     //         type="number"
//     //         value={price}
//     //         onChange={(e) => setPrice(e.target.value)}
//     //         required
//     //       />
//     //     </label>
//     //     <label>
//     //       Availability:
//     //       <input
//     //         type="text"
//     //         value={availability}
//     //         onChange={(e) => setAvailability(e.target.value)}
//     //         required
//     //       />
//     //     </label>
//     //     <button type="submit">Book Event</button>
//     //   </form>
//     // </div>

//     <div>
//       <header>
//         <h1>Book Event</h1>
//       </header>
//       <section className="cards">
//         <article className="card card--1">
//           <div className="card__info-hover">
//             <svg className="card__like" viewBox="0 0 24 24">
//               <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
//             </svg>
//             <div className="card__clock-info">
//               <svg className="card__clock" viewBox="0 0 24 24">
//                 <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
//               </svg>
//               <span className="card__time">15 min</span>
//             </div>
//           </div>
//           <div className="card__img"></div>
//           <a href="#" className="card_link">
//             <div className="card__img--hover"></div>
//           </a>
//           <div className="card__info">
//             <span className="card__category"> Event 01</span>
//             <h3 className="card__title">Penguin Dance</h3>
//             <span className="dates">Dates <br /><a href="#" className="price" title="price">Rs.5000.00</a></span>
//           </div>
//         </article>
        
// 		<article class="card card--2">
//   <div class="card__info-hover">
//     <svg class="card__like"  viewBox="0 0 24 24">
//     <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
// </svg>
//       <div class="card__clock-info">
//         <svg class="card__clock"  viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
//         </svg><span class="card__time">5 min</span>
//       </div>
    
//   </div>
//   <div class="card__img"></div>
//   <a href="#" class="card_link">
//      <div class="card__img--hover"></div>
//    </a>
//   <div class="card__info">
//     <span class="card__category">Event 02 </span>
//     <h3 class="card__title">Elephant circus</h3>
//     <span class="dates">Dates <br/><a href="#" class="price" title="price">Rs.5000.00</a></span>
//   </div>
// </article>  
  
// <article class="card card--3">
//   <div class="card__info-hover">
//     <svg class="card__like"  viewBox="0 0 24 24">
//       <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
//     </svg>
//     <div class="card__clock-info">
//       <svg class="card__clock"  viewBox="0 0 24 24">
//         <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
//       </svg>
//       <span class="card__time">20 min</span>
//     </div>
//   </div>
//   <div class="card__img"></div>
//   <a href="#" class="card_link">
//     <div class="card__img--hover"></div>
//   </a>
//   <div class="card__info">
//     <span class="card__category">Event 03</span>
//     <h3 class="card__title">Lion Show</h3>
//     <span class="dates">Dates <br/><a href="#" class="price" title="price" >Rs.5000.00</a></span>
//   </div>
// </article>

// <article class="card card--4">
//   <div class="card__info-hover">
//     <svg class="card__like"  viewBox="0 0 24 24">
//       <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
//     </svg>
//     <div class="card__clock-info">
//       <svg class="card__clock"  viewBox="0 0 24 24">
//         <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
//       </svg>
//       <span class="card__time">10 min</span>
//     </div>
//   </div>
//   <div class="card__img"></div>
//   <a href="#" class="card_link">
//     <div class="card__img--hover"></div>
//   </a>
//   <div class="card__info">
//     <span class="card__category">Event 04</span>
//     <h3 class="card__title">Sealion Show</h3>
//     <span class="dates">Dates <br/><a href="#" class="price" title="price">Rs.5000.00</a></span>
//   </div>
// </article>

// <article class="card card--5">
//   <div class="card__info-hover">
//     <svg class="card__like"  viewBox="0 0 24 24">
//       <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
//     </svg>
//     <div class="card__clock-info">
//       <svg class="card__clock"  viewBox="0 0 24 24">
//         <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
//       </svg>
//       <span class="card__time">25 min</span>
//     </div>
//   </div>
//   <div class="card__img"></div>
//   <a href="#" class="card_link">
//     <div class="card__img--hover"></div>
//   </a>
//   <div class="card__info">
//     <span class="card__category">Event 05</span>
//     <h3 class="card__title">Dog Show</h3>
//     <span class="dates">Dates <br/><a href="#" class="price" title="price">Rs.500000</a></span>
//   </div>
// </article>
//       </section>
//     </div>
//   );

// }

// export default CreateEvent;
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Dropdown } from 'primereact/dropdown';
import '../styles/createticket.css'; // Import your CSS file

function CreateTicket() {
  const [eventType, setEventType] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const eventTypes = [
    { label: 'Local Adult', value: 'Local Adult', price: 10, availability: 100 },
    { label: 'Local Child', value: 'Local Child', price: 5, availability: 50 },
    { label: 'Foreign Adult', value: 'Foreign Adult', price: 20, availability: 75 },
    { label: 'Foreign Child', value: 'Foreign Child', price: 10, availability: 25 }
  ];

  const handleEventTypeChange = (e) => {
    const selectedEventType = e.value;
    const selectedEvent = eventTypes.find(event => event.value === selectedEventType);
    setEventType(selectedEventType);
    setPrice(selectedEvent.price);
    setAvailability(selectedEvent.availability);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          EventType: eventType,
          Price: parseFloat(price),
          Availability: availability,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to create event');
      }
      // Optionally, you can handle success response here
      alert('Event created successfully');
      // Clear form fields after successful creation
      setEventType('');
      setPrice('');
      setAvailability('');
    } catch (error) {
      console.error('Error creating event:', error);
      setErrorMessage('Failed to create event. Please try again.');
    }
  };

  return (
    <div>
      <header className="zoo-header">
        <h1>Welcome to Our Zoo</h1>
        <p>Discover the wonders of nature and wildlife at our amazing zoo. Come and experience a day filled with fun, education, and adventure!</p>
        {/* <p>Location: [Your Zoo's Location]</p> */}
        <p>Opening Hours: [9:00 AM - 6:00 PM]</p>
        <hr />
      </header>
      <div className="ticket-section-container">
        <div className="ticket-section-background"></div> {/* Background image */}
        <div className="create-ticket-container">
          <h2>Book Online</h2>
          {errorMessage && <Message severity="error" text={errorMessage} />}
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Event Type:</label>
              <Dropdown
                value={eventType}
                options={eventTypes}
                onChange={handleEventTypeChange}
                optionLabel="label"
                placeholder="Select an Event Type"
                className="zoo-dropdown"
              />
            </div>
            <div className="input-container">
              <label>Price:</label>
              <input
                type="text"
                value={price}
                disabled
                className="zoo-input"
              />
            </div>
            <div className="input-container">
              <label>Availability:</label>
              <input
                type="text"
                value={availability}
                disabled
                className="zoo-input"
              />
            </div>
            <Button label="Book Event" type="submit" className="zoo-button" />
          </form>
        </div>
      </div>
      <div className="additional-content">
        <h2>Explore Our Zoo</h2>
        <p>Take a virtual tour of our zoo and discover our amazing attractions:</p>
        <ul>
          <li>Rainforest Pavilion</li>
          <li>Safari Zone - Meet the Big Cats</li>
          <li>Aquatic Adventure Aquarium</li>
          <li>Desert Discovery</li>
        </ul>
      </div>
    </div>
  );
}

export default CreateTicket;
