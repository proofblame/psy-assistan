import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Li.module.scss';

const Li = ({ children, className }) => {
  const classes = classNames(style.listItem, className);
  return <li className={classes}>{children}</li>;
};

Li.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Li.defaultProps = {
  children: '',
  className: '',
};

export default Li;
