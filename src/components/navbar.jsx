import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Badge } from 'primereact/badge';
import { Link } from 'react-router-dom';
// import '../styles/navbar.css';
//import 'primeicons/primeicons.css';

export default function TemplateDemo() {
  const itemRenderer = (item) => (
    // <Link to={item.to} className="flex align-items-center p-menuitem-link">
        <a href="https://www.w3schools.com">
      <span className={item.icon} />
      {/* <span className="mx-2">{item.label}</span> */}
      {/* {item.badge && <Badge className="ml-auto" value={item.badge} />} */}
      {/* {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )} */}
    </a>
    // {/* </Link> */}
  );

  const items = [
    { label: 'Home', icon: 'pi pi-home', url: '/' },
    { label: 'Book Ticket', icon: 'pi pi-ticket', url: '/ticket' },
    { label: 'Book Event', icon: 'pi pi-star-fill', url: '/event' },
    { label: 'Profile', icon: 'pi pi-user', url: '/profile' },
    { label: 'Contact', icon: 'pi pi-envelope', url: '/contact' },
    { label: 'About Us', icon: 'pi pi-info-circle', url: '/about' },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );

  const end = (
    <div className="flex align-items-center">
      <Link to="/login" className="p-menuitem-link">
        <i className="pi pi-sign-in"></i>
        <span>Log In</span>
      </Link>
      <Link to="/logout" className="p-menuitem-link">
        <i className="pi pi-sign-out"></i>
        <span>Log Out</span>
      </Link>
      <Link to="/signup" className="p-menuitem-link">
        <i className="pi pi-angle-up"></i>
        <span>Sign up</span>
      </Link>
    </div>
  );

  return (
    <div className="card" style={{ width: '100%', position: '', top: 0, zIndex: 1000 , margin: 0 }}>
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}