import React, { useEffect, useState, useMemo } from 'react';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';
import '../styles/animalTypes.css';
import Lion from '../assets/lion.jpg';

const AnimalTypes = () => {
  const [animalTypes, setAnimalTypes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/animal');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAnimalTypes(data);
      console.log(animalTypes);
    } catch (error) {
      console.error('Error fetching Animal Types data:', error);
    }
  };

  const data = useMemo(() => animalTypes, [animalTypes]);

  return (
    <div className="animal-types-container">
      <h2 className="section-title">Animal Types</h2>
      <div className="animal-card-container">
        {animalTypes.map(animalType => (
          <Link to={`/animalProfile/${animalType}`} >
          <Card key={animalType} title={animalType.name} className="animal-card">
            {/* Add an image for each animal type */}
            {/* <img src={getAnimalImage(animalType)} alt={animalType} className="animal-image" /> */}
            {/* <div className="p-mb-2"> */}
              {/* <p>{animalType}</p> */}
              <img src={Lion} alt={animalTypes} className="animal-image" />
              
                
              
            {/* </div> */}
          </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

// // Function to get the image for each animal type
// const getAnimalImage = (animalType) => {
//   // Replace this logic with your actual image paths based on animal types
//   switch (animalType) {
//     case 'Lion':
//       return Lion;
//     // Add cases for other animal types if needed
//     default:
//       return ''; // Default image path if animal type is not recognized
//   }
// };

export default AnimalTypes;