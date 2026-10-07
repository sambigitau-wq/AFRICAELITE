import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const slides = [
  { image: '/images/mainimagerefined.webp', tagline: 'Transforming Learners into Achievers, Leaders & Agents of Change', duration: 9000, brandFont: true, maroonTop: true },

  { image: '/images/classinsession.webp', tagline: 'We provide a friendly learning environment', duration: 5000 },
  { image: '/images/classinsession3.webp', tagline: 'Learning session in progress', duration: 5000 },
  { image: '/images/computerclassinsession.webp', tagline: 'We empower our learners with digital skills', duration: 5000 },
  { image: '/images/computerclassinsession2.webp', tagline: 'Hands-on technology for a competitive market', duration: 5000 },
  { image: '/images/kindergatenpresentation.webp', tagline: 'We nurture creativity and authenticity', duration: 5000 },
  { image: '/images/learnerspresenting.webp', tagline: "Learners' presentation in progress", duration: 5000 },
  { image: '/images/learnerspresenting2.webp', tagline: "Learners' presentation in progress", duration: 5000 },
  { image: '/images/studentsconfidentlypresenting.webp', tagline: 'We build courage, nurture self-confidence and develop public speaking skills', duration: 5000 },
  { image: '/images/mentorship.webp', tagline: 'We guide and counsel our learners', duration: 5000, contain: true },
  { image: '/images/presidentaddressingtheschool.webp', tagline: 'We mentor leadership', duration: 5000 },

  { image: '/images/chess.webp', tagline: 'We build excellence out of our learners', duration: 5000 },
  { image: '/images/dart.webp', tagline: 'Fostering concentration, articulation and focus', duration: 5000 },
  { image: '/images/taekwondo.webp', tagline: 'We equip our learners with self-defence skills', duration: 5000 },
  { image: '/images/swimming.webp', tagline: 'Fun, outside classroom walls', duration: 5000 },
  { image: '/images/studentsinteracting.webp', tagline: 'We prepare our learners for the global market', duration: 5000 },
  { image: '/images/grooming.webp', tagline: 'We groom physically, we build character, we nurture confidence', duration: 5000 },
  { image: '/images/grooming2.webp', tagline: 'We groom physically, we build character, we nurture confidence', duration: 5000 },

  { image: '/images/musiclassongoing.webp', tagline: 'We train diverse musical instruments', duration: 5000 },
  { image: '/images/studentsplayingtrumpets.webp', tagline: 'Talent identified, nurtured and polished', duration: 5000 },
  { image: '/images/trumpets2.webp', tagline: 'We identify, grow and polish talents', duration: 5000 },

  { image: '/images/ballet.webp', tagline: 'Champions are never born; they are made', duration: 5000 },
  { image: '/images/ballletpresentation.webp', tagline: 'We identify and develop learners’ talents', duration: 5000 },
  { image: '/images/performance.webp', tagline: 'Indian dance in action', duration: 5000 },
  { image: '/images/culturaldancepresentation.webp', tagline: 'Confidence blossoms on every stage', duration: 5000 },
  { image: '/images/performance2.webp', tagline: 'Drama skills in action', duration: 5000 },
  { image: '/images/fashionshow.webp', tagline: 'We nurture creativity and confidence', duration: 5000 },

  { image: '/images/museumvisit.webp', tagline: 'Broadening horizons through exposure visits', duration: 5000 },
  { image: '/images/Exposure3.webp', tagline: 'Learning through exposure visits', duration: 5000 },
  { image: '/images/exposuretomountkenya.webp', tagline: 'Learning beyond the classroom — adventure and discovery', duration: 5000 },
  { image: '/images/climbingmtkenya.webp', tagline: 'Climbing Mt Kenya adventure', duration: 5000 },
  { image: '/images/atoldmoses.webp', tagline: 'At the old Moses Camp - 3300 meters above sea level', duration: 5000 },
  { image: '/images/img.webp', tagline: 'At the old Moses Camp - 3300 meters above sea level', duration: 5000 },
  { image: '/images/learnersatoldmosescamp.webp', tagline: 'Learning beyond the classroom — adventure and discovery', duration: 5000 },

  { image: '/images/pp2.webp', tagline: 'We nurture creativity, confidence, and excellence from an early age', duration: 5000 },
  { image: '/images/pp2grad.webp', tagline: 'Celebrating milestones and building bold futures', duration: 5000 },
  { image: '/images/pp2graduation2.webp', tagline: 'We nurture creativity, confidence, and excellence from an early age', duration: 5000 },
  { image: '/images/cocurricular.webp', tagline: 'We develop talents and nurture excellence', duration: 5000 },
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
            const shouldRender =
              i === current ||
              i === (current + 1) % slides.length ||
              i === (current - 1 + slides.length) % slides.length

            return (
              <div
                key={i}
                className={`slide${i === current ? ' active' : ''}${slide.maroonTop ? ' slide-maroon-top' : ''}`}
              >
                {shouldRender && (
                  slide.collage ? (
                    <div className="slide-collage">
                      {slide.collage.map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt=""
                          className="slide-collage-item"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  ) : slide.contain ? (
                    <>
                      <img
                        src={slide.image}
                        alt=""
                        className="slide-image-backdrop"
                        aria-hidden="true"
                      />
                      <img
                        src={slide.image}
                        alt=""
                        className="slide-image mentorship-full"
                        loading={i === 0 ? 'eager' : 'lazy'}
                      />
                    </>
                  ) : (
                    <img
                      src={slide.image}
                      alt=""
                      className="slide-image"
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  )
                )}
                <div className="slide-overlay" />
              </div>
            )
          })}

          <div className="hero-slider-content">
            <div className="tagline-wrap">
              {slides.map((slide, i) => (
                <p
                  key={i}
                  className={`hero-tagline${i === current ? ' active' : ''}${slide.brandFont ? ' brand-font' : ''}`}
                >
                  {slide.tagline}
                </p>
              ))}
            </div>
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