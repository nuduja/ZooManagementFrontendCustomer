import React, { useEffect, useState, useMemo } from 'react';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';
import '../styles/animalProfile.css';
import { useParams } from 'react-router-dom';
import { Paginator } from 'primereact/paginator'; // Import Paginator
import animalSpeciesName2 from '../assets/lion.jpg';
import Dave from '../assets/Animal Types/tiger.jpg';
import Leo from '../assets/Animal Profile/leo.jpg';
import Rajah from '../assets/Animal Profile/rajah.jpg';

const AnimalProfile = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const { animalSpeciesId } = useParams();
  const [animals, setAnimals] = useState([]);
  const [first, setFirst] = useState(0); // Current first item index
  const [rows, setRows] = useState(5); // Number of items per page

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
      console.log(animals);
    } catch (error) {
      console.error('Error fetching AllAnimals data:', error);
    }
  };

  const data = useMemo(() => animals, [animals]);

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

  // Calculate total number of pages
  const totalRecords = data.length;
  const totalPages = Math.ceil(totalRecords / rows);

  // Filter animals for the current page
  const currentAnimals = data.slice(first, first + rows);

  const onPageChange = (event) => {
    setFirst(event.first);
  };

  return (
    <div className="animal-profile-container">
      <div className="animal-card-container">
        {currentAnimals.map(animal => (
          <Card key={animal.id} title={animal.name} subTitle={`Type: ${animal.animalSpeciesName} | Habitat: ${animal.enclosureId}`} className="animal-card">
            <img src={getImageForSpecies(animal.name)} alt={animal.animalSpeciesName} className="animal-image" />
            <div className="p-mb-2">
              {/* <p>{animal.description}</p> */}
              <Link to={`/animalProfileSpecific/${animal.animalId}`} className="p-button p-button-text">
                View Details
              </Link>
            </div>
          </Card>
        ))}
      </div>
      <Paginator
        first={first}
        rows={rows}
        totalRecords={totalRecords}
        onPageChange={onPageChange}
        className="paginator"
      />
    </div>
  );
};

export default AnimalProfile;
