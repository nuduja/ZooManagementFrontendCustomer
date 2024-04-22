import React from 'react';
import '../styles/footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__parralax">
        <div className="footer__parralax-trees"></div>
        <div className="footer__parralax-moto"></div>
        <div className="footer__parralax-secondplan"></div>
        <div className="footer__parralax-premierplan"></div>
        <div className="footer__parralax-voiture"></div>
      </div>
      <div className="container">
        <div className="footer__columns">
          <div className="footer__col">
            <h3 className="footer__col-title">
              <i data-feather="shopping-bag"></i> <span>Zoo</span></h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <a href="" className="footer__nav-link">
                    Privacy Policy
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="" className="footer__nav-link">
                    Terms & Conditions
                  </a>
                </li>
                
                <li className="footer__nav-item">
                  <a href="" className="footer__nav-link">
                    Legal Notices
                  </a>
                </li>
                
              </ul>
            </nav>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">
              <i data-feather="share-2"></i> <span>Social Media</span></h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <a href="" className="footer__nav-link">
                    <i data-feather="youtube"></i><span>Youtube</span>
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="" className="footer__nav-link">
                    <i data-feather="facebook"></i><span>Facebook</span>
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="" className="footer__nav-link">
                    <i data-feather="instagram"></i><span>Instagram</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">
              <i data-feather="send"></i> <span>Contact</span></h3>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <a href="mailto:contact.laboiserie@gmail.com" className="footer__nav-link">
                    contactZoo@gmail.com
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;