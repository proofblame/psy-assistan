import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './P.module.scss';

const P = ({ children, className }) => {
  const classes = classNames(style[className]);

  return <p className={classes}>{children}</p>;
};

P.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

P.defaultProps = {
  children: 'Заголовок',
  className: '',
};

export default P;
