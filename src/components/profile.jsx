import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Menu } from 'primereact/menu';
import { Divider } from 'primereact/divider';

const Profile = () => {
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
      <Card title={userDetails.name || 'User.Name'}>

        {error && <p>Error: {error}</p>}
            <div>
                <p>Name: {userDetails.name}</p>
                <p>Username: {userDetails.username}</p>
                <p>Phone: {userDetails.phone}</p>
                <p>Email: {userDetails.email}</p>
                <p>Password: {userDetails.password}</p>
            </div>
      </Card>
      </div>
    </>
  );
};

export default Profile;