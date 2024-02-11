import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Menu } from 'primereact/menu';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';

const EditProfile = () => {
    let navigate = useNavigate();
    // const [formData, setFormData] = useState({
    //   name: '',
    //   username: '',
    //   phone: '',
    //   email: '',
    //   password: '',
    // });
    const items = [
        {
            label: 'Profile',
            icon: 'pi pi-palette',
            url: '/profile'
        },
        {
            label: 'Events',
            icon: 'pi pi-link',
            url: '/profile/event'
            // command: () => {
            //     // router.push('/installation');
            //     navigate('/login');
            // }
        },
        {
            label: 'Tickets',
            icon: 'pi pi-home',
            url: '/profile/ticket'
        }
    ];

    const [userDetails, setUserDetails] = useState({
      name: '',
      username: '',
      phone: '',
      email: '',
      password: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async (username) =>{
        try{
          const response = await fetch(`http://localhost:8080/user/${username}`);
          const data = await response.json();
          setUserDetails({
            name: data.name || '',
            username: data.username || '',
            phone: data.phone || '',
            email: data.email || '',
            password: data.password || ''
          });
        }catch(err){
          setError(err.message);
        }
      }
      const loggedUsername = sessionStorage.getItem('loggedUserDetails')
      fetchData(loggedUsername);
    }, [])

  return (
    <>
    <div className="flex justify-content-center">
    <Menu model={items} />
        <Divider layout="vertical" />

      <div className="p-col-12 p-md-6">
        <Card title="Sign-Up" className="login-card p-shadow-3 card">
        {error && <p>Error: {error}</p>}
          <form className="p-fluid">
            <div className="p-field">
              <label htmlFor="username">Name</label>
              <InputText
                id="name"
                value={userDetails.name}
                onChange={(e) => setFormData({ ...userDetails, name: e.target.value })}
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
              <label htmlFor="username">Phone</label>
              <InputText
                id="phone"
                value={userDetails.phone}
                onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                className="p-inputtext-lg"
              />
            </div>
            <div className="p-field">
              <label htmlFor="username">E-mail</label>
              <InputText
                id="email"
                type='email'
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
            <Message severity="error" text="Fill All details. Please try again." />
          )}
        </Card>
      </div>
      </div>
    </>
  );
};

export default EditProfile;