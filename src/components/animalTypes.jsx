import React, { useEffect, useState, useMemo } from 'react';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';
import '../styles/animalTypes.css';
import Lion from '../assets/lion.jpg';

const AnimalTypes = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [animalTypes, setAnimalTypes] = useState([]);

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

  return (
    <div className="animal-types-container">
      <h2 className="section-title">Animal Types</h2>
      <div className="animal-card-container">
        {data.map(animalType => (
          <Link to={{
            pathname: `/animalProfile/${animalType.animalSpeciesId}`,
            state: { selectedSpecies: animalType.animalSpeciesId }
          }} key={animalType.id}>
          
          <Card className="animal-card">
            <img src={Lion} alt={animalType.animalSpeciesName} className="animal-image" />
            <div className="animal-name">{animalType.animalSpeciesName}</div>
          </Card>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimalTypes;
