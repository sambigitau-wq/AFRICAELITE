import { motion } from 'framer-motion'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const results = [
  {
    year: '2021',
    rows: [
      ['Mathematics', '82.81'],
      ['English', '67.69'],
      ['Kiswahili', '72.00'],
      ['Science', '67.31'],
      ['SST/RE', '73.31'],
      ['School Mean Score', '363.13'],
      ['Top Score', '405'],
      ['Least Score', '313'],
      ['No. of Candidates', '17'],
    ],
  },
  {
    year: '2022',
    rows: [
      ['Mathematics', '83.59'],
      ['English', '71.63'],
      ['Kiswahili', '58.5'],
      ['Science', '70.90'],
      ['SST/RE', '71.36'],
      ['School Mean Score', '355.86'],
      ['Top Score', '390'],
      ['Least Score', '317'],
      ['No. of Candidates', '22'],
    ],
  },
  {
    year: '2023',
    rows: [
      ['Mathematics', '89.53'],
      ['English', '74.57'],
      ['Kiswahili', '71.57'],
      ['Science', '74.60'],
      ['SST/RE', '77.83'],
      ['School Mean Score', '388.10'],
      ['Top Score', '412'],
      ['Least Score', '342'],
      ['No. of Candidates', '30'],
    ],
  },
]

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
            <div className="kcpe-card">
              <div className="kcpe-columns">
                {results.map((r) => (
                  <div key={r.year} className="kcpe-column">
                    <div className="kcpe-col-header">
                      <span className="kcpe-col-year">{r.year}</span>
                      <span className="kcpe-col-label">KCPE</span>
                      <span className="kcpe-col-sub">MEAN SCORES</span>
                    </div>
                    <ul className="kcpe-col-list">
                      {r.rows.map(([label, value]) => (
                        <li key={label}>
                          <span>{label}</span>
                          <span className="dash">-</span>
                          <span className="val">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="kcpe-candidates-note">
                Learners with 400 Mark and above: <strong>11</strong>
              </p>
            </div>

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

          </div>
        </section>


      </main>

      <Footer />
    </>
  )
}

export default PreviousAcademics