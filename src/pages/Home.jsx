import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const slides = [
  { image: '/images/mainimagerefined.webp', tagline: 'Transforming Learners into Achievers, Leaders & Agents of Change', duration: 9000, brandFont: true },

  { image: '/images/classinsession.webp', tagline: 'We provide a child-friendly learning environment.', duration: 5000 },
  { image: '/images/classinsession2.webp', tagline: 'Learning session in progress', duration: 5000 },
  { image: '/images/computerclassinsession.webp', tagline: 'We empower our learners with digital knowledge', duration: 5000 },
  { image: '/images/computerclassinsession2.webp', tagline: 'We empower our learners with digital knowledge', duration: 5000 },
  { image: '/images/kindergatenpresentation.webp', tagline: 'We nurture creativity and authenticity', duration: 5000 },
  { image: '/images/learnerspresenting.webp', tagline: "Learners' presentation in progress", duration: 5000 },
  { image: '/images/learnerspresenting2.webp', tagline: "Learners' presentation in progress", duration: 5000 },
  { image: '/images/studentsconfidentlypresenting.webp', tagline: 'We nurture courage, self-confidence and public speaking skills', duration: 5000 },
  { image: '/images/mentorship.webp', tagline: 'Guiding and counselling session in progress', duration: 5000 },
  { image: '/images/presidentaddressingtheschool.webp', tagline: 'We develop public speaking skills', duration: 5000 },

  { image: '/images/chess.webp', tagline: 'We empower our learners with sharp critical and problem-solving skills', duration: 5000 },
  { image: '/images/dart.webp', tagline: 'We nurture concentration, articulation and focus', duration: 5000 },
  { image: '/images/taekwondo.webp', tagline: 'We equip our learners with self-defense skills', duration: 5000 },
  { image: '/images/swimming.webp', tagline: 'Fun time moments', duration: 5000 },
  { image: '/images/studentsinteracting.webp', tagline: 'We pride in grooming our learners', duration: 5000 },
  { image: '/images/grooming.webp', tagline: 'We pride in grooming our learners', duration: 5000 },
  { image: '/images/grooming2.webp', tagline: 'We pride in grooming our learners', duration: 5000 },

  { image: '/images/musiclassongoing.webp', tagline: 'Music lesson in progress', duration: 5000 },
  { image: '/images/studentsplayingtrumpets.webp', tagline: 'We identify, grow and polish talents', duration: 5000 },
  { image: '/images/HARPSINGLESTUDENT.webp', tagline: 'We identify, grow and polish talents', duration: 5000 },
  { image: '/images/harp.webp', tagline: 'We identify, grow and polish talents', duration: 5000 },
  { image: '/images/ballet.webp', tagline: 'We nurture creativity and authenticity', duration: 5000 },
  { image: '/images/ballletpresentation.webp', tagline: 'We nurture creativity and authenticity', duration: 5000 },
  { image: '/images/culturaldancepresentation.webp', tagline: 'We nurture creativity and authenticity', duration: 5000 },
  { image: '/images/performance.webp', tagline: 'We nurture creativity and authenticity', duration: 5000 },
  { image: '/images/performance2.webp', tagline: 'We nurture creativity and authenticity', duration: 5000 },
  { image: '/images/fashionshow.webp', tagline: 'We nurture creativity and build confidence', duration: 5000 },

  { image: '/images/museumvisit.webp', tagline: 'Exposure visits', duration: 5000 },
  { image: '/images/Exposure3.webp', tagline: 'Exposure visits', duration: 5000 },
  { image: '/images/exposuretomountkenya.webp', tagline: 'Learning beyond the classroom – Adventure and Discovery', duration: 5000 },
  { image: '/images/learnersatoldmosescamp.webp', tagline: 'Learning beyond the classroom – Adventure and Discovery', duration: 5000 },
  { image: '/images/img.webp', tagline: 'Learning beyond the classroom – Adventure and Discovery', duration: 5000 },

  { image: '/images/pp2.webp', tagline: 'We nurture creativity and build confidence', duration: 5000 },
  { image: '/images/pp2grad.webp', tagline: 'We nurture creativity and build confidence', duration: 5000 },
  { image: '/images/pp2graduation2.webp', tagline: 'We nurture creativity and build confidence', duration: 5000 },

  {
    collage: [
      '/images/israelinamusicfestivalaward.webp',
      '/images/skating.webp',
      '/images/studentmedal.webp',
      '/images/studentplayingfootball.webp',
      '/images/studentplayingfootball2.webp',
    ],
    tagline: 'We develop talents, nurture excellence',
    duration: 8000,
  },
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
                className={`slide${i === current ? ' active' : ''}`}
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