import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Menu } from 'primereact/menu';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../hooks/deleteUserHook';
import {Link} from 'react-router-dom';

const TicketProfile = () => {
    // let navigate = useNavigate();
    // const items = [
    //     {
    //         label: 'Profile',
    //         icon: 'pi pi-palette',
    //         url: '/profile'
    //     },
    //     {
    //         label: 'Events',
    //         icon: 'pi pi-link',
    //         url: '/profile/event'
    //         // command: () => {
    //         //     // router.push('/installation');
    //         //     navigate('/login');
    //         // }
    //     },
    //     {
    //         label: 'Tickets',
    //         icon: 'pi pi-home',
    //         url: '/profile/ticket'
    //     }
    // ];

    // const [userDetails, setUserDetails] = useState({
    //   name: '',
    //   username: '',
    //   phone: '',
    //   email: '',
    //   password: ''
    // });

    // const [error, setError] = useState(null);

    // useEffect(() => {
    //   const fetchData = async (username) =>{
    //     try{
    //       const response = await fetch(`http://localhost:8080/user/${username}`);
    //       const data = await response.json();
    //       setUserDetails({
    //         name: data.name || '',
    //         username: data.username || '',
    //         phone: data.phone || '',
    //         email: data.email || '',
    //         password: data.password || ''
    //       });
    //     }catch(err){
    //       setError(err.message);
    //     }
    //   }
    //   const loggedUsername = sessionStorage.getItem('loggedUserDetails')
    //   fetchData(loggedUsername);
    // }, [])

    // const handleDelete = async (e) => {
    //   e.preventDefault();
    //   console.log('delete');
    //   deleteUser(userDetails.username);
    // }

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8080/ticket')
        .then(response => response.json())
        .then(data => setTickets(data));
    }, []);

  return (
    <>
<div>
      {tickets.map(ticket => (
        <div key={ticket.id}>
          <Link to={`/eventprofiles/${ticket.id}`}>
            {ticket.ticketType} - {ticket.price} - {ticket.availability}
          </Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default TicketProfile;