import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { Menubar } from 'primereact/menubar';
import Logo from '../assets/welcome.jpg';

export default function Navbar() {
  const location = useLocation();

  const start = (
    <Link to="/" className="p-menuitem-link">
      <img
        alt="logo"
        src={Logo}
        height="40"
        className="mr-2"
      />
    </Link>
  );

  const end = (
    <div className="flex align-items-center">
      {location.pathname !== '/login' && (
        <Link to="/login" className="p-menuitem-link">
          <i className="pi pi-sign-in"></i>
          <span>Login</span>
        </Link>
      )}
      {location.pathname !== '/signup' && (
        <Link to="/signup" className="p-menuitem-link">
          <i className="pi pi-angle-up"></i>
          <span>Sign up</span>
        </Link>
      )}
    </div>
  );

  return (
    <div className="card" style={{ width: '100%', position: '', top: 0, zIndex: 1000, margin: 0 }}>
      <Menubar start={start} end={end} />
    </div>
  );
}
