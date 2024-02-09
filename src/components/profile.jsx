// Home.js
import React, { useEffect, useState } from 'react';
// import { Button } from 'primereact/button';
// import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
// import '../styles/home.css';
// import { Sidebar } from 'primereact/sidebar';
import { Menu } from 'primereact/menu';
// import { useRouter } from 'next/router';
import { useNavigate } from "react-router-dom";
import { Divider } from 'primereact/divider';

const Profile = () => {
  // const router = useRouter();
  let navigate = useNavigate(); 
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

    // constfetchuserDetails = () => {

    // }

    const [userDetails, setUserDetails] = useState({
      name: '',
      username: '',
      phone: '',
      email: '',
      password: ''
    });

    const [error, setError] = useState(null);

    useEffect(() => {
      console.log("here1");
      const fetchData = async () =>{
        console.log("here2");
        try{
          console.log("here3");
          const response = await fetch("http://localhost:8080/user/username1");
          // if(!response.ok){
          //   throw new Error(`HTTP error! status: ${response.status}`);
          // }
          console.log("here4");
          const data = await response.json();
          console.log("here5");
          setUserDetails({
            name: data.name || '',
            username: data.username || '',
            phone: data.phone || '',
            email: data.email || '',
            password: data.password || ''
          });
          console.log("here6");
          console.log(userDetails);
        }catch(err){
          setError(err.message);
          console.error(err);
        }
      }
      fetchData();
    }, [])

  return (
    <>
    <div className="flex justify-content-center">
    <Menu model={items} />
    {/* <Divider layout="vertical" /> */}
    {/* <div className="w-full md:w-2">
            <Divider layout="vertical" className="hidden md:flex">
                <b>OR</b>
            </Divider>
            <Divider layout="horizontal" className="flex md:hidden" align="center">
                <b>OR</b>
            </Divider>
        </div> */}
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