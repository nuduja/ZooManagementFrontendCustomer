import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Navigate, useParams } from 'react-router-dom';
import '../styles/editTicket.css'; 
import { Menu } from 'primereact/menu'; 
import { Dropdown } from 'primereact/dropdown'; 
import { Calendar } from 'primereact/calendar'; 
import { Dialog } from 'primereact/dialog'; 
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const { ticketId } = useParams();
  const [ticketData, setTicketData] = useState(null);
  const [editedTicketData, setEditedTicketData] = useState({
    ticketType: '',
    ticketDate: '',
  });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const navigate = useNavigate();

  const ticketTypes = [
    { label: 'Local Adult', value: 'LOCAL_ADULT', price: 29.5 },
    { label: 'Local Child', value: 'LOCAL_KID', price: 5 },
    { label: 'Foreign Adult', value: 'FOREIGN_ADULT', price: 20 },
    { label: 'Foreign Child', value: 'FOREIGN_KID', price: 10 }
  ];

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await fetch(`${baseUrl}ticket/${ticketId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTicketData(data);
        setEditedTicketData({
          ticketType: data.ticketType,
          ticketDate: data.ticketDate,
        });
      } catch (error) {
        console.error('Error fetching ticket data:', error);
        setShowErrorDialog(true);
      }
    };

    fetchTicketData();
  }, [ticketId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTicketData({ ...editedTicketData, [name]: value });
  };

  const handleDateChange = (e) => {
    const selectedDate = e.value;
    setEditedTicketData(prevData => ({
      ...prevData,
      ticketDate: selectedDate.toISOString().substring(0, 10)
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}ticket/updatebyticketid/${ticketId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedTicketData),
      });
      if (!response.ok) {
        throw new Error('Failed to update ticket data');
      }
      setShowSuccessDialog(true);
    } catch (error) {
      console.error('Error updating ticket data:', error);
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
      <div className="edit-profile-container">
        
        {ticketData ? (
          <div>
            <h2>Edit Ticket Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="p-field">
                <label htmlFor="ticketType">Ticket Type:</label>
                <Dropdown
                  id="ticketType"
                  name="ticketType"
                  value={editedTicketData.ticketType}
                  options={ticketTypes}
                  onChange={handleInputChange}
                  optionLabel="label"
                  placeholder="Select a Ticket Type"
                />
              </div>
              <div className="p-field">
                <label htmlFor="ticketDate">Ticket Date:</label>
                <Calendar
                  id="ticketDate"
                  name="ticketDate"
                  value={new Date(editedTicketData.ticketDate)}
                  onChange={handleDateChange}
                  dateFormat="yy-mm-dd"
                  showIcon
                  className="p-inputtext"
                />
              </div>
              <Button type="submit" label="Submit" className="p-button-raised p-button-success" />
            </form>
          </div>
        ) : (
          <p>Loading ticket data...</p>
        )}
      </div>

      <Dialog
        visible={showSuccessDialog}
        onHide={onHideDialog}
        header="Success"
        className="custom-dialog"
        footer={<Button label="OK" onClick={onHideDialog} />}
      >
        <p>Ticket data updated successfully!</p>
      </Dialog>

      <Dialog
        visible={showErrorDialog}
        onHide={onHideDialog}
        header="Error"
        className="custom-dialog"
        footer={<Button label="OK" onClick={onHideDialog} />}
      >
        <p>Failed to update ticket data</p>
      </Dialog>
    </div>
  );
};

export default EditProfile;
