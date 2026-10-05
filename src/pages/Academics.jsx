import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, BookOpen, GraduationCap, TrendingUp } from 'lucide-react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Excellent Results',
    text: 'Excellent results in both the CBE Program and previously in the 844 academic program.',
  },
  {
    icon: Award,
    title: 'Top National Schools',
    text: 'Our learners have been taken to some of the best National Schools in the country for Senior and Secondary School education.',
  },
  {
    icon: TrendingUp,
    title: 'Top Mathematics — Meru County',
    text: 'Top mean score in Mathematics in KCPE in Meru County in 2021, 2022 & 2023.',
  },
  {
    icon: BookOpen,
    title: 'Top Science — 2023',
    text: 'Top mean score in Science in the 2023 KCPE results.',
  },
]

function Academics() {
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
              <h1 className="who-heading">Our academics</h1>

              {/* Arial paragraphs with clear spacing */}
              <div className="academics-body">
                <p>
                  We have produced excellent results in both the CBE Program and
                  previously in the 8-4-4 academic program, and have taken our
                  learners to some of the best National Schools in the country
                  for Senior and Secondary School education, where they have
                  excelled and secured admissions in some of the top universities
                  in the country.
                </p>

                <p>
                  Our school produced the top mean scores in mathematics in KCPE
                  in Meru County in 2021, 2022 &amp; 2023, and also produced the
                  top mean score in science in the 2023 KCPE results.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: The Image */}
          <div className="page-hero-image">
            <img src="/images/barner.webp" alt="Academics at Africa Elite Schools" />
          </div>

          {/* Breadcrumb */}
          <div className="page-hero-breadcrumb">
            <div className="container">
              <span>Home</span>
              <span className="sep">›</span>
              <span>Our Academics</span>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="section">
          <div className="container narrow">
            <div className="academics-highlights">
              {highlights.map((h, i) => {
                const Icon = h.icon
                return (
                  <motion.article
                    key={h.title}
                    className="academics-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="academics-icon">
                      <Icon size={22} />
                    </div>
                    <h3>{h.title}</h3>
                    <p>{h.text}</p>
                  </motion.article>
                )
              })}
            </div>

            <div className="academics-link-block">
              <h2>Our Previous Academic Performance</h2>
              <p>View our KCPE results from 2021, 2022, and 2023.</p>
              <Link to="/previous-academics" className="btn btn-primary">
                View Results <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default Academics