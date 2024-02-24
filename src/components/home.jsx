import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { classNames } from 'primereact/utils';
import '../styles/home.css'; // Import your CSS file
import Video1 from '../assets/video1.mp4';
import Rainforest from '../assets/rainforest.jpg';
import Lion from '../assets/lion.jpg'; // Import your video file
import Fish from '../assets/fish.jpg';
import Rhino from '../assets/rhino.jpg';
import Night from '../assets/night.jpg';
import Story from '../assets/story.jpg';
import Photo from '../assets/photo.jpg';
import Family from '../assets/family.jpg';
import { Navigate, useNavigate } from 'react-router-dom';



const Home = () => {
  let navigate = useNavigate(); // Initialize the navigate function

  const handleBookTicket = () => {
    // Redirect to the book ticket page when the button is clicked
    navigate('/createTicket');
  };
  return (
    <div className="home-container">
      <div className="background-video-container">
        <video autoPlay loop muted className="background-video">
          <source src={Video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="big-header">VISIT OUR ZOO</h1>
      </div>

      <div className={classNames('content-container')}>
        <div className={classNames('welcome-section', 'animated-section')}>
          <Card className="welcome-card">
            <h2>Experience the wonders of nature and wildlife at our amazing zoo!</h2>
            <p>Welcome to [Zoo Name], where adventure awaits at every turn! Immerse yourself in the wonders of the natural world as you explore our diverse collection of wildlife from across the globe. Nestled in the heart of [City or Region], our zoo is a sanctuary for both exotic and indigenous species, offering visitors a unique opportunity to connect with nature and learn about conservation efforts firsthand.</p>
          </Card>
        </div>

        <div className={classNames('feature-section', 'animated-section')}>
          <Panel header="Featured Exhibits" className="feature-panel">
            <ul className="zoo-list">
              
              <li>
                <div className="zoo-list-item">
                  <img src={Rainforest} alt="Palette Icon" className="zoo-list-icon" />
                  <div className="zoo-list-description">Discover the Rainforest Pavilion</div>
                </div>
              </li>


              <li>
                <div className="zoo-list-item">
                  <img src={Lion} alt="Paw Icon" className="zoo-list-icon" />
                  <div className="zoo-list-description">Meet our Big Cats at the Safari Zone</div>
                </div>
              </li>
              <li>
                <div className="zoo-list-item">
                  <img src={Fish} alt="Fish Icon" className="zoo-list-icon" />
                  <div className="zoo-list-description">Explore the Aquatic Adventure Aquarium</div>
               </div>
              </li>
              <li>
                <div className="zoo-list-item">
                  <img src={Rhino} alt="Globe Icon" className="zoo-list-icon" />
                  <div className="zoo-list-description">Journey through the Desert Discovery</div>
                </div>
              </li>
            </ul>
          </Panel>
        </div>


        <div className={classNames('event-section', 'animated-section')}>
          <Panel header="Upcoming Events" className="event-panel">
            <ul className="zoo-list">
              <li>
                <div className="zoo-list-item">
                  <img src={Night} alt="Zoo Night Safari" className="zoo-list-icon" />
                  <div className="zoo-list-description">Zoo Night Safari - August 15th</div>
                </div>
              </li>
              <li>
                <div className="zoo-list-item">
                  <img src={Story} alt="Children's Animal Storytime" className="zoo-list-icon" />
                  <div className="zoo-list-description">Children's Animal Storytime - August 22nd</div>
                </div>
              </li>
              <li>
                <div className="zoo-list-item">
                  <img src={Photo} alt="Photography Workshop" className="zoo-list-icon" />
                  <div className="zoo-list-description">Photography Workshop: Capturing Wildlife - August 30th</div>
                </div>
              </li>
              <li>
                <div className="zoo-list-item">
                  <img src={Family} alt="Family Day: Animal Encounters" className="zoo-list-icon" />
                  <div className="zoo-list-description">Family Day: Animal Encounters - September 5th</div>
                </div>
              </li>
            </ul>
          </Panel>
        </div>

        <div className={classNames('button-section', 'animated-button')}>
          <div className="p-grid p-justify-center">
            <div className="p-col-6">
              <Button label="See All Exhibits" icon="pi pi-eye" className="p-button-raised p-button-rounded p-button-text p-button-lg p-mb-2" />
            </div>
            <div className="p-col-6">
              <Button label="View Event Calendar" icon="pi pi-calendar" className="p-button-raised p-button-rounded p-button-text p-button-lg p-mb-2" />
            </div>
          </div>
        </div>
      </div>

      
      <div className="sidebar-container">
      <Card title="Special Offer">
        <p>Don't miss our special offer! Get 50% off on all tickets this weekend.</p>
        <Button label="Learn More" icon="pi pi-info-circle" className="p-button-raised p-button-rounded p-button-info p-mb-2" />
      </Card>

        <Card className="visitor-info-card" header="Visitor Information">
          <ul className="visitor-info-list">
            <li>Opening Hours: 9:00 AM - 6:00 PM</li>
            <li>Location: 123 Zoo Street, City, Country</li>
            <li>Contact: +1 (123) 456-7890</li>
          </ul>
          <Button label="Book Your Ticket Now" icon="pi pi-arrow-right" className="p-button-raised p-button-rounded p-button-primary p-mb-2" onClick={handleBookTicket} />
          
        </Card>
      </div>
    </div>
  );
};

export default Home;
