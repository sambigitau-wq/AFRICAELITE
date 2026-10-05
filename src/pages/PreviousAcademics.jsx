import { motion } from 'framer-motion'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const chartData = [
  { year: '2023', score: 388.10, position: 'Position 3 out of 944 Schools' },
  { year: '2022', score: 355.33, position: 'Position 17 out of 964 Schools' },
  { year: '2021', score: 363.12, position: 'Position 20 out of 978 Schools' },
]

const BASELINE = 330
const TOP = 400

function PreviousAcademics() {
  return (
    <>
      <Menu />

      <main className="inner-page">
        <section className="section previous-academics-section">
          <div className="container">

            <motion.h2
              className="content-heading center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Our previous academic performance
            </motion.h2>

            <motion.p
              className="previous-academics-lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              (When schools used to be rated)
            </motion.p>

            <div className="chart-photo-row">

              <div className="chart-block">
                <h3>AFRICA ELITE SCHOOLS</h3>
                <p className="chart-subtitle">
                  2021 – 2023 KCPE Mean Scores &amp; Position<br />
                  Attained in Meru County
                </p>

                <div className="vchart">
                  <div className="vchart-axis">
                    <span>400.00</span>
                    <span>390.00</span>
                    <span>380.00</span>
                    <span>370.00</span>
                    <span>360.00</span>
                    <span>350.00</span>
                    <span>340.00</span>
                    <span>330.00</span>
                  </div>

                  <div className="vchart-bars">
                    {chartData.map((d) => {
                      const height = ((d.score - BASELINE) / (TOP - BASELINE)) * 100
                      return (
                        <div key={d.year} className="vchart-col">
                          <div
                            className="vchart-label-wrap"
                            style={{ bottom: `${height}%` }}
                          >
                            <span className="vchart-value">{d.score.toFixed(2)}</span>
                            <span className="vchart-position">{d.position}</span>
                          </div>

                          <div
                            className="vchart-bar"
                            style={{ height: `${height}%` }}
                          />

                          <div className="vchart-year">Year {d.year}</div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="vchart-x-label">PERIOD</div>
                </div>
              </div>

              {/* Photo beside the chart */}
              <div className="performance-photo">
                <img
                  src="/images/performance1.webp"
                  alt="Africa Elite Schools top student holding her 405 KCPE score"
                  loading="lazy"
                />
            
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default PreviousAcademics