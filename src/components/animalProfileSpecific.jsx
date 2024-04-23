import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useParams, useNavigate } from 'react-router-dom';
import Lion from '../assets/lion.jpg';
import Dave from '../assets/Animal Types/tiger.jpg';
import Leo from '../assets/Animal Profile/leo.jpg';
import Raja from '../assets/Animal Profile/rajah.jpg';
import Maya from '../assets/Animal Profile/maya.jpg';
import Raju from '../assets/Animal Profile/raju.jpg';
import Kavi from '../assets/Animal Profile/kavi.jpg';
import Zimba from '../assets/Animal Profile/zimba.jpg';
import Nala from '../assets/Animal Profile/nala.jpg';
import Scar from '../assets/Animal Profile/scar.jpg';
import Kali from '../assets/Animal Profile/kali.jpg';
import Luna from '../assets/Animal Profile/luna.webp';
import Zephyr from '../assets/Animal Profile/Zephyr.jpg';
import '../styles/animalProfileSpecific.css'; 
import Default from '../assets/Animal Profile/default.jpg';
import Laila from '../assets/Animal Profile/Laila.jpg';
import Jaya from '../assets/Animal Profile/Jaya.jpg';
import Bala from '../assets/Animal Profile/Bala.jpg';
import Ruby from '../assets/Animal Profile/Ruby.jpeg';
import Willow from '../assets/Animal Profile/Willow.jpg';
import Jasper from '../assets/Animal Profile/Jasper.jpg';
import Amber from '../assets/Animal Profile/Amber.jpg';
import Savannah from '../assets/Animal Profile/Savannah.jpg';
import Akili from '../assets/Animal Profile/Akili.jpg';
import Amara from '../assets/Animal Profile/Amara.jpg';


const AnimalProfileSpecific = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const { animalId } = useParams();
  const [animalData, setAnimalData] = useState(null);
  
  useEffect(() => {
    const fetchAnimalData = async () => {
      window.scrollTo(0, 0);
      try {
        const response = await fetch(`${baseUrl}animal/${animalId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAnimalData(data);
      } catch (error) {
        console.error('Error fetching animal data:', error);
      }
    };

    fetchAnimalData();
  }, [animalId]);
  const handleGoBack = () => {
    
    navigate(-1);
    window.scrollTo(0, 0);
     // Navigate back one page
  };
  const getImageForSpecies = (speciesName) => {
    switch(speciesName) {
      case 'Dave':
        return Dave;
      case 'Leo':
        return Leo;
        case 'Rajah':
        return Rajah;
        
      case 'Raju':
        return Raju;
      case 'Maya':
        return Maya;
      case 'Kavi':
        return Kavi;
      case 'Zimba':
        return Zimba;
      case 'Nala':
        return Nala;
        case 'Scar':
          return Scar;
          case 'Kali':
            return Kali;
            case 'Luna':
          return Luna;
          case 'Zephyr':
          return Zephyr;
          case 'Laila':
          return Laila;
          case 'Jaya':
            return Jaya;
            case 'Bala':
              return Bala;
            case 'Ruby':
              return Ruby;
            case 'Willow':
              return Willow;
            case 'Jasper':
              return Jasper;
            case 'Amber':
              return Amber;
            case 'Savannah':
              return Savannah;
            case 'Akili':
              return Akili;
            case 'Amara':
              return Amara;

      default:
        return Default;
    }
    
  };

  return (
    <div className="animal-profile-specific-container">
      <Button label="Back" className="back-button p-button-secondary p-mb-2" onClick={handleGoBack} />

      {animalData ? (
        <div className="animal-section">
          <h3 className="section-title1">Animal Details</h3>
          <Card className="animal-card">
            <div>
              
              <img src={getImageForSpecies(animalData.name)} alt={animalData.animalSpeciesName} className="animal-image" />
              <p>Animal Species Name: {animalData.animalSpeciesName}</p>
              <p>Animal Name: {animalData.name}</p>              
              <p>Enclosure ID: {animalData.enclosureId}</p>
              <p>Birth Date: {animalData.birthDate}</p>
              <p>Birth Country: {animalData.birthCountry}</p>
              <p>Description: {animalData.description}</p>
            </div>
          </Card>
        </div>
      ) : (
        <p>Loading animal data...</p>
      )}
    </div>
  );
};

export default AnimalProfileSpecific;

