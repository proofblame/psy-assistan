import classNames from 'classnames';
import style from './UL.module.scss';

const List = ({ children }) => {
  // const classes = classNames(style.list, style[className]);
  return (
    <>
      <ul className={style.list}>
        {children.map((l) => {
          return (
            <li className={style.list__item} key={l.id}>
              {l.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
