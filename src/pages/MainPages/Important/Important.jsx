
import style from './Important.module.scss'

const Important = () => {
  return (
    <div className={style.wrapper}>
      <p>
        Важно!
      </p>
      <p>
        "Psy-assistant" — это не скорая психологическая помощь.
        Если у вас серьезные, угрожающие вашей жизни проблемы, которые требуют немедленного решения,
        вам лучше обратиться в какую-либо из этих организаций.
      </p>
    </div>
  )
}

export default Important
