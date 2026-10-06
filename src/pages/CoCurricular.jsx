import { motion } from 'framer-motion'
import { Award, Music, Trophy } from 'lucide-react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const indoor = [
  { label: 'Chess', image: '/images/chess.webp' },
  { label: 'Darts', image: '/images/dart.webp' },
  
]

const outdoor = [
  { label: 'Ball games', image: '/images/studentplayingfootball.webp' },
  { label: 'Skating', image: '/images/skating.webp' },
  { label: 'Taekwondo', image: '/images/taekwondo.webp' },
]

const clubs = [

  { label: 'Ballet', image: '/images/ballet.webp' },
  { label: 'Music ', image: '/images/harp.webp' },
]

const achievements = [
  {
    icon: Trophy,
    title: 'Junior Girls Football',
    text: 'Position one in Meru County for three consecutive years, and competed in Regional Ball Games.',
    image: '/images/studentplayingfootball2.webp',
  },
  {
    icon: Award,
    title: 'Drama & Chess',
    text: 'Regional Competitions in drama and chess games.',
    image: '/images/chess.webp',
  },
  {
    icon: Music,
    title: 'National Music Festivals',
    text: 'Position 2 out of 16 in National Music Festivals.',
    image: '/images/harp.webp',
  },
]

function CoCurricular() {
  return (
    <>
      <Menu />

<main className="inner-page cocurricular-page">

        <section className="page-hero page-hero-split">
          <div className="page-hero-content">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="who-heading">Co-curricular activities</h1>

              {/* Arial body with clear paragraph spacing */}
              <div className="cocurricular-body">
                <p>
                  Our co-curricular programme gives learners the opportunity to
                  discover their strengths, explore new interests and develop
                  talents that may not emerge through academic study alone.
                </p>

                <p>
                  <strong>Indoor games:</strong> Chess, darts, draughts, Rubik's
                  and magic cubes, and word puzzles sharpen the mind, build
                  concentration and encourage creative problem-solving.
                </p>

                <p>
                  <strong>Outdoor sports:</strong> Ball games, skating and
                  taekwondo develop fitness, teamwork and sporting talent.
                </p>

                <p>
                  <strong>Debate and reading clubs:</strong> Learners form ideas,
                  express them clearly and speak with confidence in front of
                  others.
                </p>

                <p>
                  <strong>Dance and music clubs:</strong> Learners perform,
                  create and build skills that stay with them for life.
                </p>

                <p>
                  Beyond the classroom, every experience is an opportunity to
                  uncover talent, build confidence and expand what learners
                  believe they can achieve.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="page-hero-image">
  <img src="/images/cocurricular.webp" alt="Africa Elite Schools" />
</div>
          <div className="page-hero-breadcrumb">
            <div className="container">
              <span>Home</span>
              <span className="sep">›</span>
              <span>Co-Curricular Activities</span>
            </div>
          </div>
        </section>

        {/* Indoor / Outdoor / Clubs Grid */}
        <section className="section cream">
          <div className="container">
            <div className="cc-grid">
              <motion.div className="cc-block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2>Indoor Activities</h2>
                <ul className="cc-thumb-list">
                  {indoor.map((i) => (
                    <li key={i.label}>
                      <div className="cc-thumb">
                        <img src={i.image} alt={i.label} />
                      </div>
                      <span>{i.label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className="cc-block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h2>Outdoor Activities</h2>
                <ul className="cc-thumb-list">
                  {outdoor.map((i) => (
                    <li key={i.label}>
                      <div className="cc-thumb">
                        <img src={i.image} alt={i.label} />
                      </div>
                      <span>{i.label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className="cc-block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <h2>Clubs</h2>
                <ul className="cc-thumb-list">
                  {clubs.map((i) => (
                    <li key={i.label}>
                      <div className="cc-thumb">
                        <img src={i.image} alt={i.label} />
                      </div>
                      <span>{i.label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="section">
          <div className="container">
            <h2 className="content-heading center">Our Achievements</h2>
            <div className="achievements-grid">
              {achievements.map((a, i) => {
                const Icon = a.icon
                return (
                  <motion.article
                    key={a.title}
                    className="achievement-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="achievement-image">
                      <img src={a.image} alt={a.title} />
                    </div>
                    <div className="achievement-icon">
                      <Icon size={20} />
                    </div>
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default CoCurricular