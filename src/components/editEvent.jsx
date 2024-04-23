import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { useParams, useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';
import { Menu } from 'primereact/menu';
import '../styles/editEvent.css';

const EditEvent = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [editedEventData, setEditedEventData] = useState({
    eventName: '',
    eventDate: '',
    capacity: '',
    eventLocation: '',
  });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(`${baseUrl}event/${eventId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEventData(data);
        setEditedEventData({
          eventName: data.eventName,
          eventDate: new Date(data.eventDate),
          capacity: data.capacity.toString(),
          eventLocation: data.eventLocation,
        });
      } catch (error) {
        console.error('Error fetching event data:', error);
        setShowErrorDialog(true);
      }
    };

    fetchEventData();
  }, [baseUrl, eventId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEventData({ ...editedEventData, [name]: value });
  };

  const handleDateChange = (e) => {
    const selectedDate = e.value;
    setEditedEventData(prevData => ({
      ...prevData,
      eventDate: selectedDate.toISOString().substring(0, 10),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}event/updatebyeventid/${eventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedEventData),
      });
      if (!response.ok) {
        throw new Error('Failed to update event data');
      }
      setShowSuccessDialog(true);
    } catch (error) {
      console.error('Error updating event data:', error);
      setShowErrorDialog(true);
    }
  };

  const onHideDialog = () => {
    setShowSuccessDialog(false);
    setShowErrorDialog(false);
    navigate(-1);
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
      <div className="edit-event-container">
        <h2>Edit Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="p-field">
            <label htmlFor="eventName">Event Name:</label>
            <InputText
              id="eventName"
              name="eventName"
              value={editedEventData.eventName}
              onChange={handleInputChange}
            />
          </div>
          <div className="p-field">
            <label htmlFor="eventDate">Event Date:</label>
            <Calendar
              id="eventDate"
              name="eventDate"
              value={new Date(editedEventData.eventDate)}
              onChange={handleDateChange}
              dateFormat="yy-mm-dd"
              showIcon
            />
          </div>
          <div className="p-field">
            <label htmlFor="capacity">Capacity:</label>
            <InputText
              id="capacity"
              name="capacity"
              value={editedEventData.capacity}
              onChange={handleInputChange}
            />
          </div>
          <div className="p-field">
            <label htmlFor="eventLocation">Location:</label>
            <InputText
              id="eventLocation"
              name="eventLocation"
              value={editedEventData.eventLocation}
              onChange={handleInputChange}
            />
          </div>
          <Button type="submit" label="Update" className="p-button-raised p-button-success" />
        </form>

        <Dialog
          visible={showSuccessDialog}
          onHide={onHideDialog}
          header="Success"
          footer={<Button label="OK" onClick={onHideDialog} />}
        >
          <p>Event data updated successfully!</p>
        </Dialog>

        <Dialog
          visible={showErrorDialog}
          onHide={onHideDialog}
          header="Error"
          footer={<Button label="OK" onClick={onHideDialog} />}
        >
          <p>Failed to update event data</p>
        </Dialog>
      </div>
    </div>
  );
};

export default EditEvent;
