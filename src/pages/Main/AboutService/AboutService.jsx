import style from './AboutService.module.scss'
import Container from '../../../UI/Container/Container'
import IMG from '../../../UI/IMG/IMG'
import H2 from '../../../UI/H2/H2'
import Button from '../../../UI/Button/Button'
import img from './images/aboutService-1.svg'

const AboutService = () => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.container}>
          <H2 className={style.h2}>Как устроен сервис?</H2>
          <div className={style.wrapper}>
            <IMG
              src={img} alt="Видеоконсультации"
              className={style.img}
            />
            <div className={style.subwrapper}>
              <p className={style.title}>Консультации по безопасному видеочату</p>
              <p className={style.text}>На нашей платформе видеоконсультации проходят
                в защищенном личном кабинете. Конфиденциальные сессии с вашим психологом доступны из любой точки мира.</p>
              <Button className='circle_previous' disabled></Button>
              <Button className='circle'></Button>
            </div>
          </div>
          <div className={style.button}>
            <Button className='dark'>Подобрать психолога сейчас</Button>
          </div>
          <p className={style.subtext}>Всё легко и просто!</p>
        </div>
      </Container>
    </section>
  )
}

export default AboutService
