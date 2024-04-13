import React, { useEffect, useState, useMemo } from 'react';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';
import '../styles/animalProfile.css';
import Lion from '../assets/lion.jpg';

const AnimalProfile = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}animal`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAnimals(data);
      console.log(animals)
    } catch (error) {
      console.error('Error fetching AllAnimals data:', error);
    }
  };

  const data = useMemo(() => animals, [animals]);


  return (
    <div className="animal-profile-container">
      <div className="animal-card-container">
        {animals.map(animal => (
          <Card key={animal.id} title={animal.name} subTitle={`Type: ${animal.animalSpeciesName} | Habitat: ${animal.enclosureId}`} className="animal-card">
            <img src={Lion} alt={animal.name} className="animal-image" />
            <div className="p-mb-2">
              <p>{animal.description}</p>
              <Link to={`/animalProfileSpecific/${animal.name}`} className="p-button p-button-text">
                View Details
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnimalProfile;