import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import '../styles/animalProfile.css';
import { useParams } from 'react-router-dom';
import { Paginator } from 'primereact/paginator'; 
import animalSpeciesName2 from '../assets/lion.jpg';
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
import Default from '../assets/Animal Profile/default.jpg';
const AnimalProfile = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const { animalSpeciesId } = useParams();
  const [animals, setAnimals] = useState([]);
  const [first, setFirst] = useState(0); 
  const [rows, setRows] = useState(5); 
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    
  }, []);

  const fetchData = async () => {
    window.scrollTo(0, 0);
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
  const handleGoBack = () => {
    navigate(-1); // Navigate back one page
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


      default:
        return Default;
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
              <Link to={`/animalProfileSpecific/${animal.animalId}`} className="p-button p-button-text">
                View Details
              </Link>
            </div>
          </Card>
        ))}
      </div>
      <Button label="Back" className="back-button p-button-secondary p-mb-2" onClick={handleGoBack} />
      <div className="paginator-container">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={totalRecords}
          onPageChange={onPageChange}
          className="paginator"
        />
      </div>
    </div>
  );
  
};

export default AnimalProfile;
