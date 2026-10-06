import { motion } from 'framer-motion'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const signature = [
  'Consistent academic excellence',
  'Clear, confident communication',
  'Sharp critical and problem-solving skills',
  'Strong self-discipline and responsibility',
  'Confidence and resilience',
  'Proven leadership and teamwork',
  'Sound character and integrity',
  'French proficiency',
  'Healthy, active lifestyles',
  'Outstanding talent in co-curricular activities',
]

function OurSignature() {
  return (
    <>
      <Menu />

      <main className="inner-page">

        <section className="page-hero page-hero-split">

          <div className="page-hero-content">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="who-heading">Our signature</h1>

              <p className="signature-intro">
                Our learners are known for:
              </p>

              <ul className="signature-list">
                {signature.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.05 }}
                  >
                    <span className="signature-dot" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="page-hero-image">
            <img
              src="/images/signature.webp"
              alt="Students of Africa Elite Schools"
            />
          </div>

          <div className="page-hero-breadcrumb">
            <div className="container">
              <span>Home</span>
              <span className="sep">›</span>
              <span>Our Signature</span>
            </div>
          </div>

        </section>

      </main>

      <Footer />
    </>
  )
}

export default OurSignature