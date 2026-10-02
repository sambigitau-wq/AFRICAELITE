import { motion } from 'framer-motion'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function EducationProgram() {
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
              <h1 className="who-heading">Our education program</h1>

              <div className="academics-body">
                <p>
                  From the first steps in Play Group through Junior School,
                  learners follow Kenya's{' '}
                  <em>Competency-Based Education (CBE)</em> curriculum within a
                  structured journey designed to support every stage of their
                  growth. Our Early Years programme includes Play Group, PP1 and
                  PP2, followed by Primary School from Grade 1 to Grade 6 and
                  Junior School from Grade 7 to Grade 9.
                </p>

                <p>
                  Our day and boarding programmes offer the flexibility to
                  choose an environment that best suits the child, without
                  compromising on the quality of their educational experience.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: The Image */}
          <div className="page-hero-image">
            <img
              src="/images/classinsession.webp"
              alt="Education Program at Africa Elite Schools"
            />
          </div>

          {/* Breadcrumb */}
          <div className="page-hero-breadcrumb">
            <div className="container">
              <span>Home</span>
              <span className="sep">›</span>
              <span>Our Education Program</span>
            </div>
          </div>

        </section>

      </main>

      <Footer />
    </>
  )
}

export default EducationProgram