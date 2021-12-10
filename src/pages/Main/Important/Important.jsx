import Container from '../../../UI/Container/Container'
import important from './Important.module.scss'

const Important = () => {
  return (
    <section className={important.section}>
      <Container>
        <div className={important.wrapper}>
          <p className={important.title}>
            Важно!
          </p>
          <p className={important.text}>
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
