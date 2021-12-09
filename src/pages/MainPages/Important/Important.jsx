import Container from '../../../UI/Container/Container'
import style from './Important.module.scss'

const Important = () => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.wrapper}>
          <p className={style.title}>
            Важно!
          </p>
          <p className={style.text}>
            "Psy-assistant" — это не скорая психологическая помощь.
            Если у вас серьезные, угрожающие вашей жизни проблемы, которые требуют немедленного решения,
            вам лучше обратиться в какую-либо из этих организаций.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Important
