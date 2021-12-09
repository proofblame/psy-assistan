import classNames from 'classnames';
import style from './UL.module.scss';

const List = ({ children, className, classList }) => {
  const classes = classNames(style.list, style[className]);
  const listClasses = classNames(style.list__item, style[classList]);
  return (
    <>
      <ul className={classes}>
        {children.map((l) => {
          return (
            <li className={listClasses} key={l.id}>
              {l.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
