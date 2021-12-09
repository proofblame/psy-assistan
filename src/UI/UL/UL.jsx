import classNames from 'classnames';
import style from './UL.module.scss';
import Li from './Li/Li';

const UL = ({ children, isArray = false, className }) => {
  const classes = classNames(style.list, style[className]);
  return (
    <>
      <ul className={classes}>
        {isArray === true ? (
          children.map((l) => {
            return (
              <Li className={'listItem_separated'} key={l.id}>
                {l.text}
              </Li>
            );
          })
        ) : (
          <>{children}</>
        )}
      </ul>
    </>
  );
};

export default UL;
