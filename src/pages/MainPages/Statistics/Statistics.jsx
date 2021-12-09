import statistics from './Statistics.module.scss'
import Container from '../../../UI/Container/Container'
import IMG from '../../../UI/IMG/IMG'
import Button from '../../../UI/Button/Button'
import img from './images/statistics.svg'

const Statistics = () => {
  return (
    <section className={statistics.section}>
      <Container>
        <div className={statistics.wrapper}>
          <IMG
            src={img} alt="Статистика результатов"
            className={statistics.img}
          />
          <div className={statistics.subwrapper}>
            <p className={statistics.title}>81%</p>
            <p className={statistics.text}>наших клиентов чувствуют результат уже после пятой сессии</p>
          </div>
          <Button className='dark'>Подобрать психолога сейчас</Button>
        </div>
      </Container>
    </section>
  )
}

export default Statistics
