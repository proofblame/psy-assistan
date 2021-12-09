import statistics from './Statistics.module.scss'
import Container from '../../../UI/Container/Container'
import IMG from '../../../UI/IMG/IMG'
import img from './images/statistics.svg'

const Statistics = () => {
  return (
    <section className={statistics.section}>
      <Container>
        <div className={statistics.wrapper}>
          <IMG
            src={img} alt="Статистика результатов"
          />
          <div className={statistics.subwrapper}>

          </div>
        </div>
      </Container>
    </section>
  )
}

export default Statistics
