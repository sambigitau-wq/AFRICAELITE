import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const photos = [
  { image: '/images/mainimagerefined.webp', caption: 'Excellence in every dimension', maroonTop: true },

  { image: '/images/classinsession.webp', caption: 'We provide a friendly learning environment' },
  { image: '/images/classinsession3.webp', caption: 'Learning session in progress' },
  { image: '/images/computerclassinsession.webp', caption: 'We empower our learners with digital skills' },
  { image: '/images/computerclassinsession2.webp', caption: 'Hands-on technology for a competitive market' },
  { image: '/images/kindergatenpresentation.webp', caption: 'We nurture creativity and authenticity' },
  { image: '/images/learnerspresenting.webp', caption: "Learners' presentation in progress" },
  { image: '/images/learnerspresenting2.webp', caption: "Learners' presentation in progress" },
  { image: '/images/studentsconfidentlypresenting.webp', caption: 'We build courage, nurture self-confidence and develop public speaking skills' },
  { image: '/images/mentorship.webp', caption: 'We guide and counsel our learners', contain: true },
  { image: '/images/presidentaddressingtheschool.webp', caption: 'We mentor leadership' },

  { image: '/images/chess.webp', caption: 'We build excellence out of our learners' },
  { image: '/images/dart.webp', caption: 'Fostering concentration, articulation and focus' },
  { image: '/images/taekwondo.webp', caption: 'We equip our learners with self-defence skills' },
  { image: '/images/swimming.webp', caption: 'Fun, outside classroom walls' },
  { image: '/images/studentsinteracting.webp', caption: 'We prepare our learners for the global market' },
  { image: '/images/grooming.webp', caption: 'We groom physically, we build character, we nurture confidence' },
  { image: '/images/grooming2.webp', caption: 'We groom physically, we build character, we nurture confidence' },

  { image: '/images/musiclassongoing.webp', caption: 'We train diverse musical instruments' },
  { image: '/images/studentsplayingtrumpets.webp', caption: 'Talent identified, nurtured and polished' },
  { image: '/images/trumpets2.webp', caption: 'We identify, grow and polish talents' },

  { image: '/images/ballet.webp', caption: 'Champions are never born; they are made' },
  { image: '/images/ballletpresentation.webp', caption: 'We identify and develop learners’ talents' },
  { image: '/images/culturaldancepresentation.webp', caption: 'Indian dance in action' },
  { image: '/images/performance.webp', caption: 'Confidence blossoms on every stage' },
  { image: '/images/performance2.webp', caption: 'Drama skills in action' },
  { image: '/images/fashionshow.webp', caption: 'We nurture creativity and confidence' },

  { image: '/images/museumvisit.webp', caption: 'Broadening horizons through exposure visits' },
  { image: '/images/Exposure3.webp', caption: 'Learning through exposure visits' },
  { image: '/images/exposuretomountkenya.webp', caption: 'Learning beyond the classroom — adventure and discovery' },
  { image: '/images/climbingmtkenya.webp', caption: 'Climbing Mt Kenya adventure' },
  { image: '/images/atoldmoses.webp', caption: 'At the old Moses Camp - 3300 meters above sea level' },
  { image: '/images/img.webp', caption: 'At the old Moses Camp - 3300 meters above sea level' },
  { image: '/images/learnersatoldmosescamp.webp', caption: 'Learning beyond the classroom — adventure and discovery' },

  { image: '/images/pp2.webp', caption: 'We nurture creativity, confidence, and excellence from an early age' },
  { image: '/images/pp2grad.webp', caption: 'Celebrating milestones and building bold futures' },
  { image: '/images/pp2graduation2.webp', caption: 'We nurture creativity, confidence, and excellence from an early age' },
  { image: '/images/excellence.webp', caption: 'We develop talents and nurture excellence' },

  /* Gallery-only extras (kept to preserve your original selection) */
  { image: '/images/student.webp', caption: 'Every learner, a story of excellence' },
  { image: '/images/israelinamusicfestivalaward.webp', caption: 'Talent developed, excellence celebrated' },
]

function Gallery() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % photos.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setTimeout(next, 5000)
    return () => clearTimeout(id)
  }, [current, paused, next])

  return (
    <>
      <Menu />

      <main className="inner-page">

        <section className="gallery-slider">
          {photos.map((photo, i) => {
            const shouldRenderImage =
              i === current ||
              i === (current + 1) % photos.length ||
              i === (current - 1 + photos.length) % photos.length

            return (
              <div
                key={i}
                className={`gallery-slide${i === current ? ' active' : ''}${photo.maroonTop ? ' gallery-slide-maroon-top' : ''}`}
              >
                {shouldRenderImage && (
                  photo.contain ? (
                    <>
                      <img
                        src={photo.image}
                        alt=""
                        className="gallery-slide-image-backdrop"
                        aria-hidden="true"
                      />
                      <img
                        src={photo.image}
                        alt=""
                        className="gallery-slide-image mentorship-full"
                        loading={i === 0 ? 'eager' : 'lazy'}
                      />
                    </>
                  ) : (
                    <img
                      src={photo.image}
                      alt=""
                      className="gallery-slide-image"
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  )
                )}
                <div className="gallery-slide-overlay" />
              </div>
            )
          })}

          <div className="gallery-slider-content">
            <div className="gallery-caption-wrap">
              {photos.map((photo, i) => (
                <p
                  key={i}
                  className={`gallery-slide-caption${i === current ? ' active' : ''}`}
                >
                  {photo.caption}
                </p>
              ))}
            </div>
          </div>

          <button
            className="gallery-arrow gallery-arrow-left"
            onClick={prev}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-label="Previous photo"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            className="gallery-arrow gallery-arrow-right"
            onClick={next}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-label="Next photo"
          >
            <ChevronRight size={40} />
          </button>

          <div className="gallery-dots">
            {photos.map((_, i) => (
              <button
                key={i}
                className={`gallery-dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default Gallery