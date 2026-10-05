import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const photos = [
  { image: '/images/mainimagerefined.webp', caption: 'Excellence in every dimension', maroonTop: true },

  { image: '/images/ballet.webp', caption: 'Champions are never made, they are born' },

  { image: '/images/chess.webp', caption: 'We are passionate about excellence' },
  { image: '/images/swimming.webp', caption: 'Moments of fun, fitness and freedom in the water' },
  { image: '/images/taekwondo.webp', caption: 'Building self-defence, discipline and inner strength' },
  { image: '/images/museumvisit.webp', caption: 'Broadening horizons through exposure visits' },
  { image: '/images/performance.webp', caption: 'Confidence blossoms on every stage' },
  { image: '/images/pp2grad.webp', caption: 'Celebrating milestones and building bold futures' },
  { image: '/images/mentorship.webp', caption: 'Guidance and counselling for every learner', contain: true },
  { image: '/images/kindergatenpresentation.webp', caption: 'Where creativity and authenticity are nurtured' },
  { image: '/images/classinsession.webp', caption: 'A child-friendly environment for joyful learning' },
  { image: '/images/computerclassinsession.webp', caption: 'Empowering learners with digital knowledge' },
  { image: '/images/computerclassinsession3.webp', caption: 'Hands-on technology for tomorrow’s innovators' },
  { image: '/images/dart.webp', caption: 'Fostering concentration, articulation and focus' },
  { image: '/images/studentsconfidentlypresenting.webp', caption: 'Courage, self-confidence and public speaking in action' },
  { image: '/images/studentsinteracting.webp', caption: 'Grooming learners into well-rounded individuals' },
  { image: '/images/presidentaddressingtheschool.webp', caption: 'Public speaking skills that shape future leaders' },
  { image: '/images/ballletpresentation.webp', caption: 'Creativity expressed through grace and movement' },
  { image: '/images/culturaldancepresentation.webp', caption: 'Embracing culture through creative expression' },
  { image: '/images/studentsplayingtrumpets.webp', caption: 'Talent identified, nurtured and polished' },
  { image: '/images/performance2.webp', caption: 'Talent identified, nurtured and polished' },
  { image: '/images/Exposure3.webp', caption: 'Learning moments worth remembering' },
  { image: '/images/musiclassongoing.webp', caption: 'Music lessons that strike the right chord' },
  { image: '/images/fashionshow.webp', caption: 'Creativity that builds unshakeable confidence' },
  { image: '/images/grooming.webp', caption: 'Pride in grooming well-mannered learners' },
  { image: '/images/grooming2.webp', caption: 'Pride in grooming well-mannered learners' },
  { image: '/images/exposuretomountkenya.webp', caption: 'Learning beyond the classroom — adventure and discovery' },
  { image: '/images/learnersatoldmosescamp.webp', caption: 'Learning beyond the classroom — adventure and discovery' },
  { image: '/images/student.webp', caption: 'Every learner, a story of excellence' },
  { image: '/images/pp2.webp', caption: 'Creativity and confidence start young' },
  { image: '/images/PP2INSESSION.webp', caption: 'Creativity and confidence start young' },
  { image: '/images/pp2graduation2.webp', caption: 'Creativity and confidence start young' },
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