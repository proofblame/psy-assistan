import classNames from 'classnames';
import style from './Li.module.scss';

const Li = ({ children, className }) => {
  const classes = classNames(style.listItem, style[className]);
  return <li className={classes}>{children}</li>;
};

export default Li;