import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const slides = [
  // ─── 1 — Brand Opener ───
  { image: '/images/mainimagerefined.webp', tagline: 'Transforming Learners into Achievers, Leaders & Agents of Change', duration: 9000 },

  // ─── 2 — Child Friendly ───
  { image: '/images/classinsession.webp', tagline: 'We provide a child-friendly learning environment.', duration: 5000 },

  // ─── 3 — Digital Knowledge ───
  { image: '/images/computerclassinsession.webp', tagline: 'We empower our learners with digital knowledge', duration: 5000 },

  // ─── 4 — Chess ───
  { image: '/images/chess.webp', tagline: 'We empower our learners with sharp critical and problem-solving skills', duration: 5000 },

  // ─── 5 — Computer Class 2 ───
  { image: '/images/computerclassinsession2.webp', tagline: 'We empower our learners with digital knowledge', duration: 5000 },

  // ─── 6 — Dart ───
  { image: '/images/dart.webp', tagline: 'We nurture concentration, articulation and focus', duration: 5000 },

  // ─── 7 — Public Speaking ───
  { image: '/images/studentsconfidentlypresenting.webp', tagline: 'We nurture courage, self-confidence and public speaking skills', duration: 5000 },

  // ─── 8 — Grooming ───
  { image: '/images/studentsinteracting.webp', tagline: 'We pride in grooming our learners', duration: 5000 },

  // ─── 9 — Creativity & Authenticity (1) ───
  { image: '/images/kindergatenpresentation.webp', tagline: 'We nurture creativity and authenticity', duration: 5000 },

  // ─── 10 — Guiding & Counselling ───
  { image: '/images/mentorship.webp', tagline: 'Guiding and counselling session in progress', duration: 5000 },

  // ─── 11 — Self Defense ───
  { image: '/images/taekwondo.webp', tagline: 'We equip our learners with self-defense skills', duration: 5000 },

  // ─── 12 — Public Speaking Skills ───
  { image: '/images/presidentaddressingtheschool.webp', tagline: 'We develop public speaking skills', duration: 5000 },

  // ─── 13 — Fun Time Moments ───
  { image: '/images/swimming.webp', tagline: 'Fun time moments', duration: 5000 },

  // ─── 14 — Creativity & Authenticity (2) ───
  { image: '/images/ballet.webp', tagline: 'We nurture creativity and authenticity', duration: 5000 },

  // ─── 15 — Creativity & Authenticity (3) ───
  { image: '/images/ballletpresentation.webp', tagline: 'We nurture creativity and authenticity', duration: 5000 },

  // ─── 16 — Creativity & Authenticity (4) ───
  { image: '/images/culturaldancepresentation.webp', tagline: 'We nurture creativity and authenticity', duration: 5000 },

  // ─── 17 — Creativity & Authenticity (5) ───
  { image: '/images/performance.webp', tagline: 'We nurture creativity and authenticity', duration: 5000 },

  // ─── 18 — Exposure Visits ───
  { image: '/images/Exposure3.webp', tagline: 'Exposure visits', duration: 5000 },

  // ─── 19 — Identify, Grow, Polish Talents ───
  { image: '/images/studentsplayingtrumpets.webp', tagline: 'We identify, grow and polish talents', duration: 5000 },

  // ─── 20 — Creativity & Authenticity (6) ───
  { image: '/images/fashionshow.webp', tagline: 'We nurture creativity and authenticity', duration: 5000 },

  // ─── 21 — Adventure & Discovery ───
  { image: '/images/exposuretomountkenya.webp', tagline: 'Learning beyond the classroom – Adventure and Discovery', duration: 5000 },

  // ─── 22 — Adventure & Discovery ───
  { image: '/images/img.webp', tagline: 'Learning beyond the classroom – Adventure and Discovery', duration: 5000 },

  // ─── 23 — Learners' Presentation ───
  { image: '/images/learnerspresenting.webp', tagline: "Learners' presentation in progress", duration: 5000 },

  // ─── 24 — Music Lesson ───
  { image: '/images/musiclassongoing.webp', tagline: 'Music lesson in progress', duration: 5000 },

  // ─── 25 — Build Confidence ───
  { image: '/images/pp2.webp', tagline: 'We nurture creativity and build confidence', duration: 5000 },

  // ─── 26 — Adventure & Discovery (Moses Camp) ───
  { image: '/images/learnersatoldmosescamp.webp', tagline: 'Learning beyond the classroom – Adventure and Discovery', duration: 5000 },

  // ─── 27 — Learners' Presentation ───
  { image: '/images/learnerspresenting2.webp', tagline: "Learners' presentation in progress", duration: 5000 },

  // ─── 28 — Learning in Session ───
  { image: '/images/classinsession2.webp', tagline: 'Learning in session in progress', duration: 5000 },

  // ─── 29 — Exposure Visits ───
  { image: '/images/museumvisit.webp', tagline: 'Exposure visits', duration: 5000 },

  // ─── 30 — We Develop Talents (1) ───
  { image: '/images/israelinamusicfestivalaward.webp', tagline: 'We develop talents nurture  excellence', duration: 5000 },

  // ─── 31 — We Develop Talents (2) ───
  { image: '/images/skating.webp', tagline: 'We develop talents nurture  excellence', duration: 5000 },

  // ─── 32 — We Develop Talents (3) ───
  { image: '/images/studentmedal.webp', tagline: 'We develop talents nurture excellence', duration: 5000 },

  // ─── 33 — We Develop Talents (4) ───
  { image: '/images/studentplayingfootball.webp', tagline: 'We develop talents nurture  excellence', duration: 5000 },

  // ─── 34 — We Develop Talents (5) ───
  { image: '/images/studentplayingfootball2.webp', tagline: 'We develop talents nurture excellence', duration: 5000 },
]

function Home() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const duration = slides[current].duration || 5000
    const id = setTimeout(next, duration)
    return () => clearTimeout(id)
  }, [current, paused, next])

  return (
    <>
      <Menu />

      <main className="home-page">
        <section className="hero-slider">
          {slides.map((slide, i) => {
            const shouldRenderImage =
              i === current ||
              i === (current + 1) % slides.length ||
              i === (current - 1 + slides.length) % slides.length

            return (
              <div
                key={i}
                className={`slide${i === current ? ' active' : ''}`}
              >
                {shouldRenderImage && (
                  <img
                    src={slide.image}
                    alt=""
                    className="slide-image"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                )}
                <div className="slide-overlay" />
              </div>
            )
          })}

          <div className="hero-slider-content">
            <div className="tagline-wrap">
              {slides.map((slide, i) => (
                <h1
                  key={i}
                  className={`hero-tagline${i === current ? ' active' : ''}`}
                >
                  {slide.tagline}
                </h1>
              ))}
            </div>

            <Link to="/who-we-are" className="btn btn-primary hero-cta">
              More About Us
              <ArrowRight size={18} />
            </Link>
          </div>

          <button
            className="slide-arrow slide-arrow-left"
            onClick={prev}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-label="Previous slide"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            className="slide-arrow slide-arrow-right"
            onClick={next}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-label="Next slide"
          >
            <ChevronRight size={40} />
          </button>

          <div className="slide-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`slide-dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home