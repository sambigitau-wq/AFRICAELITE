import { motion } from 'framer-motion'
import { ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <Menu />

      <main className="inner-page">

        {/* Brookhurst-Style Hero: Full-width image with overlaid title + breadcrumb */}
        <section className="gallery-hero">
          <div className="gallery-hero-image">
            <img src="/images/pp2grad.webp" alt="Contact Africa Elite Schools" />
          </div>

          <div className="gallery-hero-content">
            <div className="container">
              <motion.h1
                className="gallery-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Contact
              </motion.h1>
            </div>
          </div>

          <div className="page-hero-breadcrumb">
            <div className="container">
              <span>Home</span>
              <span className="sep">›</span>
              <span>Contact</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="contact-information">

              <div className="contact-card">
                <div className="contact-icon"><Phone size={21} /></div>
                <div>
                  <span>Call Us</span>
                  <a href="tel:+254741666966">+254 0741 666 966</a>
                  <a href="tel:+254701666966">+254 0701 666 966</a>
                  <a href="tel:+254736666966">+254 0736 666 966</a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon"><Mail size={21} /></div>
                <div>
                  <span>Email</span>
                  <a href="mailto:info@africaelite.org">info@africaelite.org</a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon"><MapPin size={21} /></div>
                <div>
                  <span>Address</span>
                  <p>P.O. Box 34138, 00100 Nairobi</p>
                  <p>Maua, Meru</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section cream">
          <div className="container contact-lower-grid">

            <div className="contact-form-wrapper">
              <h2 className="content-heading">Send Us A Message</h2>

              <form className="contact-form">
                <div className="form-row">
                  <input type="text" placeholder="Full Name *" required />
                  <input type="email" placeholder="Email *" required />
                </div>
                <input type="text" placeholder="Subject" />
                <textarea rows="6" placeholder="Comment or Message *" required />
                <button type="submit" className="btn btn-primary">
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            </div>

            <div className="contact-location">
              <h2 className="content-heading">Find Us</h2>
              <p className="location-address">Africa Elite Schools — Maua, Meru</p>

              <div className="map-wrapper">
                <iframe
                  title="Africa Elite Schools location"
                  src="https://www.google.com/maps?q=Africa%20Elite%20Schools%2C%20Maua%2C%20Meru&z=12&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </section>

        <section className="contact-final-cta">
          <div className="container">
            <div className="final-cta-content">
              <div className="final-cta-icon"><Clock size={22} /></div>
              <div>
                <span>AFRICA ELITE SCHOOLS</span>
                <h2>Excellence is <em>our identity.</em></h2>
              </div>
              <a href="tel:+254741666966" className="btn btn-primary">
                Call Us <Phone size={17} />
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default Contact
