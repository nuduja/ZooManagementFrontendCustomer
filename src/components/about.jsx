import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Avatar } from 'primereact/avatar';
import '../styles/about.css';

const About = () => {
  const teamMembers = [
    { name: 'Nuduja Mapa', position: 'Zoo Director', avatar: 'https://th.bing.com/th/id/OIP.Rd4WaPYswPlDC33LVNLpsgHaHa?rs=1&pid=ImgDetMain' },
    { name: 'Senura Wickmal', position: 'Wildlife Biologist', avatar: 'https://media.licdn.com/dms/image/D5603AQF4_PnCvr6cqg/profile-displayphoto-shrink_200_200/0/1710331023099?e=2147483647&v=beta&t=G1P0ShHHzT2ZS8E271lNyCUzvLAleRfMgTfVv5jCOsY' },
    { name: 'Chameesha Ravindu', position: 'Animal Caretaker', avatar: 'https://media.licdn.com/dms/image/D4E03AQHlSobLq-ZaOA/profile-displayphoto-shrink_200_200/0/1696862494421?e=2147483647&v=beta&t=ufoyrEO2ie9SER99MbNMnVQXw_sz_VIgG4LaPZsqif8' },
    
  ];

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <Card className="p-card">
        <ScrollPanel style={{ width: '100%', height: '300px' }}>
          <p>Welcome to our zoo! We are dedicated to providing a fun and educational experience for visitors of all ages.</p>
          <p>Our zoo is home to a diverse collection of animals from around the world, including majestic lions, playful monkeys, graceful giraffes, and colorful tropical birds.</p>
          <Divider />
          <p>At our zoo, conservation and animal welfare are top priorities. We actively participate in breeding programs to help endangered species recover, and we strive to create enriching environments that mimic the animals' natural habitats.</p>
          <Divider />
          <p>Our knowledgeable staff members are passionate about wildlife conservation and are committed to educating visitors about the importance of protecting our planet's biodiversity.</p>
          <Divider />
          <p>Whether you're exploring our exhibits, attending one of our educational programs, or simply enjoying a leisurely stroll through our beautiful grounds, we hope you leave our zoo feeling inspired to make a difference in the world.</p>
        </ScrollPanel>
      </Card>
      <h2>Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <Avatar image={member.avatar} shape="circle" size="large" className="p-mr-2" />
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default About;
