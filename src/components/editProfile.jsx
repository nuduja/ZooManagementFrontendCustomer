import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import '../styles/editProfile.css'; 

const EditProfile = () => {
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({
        userId: '',
        name: '',
        username: '',
        phone: '',
        email: '',
        password: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showErrorDialog, setShowErrorDialog] = useState(false);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    useEffect(() => {
        const fetchData = async (loggedUserId) => {
            try {
                const response = await fetch(`http://localhost:8080/api/v1/user/${loggedUserId}`);
                const data = await response.json();
                setUserDetails({
                    userId: data.userId || '',
                    name: data.name || '',
                    username: data.username || '',
                    phone: data.phone || '',
                    email: data.email || '',
                    password: data.password || '',
                });
            } catch (err) {
                setError(err.message);
            }
        };

        const loggedUserId = sessionStorage.getItem('userId');
        fetchData(loggedUserId);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate phone
        if (!/^\d{10}$/.test(userDetails.phone)) {
            setPhoneError('Phone number must be 10 digits');
            return;
        } else {
            setPhoneError('');
        }

        // Validate email
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(userDetails.email)) {
            setEmailError('Invalid email address');
            return;
        } else {
            setEmailError('');
        }

        try {
            const response = await fetch(`http://localhost:8080/api/v1/user/updatebyuserid/${userDetails.userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDetails),
            });
            if (!response.ok) {
                throw new Error('Failed to update profile');
            }
            setError(null);
            setSubmitted(true);
            setShowSuccessDialog(true);
        } catch (error) {
            console.error('Error updating profile:', error);
            setError('Failed to update profile');
            setShowErrorDialog(true);
        }
    };

    const navigateBack = () => {
        navigate(-1);
    };

    return (
        <div className="edit-profile-container">
            <div className="edit-profile-form">
                <Card title="Edit Your Profile" className="edit-profile-card">
                    {error && <Message severity="error" text={`Error: ${error}`} />}
                    <form className="p-fluid" onSubmit={handleSubmit}>
                        <div className="p-field">
                            <label htmlFor="name">Name</label>
                            <InputText
                                id="name"
                                value={userDetails.name}
                                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                className="p-inputtext-lg"
                            />
                        </div>
                        <div className="p-field">
                            <label htmlFor="username">Username</label>
                            <InputText
                                id="username"
                                value={userDetails.username}
                                onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
                                className="p-inputtext-lg"
                            />
                        </div>
                        <div className="p-field">
                            <label htmlFor="phone">Phone</label>
                            <InputText
                                id="phone"
                                value={userDetails.phone}
                                onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                                className={`p-inputtext-lg ${phoneError ? 'p-invalid' : ''}`}
                            />
                            {phoneError && <small className="p-invalid">{phoneError}</small>}
                        </div>
                        <div className="p-field">
                            <label htmlFor="email">E-mail</label>
                            <InputText
                                id="email"
                                type="email"
                                value={userDetails.email}
                                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                className={`p-inputtext-lg ${emailError ? 'p-invalid' : ''}`}
                            />
                            {emailError && <small className="p-invalid">{emailError}</small>}
                        </div>
                        <div className="p-field">
                            <Button
                                label="Save"
                                type="submit"
                                className="p-button-rounded p-button-lg p-button-success"
                            />
                        </div>
                    </form>
                    {submitted && (
                        <Message severity="info" text="Profile updated successfully." />
                    )}
                </Card>
            </div>
            <Dialog
                visible={showErrorDialog}
                onHide={() => setShowErrorDialog(false)}
                header="Error"
                className="p-dialog-sm"
                footer={<Button label="OK" onClick={() => setShowErrorDialog(false)} />}
            >
                <p>{error}</p>
            </Dialog>
            <Dialog
                visible={showSuccessDialog}
                onHide={() => setShowSuccessDialog(false)}
                header="Success"
                className="p-dialog-sm"
                footer={<Button label="OK" onClick={navigateBack} />}
            >
                <p>Profile updated successfully!</p>
            </Dialog>
        </div>
    );
};

export default EditProfile;
