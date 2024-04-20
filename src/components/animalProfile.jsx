import React, { useEffect, useState, useMemo } from 'react';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';
import '../styles/animalProfile.css';
import { useParams } from 'react-router-dom';
import animalSpeciesName2 from '../assets/lion.jpg';
import zimba from '../assets/lion.jpg';

const AnimalProfile = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const { animalSpeciesId } = useParams();
  const [animals, setAnimals] = useState([]);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}animal/bySpeciesId/${animalSpeciesId}`);
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

  const getImageForSpecies = (speciesName) => {
    switch(speciesName) {
      case 'zimba':
        return zimba;
      case 'animalSpeciesName2':
        return animalSpeciesName2;
      default:
        return 'path_to_default_image_if_needed';
    }
  };

  return (
    <div className="animal-profile-container">
      <div className="animal-card-container">
        {animals.map(animal => (
          <Card key={animal.id} title={animal.name} subTitle={`Type: ${animal.animalSpeciesName} | Habitat: ${animal.enclosureId}`} className="animal-card">
            <img src={getImageForSpecies(animal.name)} alt={animal.animalSpeciesName} className="animal-image" />
            <div className="p-mb-2">
              <p>{animal.description}</p>
              <Link to={`/animalProfileSpecific/${animal.animalId}`} className="p-button p-button-text">
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