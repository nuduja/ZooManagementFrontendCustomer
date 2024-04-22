import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useParams, useNavigate } from 'react-router-dom';
import Lion from '../assets/lion.jpg';
import Dave from '../assets/Animal Types/tiger.jpg';
import Leo from '../assets/Animal Profile/leo.jpg';
import '../styles/animalProfileSpecific.css'; 

const AnimalProfileSpecific = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const { animalId } = useParams();
  const [animalData, setAnimalData] = useState(null);
  
  useEffect(() => {
    const fetchAnimalData = async () => {
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
  const getImageForSpecies = (speciesName) => {
    switch(speciesName) {
      case 'Dave':
        return Dave;
      case 'Leo':
        return Leo;
        case 'Rajah':
        return Rajah;
      default:
        return 'path_to_default_image_if_needed';
    }
  };

  return (
    <div className="animal-profile-specific-container">
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

