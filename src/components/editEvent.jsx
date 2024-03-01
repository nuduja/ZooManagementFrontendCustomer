import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
//import '../styles/EditProfile.css'; // Assuming the CSS file is named EditProfile.css

const EditProfile = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [editedEventData, setEditedEventData] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/event/${eventId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEventData(data);
        setEditedEventData(data); // Initialize edited data with current data
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, [eventId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEventData({ ...editedEventData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/event/${eventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedEventData),
      });
      if (!response.ok) {
        throw new Error('Failed to update event data');
      }
      // Optionally, you can update the state with the updated data
      setEventData(editedEventData);
      alert('Event data updated successfully');
    } catch (error) {
      console.error('Error updating event data:', error);
      alert('Failed to update event data');
    }
  };

  return (
    <div>
      {eventData ? (
        <div>
          <h2>Edit Event Details</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={editedEventData.price}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Availability:
              <input
                type="text"
                name="availability"
                value={editedEventData.availability}
                onChange={handleInputChange}
              />
            </label>
            {/* Add other fields for editing */}
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <p>Loading event data...</p>
      )}
    </div>
  );
};

export default EditProfile;
