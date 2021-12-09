import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Container.module.scss';

const Container = ({ children, className }) => {
  const classes = classNames(style.container, style[className]);
  return <div className={classes}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

Container.dedaultProps = {
  children: null,
};

export default Container;
