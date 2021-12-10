import PropTypes from 'prop-types';
import classNames from 'classnames';
import wrap from './Wrap.module.scss';

const Wrap = ({ children, className }) => {
  const classes = classNames(wrap.wrap, className);
  return <div className={classes}>{children}</div>;
};

Wrap.propTypes = {
  children: PropTypes.node,
};

Wrap.defaultProps = {
  children: '',
};

export default Wrap;
