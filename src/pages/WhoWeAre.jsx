import { motion } from 'framer-motion'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function WhoWeAre() {
  return (
    <>
      <Menu />

      <main className="inner-page">

        <section className="page-hero page-hero-split">

          {/* Left Side: The Text */}
          <div className="page-hero-content">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="who-heading">Who we are</h1>
<p className="hero-lead-text">
  We are a <em>Private Christian School</em> that prides in nurturing
  learners into <span>holistic growth</span>. We run programs that
  actively promote; academic competence, learners' self-awareness,
  character development, intellectual growth and physical grooming
  of our learners.
</p>

<p className="hero-lead-text">
  We nurture creativity, resilience and excellence. We help every
  learner discover and develop their talents. We pride in teaching,
  inspiring and mentoring our learners.
</p>
            </motion.div>
          </div>

          {/* Right Side: The Image */}
          <div className="page-hero-image">
            <img src="/images/mainimagerefined.webp" alt="Students of Africa Elite Schools" />
          </div>

          {/* Breadcrumb */}
          <div className="page-hero-breadcrumb">
            <div className="container">
              <span>Home</span>
              <span className="sep">›</span>
              <span>Who We Are</span>
            </div>
          </div>

        </section>

      </main>

      <Footer />
    </>
  )
}

export default WhoWeAre