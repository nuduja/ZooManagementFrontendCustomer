import React, { useEffect, useState, useMemo } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { Carousel } from 'primereact/carousel';
import { classNames } from 'primereact/utils';
import { Link } from 'react-router-dom'; 
import '../styles/home.css';
import Video1 from '../assets/video1.mp4';
import Rainforest from '../assets/rainforest.jpg';
import Lion from '../assets/lion.jpg';
import Fish from '../assets/fish.jpg';
import Rhino from '../assets/rhino.jpg';
import Night from '../assets/night.jpg';
import Story from '../assets/story.jpg';
import Photo from '../assets/photo.jpg';
import Family from '../assets/family.jpg';
import { useNavigate } from 'react-router-dom';
import Tiger from '../assets/Animal Types/tiger.jpg';
import Elephant from '../assets/Animal Types/Elephant.jpg';
import Cheetah from '../assets/Animal Types/cheetah.jpg';
import Giraffe from '../assets/Animal Types/giraffe.jpg';
import Gorilla from '../assets/Animal Types/gorilla.jpg';
import Kangaroo from '../assets/Animal Types/kangaroo.avif';

const Home = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [animalTypes, setAnimalTypes] = useState([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  let navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}animalspecies`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAnimalTypes(data);
    } catch (error) {
      console.error('Error fetching Animal Types data:', error);
    }
  };

  const data = useMemo(() => animalTypes, [animalTypes]);

  const getImageForSpecies = (speciesName) => {
    switch (speciesName) {
      case 'Tiger':
        return Tiger;
      case 'Elephant':
        return Elephant;
      case 'Cheetah':
        return Cheetah;
      case 'Lion':
        return Lion;
      case 'Giraffe':
        return Giraffe;
        case 'Gorilla':
        return Gorilla;
        case 'Kangaroo':
        return Kangaroo;
      default:
        return 'path_to_default_image_if_needed';
    }
  };

  const handleBookTicket = () => {
    navigate('/createTicket');
  };

  const featureItems = [
    { name: 'Rainforest Pavilion', image: Rainforest },
    { name: 'Big Cats at the Safari Zone', image: Lion },
    { name: 'Aquatic Adventure Aquarium', image: Fish },
    { name: 'Desert Discovery', image: Rhino }
  ];

  const eventItems = [
    { name: 'Zoo Night Safari - August 15th', image: Night },
    { name: "Children's Animal Storytime - August 22nd", image: Story },
    { name: 'Photography Workshop - August 30th', image: Photo },
    { name: 'Family Day: Animal Encounters - September 5th', image: Family }
  ];

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
            <p>Welcome to Safari Adventure Zoo, where the wonders of the wild await your exploration! Situated amidst the lush greenery of our city, our zoo is a haven for both wildlife enthusiasts and curious adventurers.

              Step into our world and embark on a thrilling journey through diverse ecosystems, from the dense jungles of the Amazon to the arid deserts of Africa. Encounter a menagerie of exotic animals, from majestic lions and graceful giraffes to colorful tropical birds.

              Immerse yourself in interactive exhibits and educational presentations that offer insights into the fascinating lives of our animal residents. Whether you're learning about conservation efforts or getting up close and personal with our animal ambassadors, there's something for everyone to enjoy at Safari Adventure Zoo.

              Join us as we celebrate the beauty and diversity of the natural world, and discover the magic of the animal kingdom. Welcome to Safari Adventure Zoo – where every visit promises excitement, wonder, and unforgettable memories!.</p>
          </Card>
        </div>

        <div className={classNames('feature-section', 'animated-section')}>
          <Panel header="Featured Exhibits" className="feature-panel">
            <Carousel
              value={featureItems}
              itemTemplate={(item) => (
                <div className="zoo-list-item">
                  <img src={item.image} alt={item.name} className="zoo-list-icon" />
                  <div className="zoo-list-description">{item.name}</div>
                </div>
              )}
              numVisible={3}
              numScroll={1}
              responsiveOptions={[
                { breakpoint: '1024px', numVisible: 2, numScroll: 1 },
                { breakpoint: '768px', numVisible: 1, numScroll: 1 }
              ]}
              circular
              autoplayInterval={3000}
              showIndicators
            />
          </Panel>
        </div>

        <div className={classNames('event-section', 'animated-section')}>
          <Panel header="Upcoming Events" className="event-panel">
            <Carousel
              value={eventItems}
              itemTemplate={(item) => (
                <div className="zoo-list-item">
                  <img src={item.image} alt={item.name} className="zoo-list-icon" />
                  <div className="zoo-list-description">{item.name}</div>
                </div>
              )}
              numVisible={3}
              numScroll={1}
              responsiveOptions={[
                { breakpoint: '1024px', numVisible: 2, numScroll: 1 },
                { breakpoint: '768px', numVisible: 1, numScroll: 1 }
              ]}
              circular
              autoplayInterval={3000}
              showIndicators
            />
          </Panel>
        </div>

        <div className={classNames('animal-types-section', 'animated-section')}>
          <Panel header="Animal Types" className="feature-panel">
            <Carousel
              value={animalTypes}
              itemTemplate={(animalType) => (
                <Link
                  to={{
                    pathname: `/animalProfile/${animalType.animalSpeciesId}`,
                    state: { selectedSpecies: animalType.animalSpeciesId }
                  }}
                  key={animalType.id}
                >
                  <div className="zoo-list-item">
                    <img
                      src={getImageForSpecies(animalType.animalSpeciesName)}
                      alt={animalType.animalSpeciesName}
                      className="zoo-list-icon"
                    />
                    <div className="zoo-list-description">{animalType.animalSpeciesName}</div>
                  </div>
                </Link>
              )}
              numVisible={3}
              numScroll={1}
              responsiveOptions={[
                { breakpoint: '1024px', numVisible: 2, numScroll: 1 },
                { breakpoint: '768px', numVisible: 1, numScroll: 1 }
              ]}
              circular
              autoplayInterval={3000}
              showIndicators
            />
          </Panel>
        </div>

        <div className={classNames('button-section', 'animated-button')}>
          <div className="p-grid p-justify-center">
            <div className="p-col-6">
              
            </div>
            <div className="p-col-6">
              
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-container">
        <Card title="Special Offer">
          <p>Don't miss our special offer! Get 50% off on all tickets this weekend.</p>
        </Card>

        <Card className="visitor-info-card" header="Visitor Information">
          <ul className="visitor-info-list">
            <li>Opening Hours: 9:00 AM - 6:00 PM</li>
            <li>Location: 123 Zoo Street, City, Country</li>
            <li>Contact: +94 765456213</li>
          </ul>
          <Button
            label="Book Now"
            icon="pi pi-arrow-right"
            className="p-button-raised p-button-rounded p-button-primary p-mb-2"
            onClick={handleBookTicket}
          />
        </Card>
      </div>
    </div>
  );
};

export default Home;
