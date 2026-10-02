import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">

        <div className="footer-grid">

          <div className="footer-brand">
            <img
              src="/images/logo.webp"
              alt="Africa Elite Schools"
              className="footer-logo"
            />
            <strong>AFRICA ELITE SCHOOLS</strong>
            <span className="footer-tagline">Excellence is Our Identity</span>
            <p>
              A Private Christian School that prides in nurturing
              learners into holistic growth.
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/who-we-are">Who We Are</Link></li>
              <li><Link to="/education-program">Our Education Program</Link></li>
              <li><Link to="/our-signature">Our Signature</Link></li>
              <li><Link to="/academics">Our Academics</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>More</h4>
            <ul>
              <li><Link to="/previous-academics">Our Previous Academics</Link></li>
              <li><Link to="/co-curricular">Co-Curricular Activities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={15} />
                <a href="tel:+254741666966">+254 0741 666 966</a>
              </li>
              <li>
                <Phone size={15} />
                <a href="tel:+254701666966">+254 0701 666 966</a>
              </li>
              <li>
                <Mail size={15} />
                <a href="mailto:info@africaelite.org">info@africaelite.org</a>
              </li>
              <li>
                <MapPin size={15} />
                <span>P.O. Box 34138, 00100 Nairobi</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>Copyright © {year} Africa Elite Schools. All rights reserved.</p>
          <p className="footer-bottom-links">
            <Link to="/">Home</Link>
            <span>·</span>
            <Link to="/contact">Contact</Link>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
