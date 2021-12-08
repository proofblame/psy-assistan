import classNames from 'classnames';
import style from './H3.module.scss';

const H3 = ({ children, className }) => {
  const classes = classNames(style.color, style.paddings, style[className]);

  return <h3 className={classes}>{children}</h3>;
};

export default H3;
