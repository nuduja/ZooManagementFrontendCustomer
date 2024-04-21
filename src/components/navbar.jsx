import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import Logo from '../assets/welcome.jpg';

export default function Navbar() {
  let navigate = useNavigate();

  const isLoggedIn = sessionStorage.getItem('loginStatus') === 'true';
  const logggedUser = sessionStorage.getItem('username');
  const items = [
    { label: 'Home', icon: 'pi pi-home', url: '/' },
    { label: 'Book Ticket', icon: 'pi pi-ticket', url: '/createticket' },
    { label: 'Book Event', icon: 'pi pi-star-fill', url: '/createevent' },
    { label: 'Animals', icon: 'pi pi-paw', url: '/animalTypes' },
    { label: 'Contact', icon: 'pi pi-envelope', url: '/contact' },
    { label: 'About Us', icon: 'pi pi-info-circle', url: '/about' },
  ];

  const handleLogout = () => {
    sessionStorage.clear();1
    navigate('/');
  };

  const start = (
    <Link to="/" className="p-menuitem-link">
      <img alt="logo" src={Logo} height="40" className="mr-2" />
    </Link>
  );

  const end = (
    <div className="flex align-items-center">
      {!isLoggedIn ? (
        <>
          <Link to="/login" className="p-menuitem-link">
            <i className="pi pi-sign-in"></i>
            <span>Log In</span>
          </Link>
          <Link to="/signup" className="p-menuitem-link">
            <i className="pi pi-angle-up"></i>
            <span>Sign up</span>
          </Link>
        </>
      ) : (
        <>
          <div onClick={handleLogout} className="p-menuitem-link" style={{ cursor: 'pointer' }}>
            <i className="pi pi-sign-out"></i>
            <span>Log Out</span>
          </div>
          <Link to="/profile" className="p-menuitem-link">
            <i className="pi pi-user"></i>
            
            <span>{loggedUser}</span>
          </Link>
        </>
      )}
    </div>
  );

  return (
    <div className="navbar-container">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
