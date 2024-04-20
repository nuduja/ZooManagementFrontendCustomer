import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import '../styles/editProfile.css'; 

const EditProfile = () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

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
        console.log("loggedUserId", loggedUserId)
        fetchData(loggedUserId);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/api/v1/user/updatebyuserid/${userDetails.userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDetails),
            });
            if (!response.ok) {
                throw new Error('Failed to update Admin data');
            }
            setUserDetails(userDetails);
            setError(null)
        } catch (error) {
            console.error('Error updating profile:', error);
            setError('Failed to update');
        }
        setSubmitted(true);
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
                                className="p-inputtext-lg"
                            />
                        </div>
                        <div className="p-field">
                            <label htmlFor="email">E-mail</label>
                            <InputText
                                id="email"
                                type="email"
                                value={userDetails.email}
                                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                className="p-inputtext-lg"
                            />
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
        </div>
    );
};

export default EditProfile;
