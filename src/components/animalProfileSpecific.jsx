// AnimalProfileSpecific.js

import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useParams, useNavigate } from 'react-router-dom';
// import '../styles/animalProfileSpecific.css'; // Import your custom CSS file

const AnimalProfileSpecific = () => {
  const navigate = useNavigate();
  const { animalId } = useParams();
  const [animalData, setAnimalData] = useState(null);

  useEffect(() => {
    const fetchAnimalData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/animal/${animalId}`);
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

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/animal/${animalId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete animal');
      }
      navigate('/');
    } catch (error) {
      console.error('Error deleting animal:', error);
    }
  };

  return (
    <div className="animal-profile-specific-container">
      {animalData ? (
        <Card title="Animal Details" className="animal-card">
          <div>
            <p>ID: {animalData.id}</p>
            <p>Name: {animalData.name}</p>
            <p>Type: {animalData.type}</p>
            <p>Habitat: {animalData.habitat}</p>
            <p>Description: {animalData.description}</p>
          </div>
          <div className="button-group">
            <Button label="Edit" className="p-button-raised p-button-info p-mr-2" onClick={() => navigate(`/editanimal/${animalData.id}`)} />
            <Button label="Delete" className="p-button-raised p-button-danger" onClick={handleDelete} />
          </div>
        </Card>
      ) : (
        <p>Loading animal data...</p>
      )}
    </div>
  );
};

export default AnimalProfileSpecific;
