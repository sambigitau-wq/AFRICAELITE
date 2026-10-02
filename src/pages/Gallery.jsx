import { motion } from 'framer-motion'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const photos = [
  // --- Original Gallery Items (Converted to WebP) ---
  { title: 'Our Learners', caption: 'Excellence in every classroom', image: '/images/mainimagerefined.webp' },
  { title: 'Ballet Dance', caption: 'Grace, discipline, and poise', image: '/images/ballet.webp' },
  { title: 'Music Performance', caption: 'Discovering musical talent', image: '/images/harp.webp' },
  { title: 'Chess Club', caption: 'Strategy and concentration', image: '/images/chess.webp' },
  { title: 'Swimming', caption: 'Building strength in the pool', image: '/images/swimming.webp' },
  { title: 'Taekwondo', caption: 'Discipline and self-defence', image: '/images/taekwondo.webp' },
  { title: 'Museum Visit', caption: 'Learning beyond the classroom', image: '/images/museumvisit.webp' },
  { title: 'School Performance', caption: 'Confidence on the stage', image: '/images/performance.webp' },
  { title: 'PP2 Graduation', caption: 'Celebrating early milestones', image: '/images/pp2grad.webp' },
  { title: 'Mentorship Session', caption: 'Guiding every learner', image: '/images/mentorship.webp' },
  { title: 'Kindergarten Presentation', caption: 'Little voices, big moments', image: '/images/kindergatenpresentation.webp' },

  // --- Brand New Additions From Your Optimized Images ---
  { title: 'Class in Session', caption: 'Interactive and engaging learning spaces', image: '/images/classinsession.webp' },
  { title: 'Computer Lab Labs', caption: 'Developing technical and digital mastery', image: '/images/computerclassinsession.webp' },
  { title: 'Tech Innovation', caption: 'Problem solving through practical technology', image: '/images/computerclassinsession2.webp' },
  { title: 'Focus & Precision', caption: 'Building concentration skills through sports', image: '/images/dart.webp' },
  { title: 'Confident Speakers', caption: 'Articulating thoughts clearly and confidently', image: '/images/studentsconfidentlypresenting.webp' },
  { title: 'Peer Interactions', caption: 'Developing healthy social and teamwork skills', image: '/images/studentsinteracting.webp' },
  { title: 'Presidential Address', caption: 'Inspirational guidance for our learners', image: '/images/presidentaddressingtheschool.webp' },
  { title: 'Ballet Presentation', caption: 'Creative expressions of art and movement', image: '/images/ballletpresentation.webp' },
  { title: 'Cultural Heritage', caption: 'Celebrating rich diversity through performance', image: '/images/culturaldancepresentation.webp' },
  { title: 'Orchestral Talents', caption: 'Harmonious training in woodwind and brass', image: '/images/studentsplayingtrumpets.webp' },
  { title: 'Live Ensemble', caption: 'Bringing music theory to life on stage', image: '/images/performance2.webp' },
  { title: 'School Features', caption: 'Documenting moments of pure excellence', image: '/images/Exposure3.webp' },
  { title: 'Trumpets', caption: 'Nurturing focused instrumental expertise', image: '/images/HARPSINGLESTUDENT.webp' },
  { title: 'Music Room Work', caption: 'Unlocking individual rhythm and cadence', image: '/images/musiclassongoing.webp' },
  { title: 'Runway Pageant', caption: 'Cultivating strong personal self-esteem', image: '/images/fashionshow.webp' },
  { title: 'Elite Grooming', caption: 'Instilling daily pride and neatness habits', image: '/images/grooming.webp' },
  { title: 'Polished Standards', caption: 'Character building through daily routines', image: '/images/grooming2.webp' },
  { title: 'Mount Kenya Expedition', caption: 'Adventure and character building outside the classroom', image: '/images/exposuretomountkenya.webp' },
  { title: 'Old Moses Camp Expedition', caption: 'Resilience, teamwork, and outdoor exploration', image: '/images/learnersatoldmosescamp.webp' },
  { title: 'Elite Student Profile', caption: 'Shaping the next generation of global citizens', image: '/images/student.webp' },
  { title: 'Early Years Foundations', caption: 'Nurturing curiosity from the very beginning', image: '/images/pp2.webp' },
  { title: 'Pre-Primary Learners', caption: 'Safe, interactive learning environments', image: '/images/PP2INSESSION.webp' },
  { title: 'Graduation Milestones', caption: 'The pride of academic advancement', image: '/images/pp2grad.webp' },
  { title: 'Celebrating Achievements', caption: 'Honoring steps taken towards big futures', image: '/images/pp2graduation2.webp' },
  { title: 'Music Festival Honors', caption: 'Recognized for national level artistic brilliance', image: '/images/israelinamusicfestivalaward.webp' }
]

function Gallery() {
  return (
    <>
      <Menu />

      <main className="inner-page">

        {/* Brookhurst-Style Hero: Full-width image with overlaid title + breadcrumb */}
        <section className="gallery-hero">
          <div className="gallery-hero-image">
            <img src="/images/mainimagerefined.webp" alt="Gallery of Africa Elite Schools" />
          </div>

          <div className="gallery-hero-content">
            <div className="container">
              <motion.h1
                className="gallery-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Gallery
              </motion.h1>
            </div>
          </div>

          <div className="page-hero-breadcrumb">
            <div className="container">
              <span>Home</span>
              <span className="sep">›</span>
              <span>Gallery</span>
            </div>
          </div>
        </section>

        {/* Masonry Gallery */}
        <section className="section">
          <div className="container">
            <div className="gallery-masonry">
              {photos.map((p, i) => (
                <motion.figure
                  key={p.title + i}
                  className="gallery-photo"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.08 }}
                >
                  <img src={p.image} alt={p.title} />
                  <div className="gallery-photo-overlay" />
                  <figcaption className="gallery-caption">
                    <strong>{p.title}</strong>
                    <span>{p.caption}</span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default Gallery
