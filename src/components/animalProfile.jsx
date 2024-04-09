import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';
import '../styles/animalProfile.css';

const AnimalProfile = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Simulated API call to fetch animal data
      const animalData = [
        { id: 1, name: 'Cheetah', type: 'Big Cat', habitat: 'Grasslands', description: 'The cheetah is the fastest land animal, capable of reaching speeds up to 70 mph.', image: 'cheetah.jpg' },
        { id: 2, name: 'Lion', type: 'Big Cat', habitat: 'Savannah', description: 'The lion is known as the king of the jungle and lives in groups called prides.', image: 'lion.jpg' },
        { id: 3, name: 'Wild Dog', type: 'Canine', habitat: 'Various', description: 'Wild dogs, also known as painted wolves, are highly social animals with complex pack structures.', image: 'wild-dog.jpg' },
        // Adding 10 more animals
        { id: 4, name: 'Tiger', type: 'Big Cat', habitat: 'Forests', description: 'Tigers are the largest of all the big cats and are known for their distinctive orange coat with black stripes.', image: 'tiger.jpg' },
        { id: 5, name: 'Elephant', type: 'Mammal', habitat: 'Various', description: 'Elephants are the largest land animals and are known for their long trunks and large tusks.', image: 'elephant.jpg' },
        { id: 6, name: 'Giraffe', type: 'Mammal', habitat: 'Savannah', description: 'Giraffes are the tallest land animals and have long necks that help them reach leaves high up in trees.', image: 'giraffe.jpg' },
        { id: 7, name: 'Panda', type: 'Bear', habitat: 'Mountains', description: 'Pandas are known for their distinctive black and white fur pattern and are native to China.', image: 'panda.jpg' },
        { id: 8, name: 'Kangaroo', type: 'Marsupial', habitat: 'Australia', description: 'Kangaroos are marsupials known for their powerful hind legs and large feet, which they use for hopping.', image: 'kangaroo.jpg' },
        { id: 9, name: 'Zebra', type: 'Mammal', habitat: 'Grasslands', description: 'Zebras are known for their distinctive black and white stripes and live in large herds on the grasslands of Africa.', image: 'zebra.jpg' },
        { id: 10, name: 'Polar Bear', type: 'Bear', habitat: 'Arctic', description: 'Polar bears are the largest land carnivores and are well-adapted to life in the Arctic, with thick fur and layers of fat for insulation.', image: 'polar-bear.jpg' },
        { id: 11, name: 'Red Fox', type: 'Canine', habitat: 'Various', description: 'Red foxes are adaptable animals found in a variety of habitats, known for their bushy tails and reddish fur.', image: 'red-fox.jpg' },
        { id: 12, name: 'Hippopotamus', type: 'Mammal', habitat: 'Rivers and Lakes', description: 'Hippopotamuses are large, semi-aquatic mammals known for their barrel-shaped bodies and large mouths.', image: 'hippopotamus.jpg' },
        { id: 13, name: 'Penguin', type: 'Bird', habitat: 'Antarctica', description: 'Penguins are flightless birds that are well-adapted to life in the water, using their wings as flippers for swimming.', image: 'penguin.jpg' }
      ];
      

      setAnimals(animalData);
    } catch (error) {
      console.error('Error fetching animal data:', error);
    }
  };

  return (
    <div className="animal-profile-container">
      <div className="animal-card-container">
        {animals.map(animal => (
          <Card key={animal.id} title={animal.name} subTitle={`Type: ${animal.type} | Habitat: ${animal.habitat}`} className="animal-card">
            {/* <img src={require(`../assets/${animal.image}`).default} alt={animal.name} className="animal-image" /> */}
            <div className="p-mb-2">
              <p>{animal.description}</p>
              <Link to={`/animalProfileSpecific/${animal.id}`} className="p-button p-button-text">
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
