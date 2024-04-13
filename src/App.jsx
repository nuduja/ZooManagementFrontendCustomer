import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Profile from './components/profile';
import EditProfile from './components/editProfile';
import TicketProfile from './components/ticketProfile';
import TicketProfileSpecific from './components/ticketProfileSpecific';
import Contact from './components/Contact';
import About from './components/about';
import EditTicket from './components/editTicket';
import CreateTicket from './components/createTicket';
import Footer from './components/footer';
import AnimalProfile from './components/animalProfile';
import AnimalProfileSpecific from './components/animalProfileSpecific';
import CreateEvent from './components/createEvent';
import EventProfile from './components/eventProfile';
import AnimalTypes from './components/animalTypes';





function App() {
    return (
        <Router>
            <Navbar/>
            
            
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/editprofile" element={<EditProfile />} />
                <Route path="/ticketprofile" element={<TicketProfile />} />
                <Route path="/ticket/:ticketId" element={<TicketProfileSpecific />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/editticket/:ticketId" element={<EditTicket />} />
                <Route path="/createTicket" element={<CreateTicket />} />
                <Route path="/animalTypes" element={<AnimalTypes />} />
                <Route path="/animalProfile/:animalSpeciesName" element={<AnimalProfile />} />
                <Route path="/animalProfileSpecific/:animalId" element={<AnimalProfileSpecific />} />
                <Route path="/createEvent" element={<CreateEvent />} />
                <Route path="/eventprofile" element={<EventProfile />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;