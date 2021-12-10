import style from './СhoiceSpecialist.module.scss'
import Container from '../../../UI/Container/Container'

import H2 from '../../../UI/H2/H2'
import Button from '../../../UI/Button/Button'


const СhoiceSpecialist = () => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.container}>
          <H2 className={style.h2}>Как подобрать специалиста?</H2>
          <div className={style.wrapper}>
            <ul className={style.list}>
              <li className={`${style.item} ${style.active}`}>
                <div className={style.text}>
                  <p className={style.textTitle}>
                    Шаг 1
                  </p>
                  <p className={style.textSubtitle}>
                    Заполните анкету
                  </p>
                </div>
              </li>
              <li className={style.item}>
                <div className={style.text}>
                  <p className={style.textTitle}>
                    Шаг 2
                  </p>
                  <p className={style.textSubtitle}>
                    Алгоритм выдаст 3-4 подходящих специалистов
                  </p>
                </div>
              </li>
              <li className={style.item}>
                <div className={style.text}>
                  <p className={style.textTitle}>
                    Шаг 3
                  </p>
                  <p className={style.textSubtitle}>
                    Выберите специалиста
                    и время консультации
                  </p>
                </div>
              </li>
            </ul>
            <div className={style.subwrapper}>
              <h3 className={style.subtitle}>
                На какую тему вы хотели бы поговорить?
              </h3>
              <ul className={style.sublist}>
                <li className={style.subitem}>
                  <label className={style.label}>
                    <input type="radio" className={style.radio} />
                    <span className={style.radioItem}>
                      Карьерная мотивация
                    </span>
                  </label>
                </li>
                <li className={style.subitem}>
                  <label className={style.label}>
                    <input type="radio" className={style.radio} />
                    <span className={style.radioItem}>
                      Отношения с родителями
                    </span>
                  </label>
                </li>
                <li className={style.subitem}>
                  <label className={style.label}>
                    <input type="radio" className={style.radio} />
                    <span className={style.radioItem}>
                      Собственная самооценка
                    </span>
                  </label>
                </li>
                <li className={style.subitem}>
                  <label className={style.label}>
                    <input type="radio" className={style.radio} />
                    <span className={style.radioItem}>
                      Романтические отношения
                    </span>
                  </label>
                </li>
                <li className={style.subitem}>
                  <label className={style.label}>
                    <input type="radio" className={style.radio} />
                    <span className={style.radioItem}>
                      Сексуальные отношения
                    </span>
                  </label>
                </li>
                <li className={style.subitem}>
                  <label className={style.label}>
                    <input type="radio" className={style.radio} />
                    <span className={style.radioItem}>
                      Депрессия
                    </span>
                  </label>
                </li>
                <li className={style.subitem}>
                  <label className={style.label}>
                    <input type="radio" className={style.radio} />
                    <span className={style.radioItem}>
                      Хроническая усталость
                    </span>
                  </label>
                </li>
                <li className={style.subitem}>
                  <label className={style.label}>
                    <input type="radio" className={style.radio} />
                    <span className={style.radioItem}>
                      Чувство тревоги
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.slider}>
            <p className={style.subtext}>Вы сможете подобрать специалиста вручную</p>
            <div className={style.buttons}>
              <Button className='circle_previous' disabled></Button>
              <Button className='circle'></Button>
            </div>
          </div>
          <Button className='dark'>
            Подобрать своего специалиста
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default СhoiceSpecialist
