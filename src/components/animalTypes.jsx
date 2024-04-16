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
      const response = await fetch(`${baseUrl}animal`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Extract unique animal types from animalspeciesname
      const uniqueAnimalTypes = [...new Set(data.map(animal => animal.animalSpeciesName))];
      // Create an array of objects with name and id properties
      const animalTypes = uniqueAnimalTypes.map((name, index) => ({ name, id: index + 1 }));
      setAnimalTypes(animalTypes);
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
          <Link to={`/animalProfile/${animalType.id}`} key={animalType.id}>
            <Card className="animal-card" key={animalType.id}>
              <img src={Lion} alt={animalType.name} className="animal-image" />
              <div className="animal-name">{animalType.name}</div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimalTypes;
