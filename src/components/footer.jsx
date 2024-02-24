import React from 'react';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { ListBox } from 'primereact/listbox';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-cards-container">
        <Card className="footer-card" title="About Us">
          <p>Discover the wonders of wildlife at our zoo. Learn about our mission, history, and conservation efforts.</p>
        </Card>
        <Divider />
        <Card className="footer-card" title="Visit Us">
          <p>Plan your visit and get directions to our zoo. Check our opening hours and admission prices.</p>
        </Card>
        <Divider />
        <Card className="footer-card" title="Contact Us">
          <p>Get in touch with us for inquiries, feedback, and support. Follow us on social media for the latest updates.</p>
        </Card>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Zoo Name. All rights reserved.</p>
        <Button label="Terms of Service" className="p-button-text" />
        <Button label="Privacy Policy" className="p-button-text" />
        <Button label="Accessibility" className="p-button-text" />
      </div>
    </footer>
  );
};

export default Footer;
