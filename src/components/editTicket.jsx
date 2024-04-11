import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useParams } from 'react-router-dom';
import '../styles/editTicket.css'; // Import your custom CSS file
import { Menu } from 'primereact/menu'; // Import Menu component

const EditProfile = () => {
  const { ticketId } = useParams();
  const [ticketData, setTicketData] = useState(null);
  const [editedTicketData, setEditedTicketData] = useState(null);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/ticket/${ticketId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTicketData(data);
        setEditedTicketData(data); // Initialize edited data with current data
      } catch (error) {
        console.error('Error fetching ticket data:', error);
      }
    };

    fetchTicketData();
  }, [ticketId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTicketData({ ...editedTicketData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/ticket/${ticketId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedTicketData),
      });
      if (!response.ok) {
        throw new Error('Failed to update ticket data');
      }
      // Optionally, you can update the state with the updated data
      setTicketData(editedTicketData);
      alert('Ticket data updated successfully');
    } catch (error) {
      console.error('Error updating ticket data:', error);
      alert('Failed to update ticket data');
    }
  };
  const items = [
    { label: 'Profile', icon: 'pi pi-palette', url: '/profile' },
    { label: 'Booked Events', icon: 'pi pi-link', url: '/eventprofile' },
    { label: 'Booked Tickets', icon: 'pi pi-home', url: '/ticketprofile' }
  ];

  return (
    <div><div className="left-sidebar">
    <Menu model={items} />
  </div>
    <div className="edit-profile-container">
      
      {ticketData ? (
        <div>
          <h2>Edit Ticket Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="p-field">
              <label htmlFor="price">Price:</label>
              <InputText
                id="price"
                name="price"
                value={editedTicketData.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="p-field">
              <label htmlFor="availability">Availability:</label>
              <InputText
                id="availability"
                name="availability"
                value={editedTicketData.availability}
                onChange={handleInputChange}
              />
            </div>
            {/* Add other fields for editing */}
            <Button type="submit" label="Submit" className="p-button-raised p-button-success" />
          </form>
        </div>
      ) : (
        <p>Loading ticket data...</p>
      )}
    </div>
    </div>
  );
};

export default EditProfile;
