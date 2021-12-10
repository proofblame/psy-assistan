import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './UL.module.scss';
import Li from './Li/Li';

const UL = ({ children, className, isArray = false }) => {
  const classes = classNames(style.list, className);
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

UL.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isArray: PropTypes.bool,
};

UL.defaultProps = {
  children: '',
  className: '',
  isArray: false,
};

export default UL;
