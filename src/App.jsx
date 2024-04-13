import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ProtectedRoute} from './validators/ProtectedRoute.jsx'
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
                <Route path="/profile" element={
                    <ProtectedRoute>
                        <Profile/>
                    </ProtectedRoute>
                } />
                <Route path="/editprofile" element={
                    <ProtectedRoute>
                        <EditProfile />
                    </ProtectedRoute>
                } />
                <Route path="/ticketprofile" element={
                    <ProtectedRoute>
                        <TicketProfile />
                    </ProtectedRoute>
                    } />
                <Route path="/ticket/:ticketId" element={
                    <ProtectedRoute>
                        <TicketProfileSpecific />
                    </ProtectedRoute>
                } />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/editticket/:ticketId" element={
                    <ProtectedRoute>
                        <EditTicket />
                    </ProtectedRoute>
                } />
                <Route path="/createTicket" element={
                    <ProtectedRoute>
                        <CreateTicket />
                    </ProtectedRoute>
                } />
                <Route path="/animalTypes" element={
                    <ProtectedRoute>
                        <AnimalTypes />
                    </ProtectedRoute>
               } />
                <Route path="/animalProfile/:animalSpeciesName" element={
                    <ProtectedRoute>
                        <AnimalProfile />
                    </ProtectedRoute>
                } />
                <Route path="/animalProfileSpecific/:animalId" element={
                    <ProtectedRoute>
                        <AnimalProfileSpecific />
                    </ProtectedRoute>
                } />
                <Route path="/createEvent" element={
                    <ProtectedRoute>
                        <CreateEvent />
                    </ProtectedRoute>
                } />
                <Route path="/eventprofile" element={
                    <ProtectedRoute>
                        <EventProfile />
                    </ProtectedRoute>
                } />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;