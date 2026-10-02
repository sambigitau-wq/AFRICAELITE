import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const photos = [
    { image: '/images/mainimagerefined.webp', caption: 'Our Learners — Excellence in every classroom', maroonTop: true },
  { image: '/images/ballet.webp', caption: 'Ballet Dance — Grace, discipline, and poise' },
  { image: '/images/harp.webp', caption: 'Music Performance — Discovering musical talent' },
  { image: '/images/chess.webp', caption: 'Chess Club — Strategy and concentration' },
  { image: '/images/swimming.webp', caption: 'Swimming — Building strength in the pool' },
  { image: '/images/taekwondo.webp', caption: 'Taekwondo — Discipline and self-defence' },
  { image: '/images/museumvisit.webp', caption: 'Museum Visit — Learning beyond the classroom' },
  { image: '/images/performance.webp', caption: 'School Performance — Confidence on the stage' },
  { image: '/images/pp2grad.webp', caption: 'PP2 Graduation — Celebrating early milestones' },
  { image: '/images/mentorship.webp', caption: 'Mentorship Session — Guiding every learner' },
  { image: '/images/kindergatenpresentation.webp', caption: 'Kindergarten Presentation — Little voices, big moments' },
  { image: '/images/classinsession.webp', caption: 'Class in Session — Interactive and engaging learning spaces' },
  { image: '/images/computerclassinsession.webp', caption: 'Computer Lab — Developing technical and digital mastery' },
  { image: '/images/computerclassinsession2.webp', caption: 'Tech Innovation — Problem solving through practical technology' },
  { image: '/images/dart.webp', caption: 'Focus & Precision — Building concentration skills through sports' },
  { image: '/images/studentsconfidentlypresenting.webp', caption: 'Confident Speakers — Articulating thoughts clearly and confidently' },
  { image: '/images/studentsinteracting.webp', caption: 'Peer Interactions — Developing healthy social and teamwork skills' },
  { image: '/images/presidentaddressingtheschool.webp', caption: 'Presidential Address — Inspirational guidance for our learners' },
  { image: '/images/ballletpresentation.webp', caption: 'Ballet Presentation — Creative expressions of art and movement' },
  { image: '/images/culturaldancepresentation.webp', caption: 'Cultural Heritage — Celebrating rich diversity through performance' },
  { image: '/images/studentsplayingtrumpets.webp', caption: 'Orchestral Talents — Harmonious training in woodwind and brass' },
  { image: '/images/performance2.webp', caption: 'Live Ensemble — Bringing music theory to life on stage' },
  { image: '/images/Exposure3.webp', caption: 'School Features — Documenting moments of pure excellence' },
  { image: '/images/HARPSINGLESTUDENT.webp', caption: 'Trumpets — Nurturing focused instrumental expertise' },
  { image: '/images/musiclassongoing.webp', caption: 'Music Room Work — Unlocking individual rhythm and cadence' },
  { image: '/images/fashionshow.webp', caption: 'Runway Pageant — Cultivating strong personal self-esteem' },
  { image: '/images/grooming.webp', caption: 'Elite Grooming — Instilling daily pride and neatness habits' },
  { image: '/images/grooming2.webp', caption: 'Polished Standards — Character building through daily routines' },
  { image: '/images/exposuretomountkenya.webp', caption: 'Mount Kenya Expedition — Adventure and character building outside the classroom' },
  { image: '/images/learnersatoldmosescamp.webp', caption: 'Old Moses Camp Expedition — Resilience, teamwork, and outdoor exploration' },
  { image: '/images/student.webp', caption: 'Elite Student Profile — Shaping the next generation of global citizens' },
  { image: '/images/pp2.webp', caption: 'Early Years Foundations — Nurturing curiosity from the very beginning' },
  { image: '/images/PP2INSESSION.webp', caption: 'Pre-Primary Learners — Safe, interactive learning environments' },
  { image: '/images/pp2graduation2.webp', caption: 'Graduation Milestones — The pride of academic advancement' },
  { image: '/images/israelinamusicfestivalaward.webp', caption: 'Music Festival Honors — Recognized for national level artistic brilliance' },
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
                  <img
                    src={photo.image}
                    alt=""
                    className="gallery-slide-image"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
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