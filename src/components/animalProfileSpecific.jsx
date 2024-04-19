import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useParams, useNavigate } from 'react-router-dom';
import Lion from '../assets/lion.jpg';
import '../styles/animalProfileSpecific.css'; // Import your custom CSS file

const AnimalProfileSpecific = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const { name } = useParams();
  const [animalData, setAnimalData] = useState(null);
  
  useEffect(() => {
    const fetchAnimalData = async () => {
      try {
        const response = await fetch(`${baseUrl}animal/${name}`);
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
  }, [name]);

  return (
    <div className="animal-profile-specific-container">
      {animalData ? (
        <div className="animal-section">
          <h3 className="section-title1">Animal Details</h3>
          <Card className="animal-card">
            <div>
              <p>ID: {animalData.id}</p>
              <p>Animal ID: {animalData.animalId}</p>
              <p>Animal Species ID: {animalData.animalSpeciesId}</p>
              <img src={Lion} alt={animalData.name} className="animal-image" />
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

