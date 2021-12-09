import PropTypes from 'prop-types';
import style from './Container.module.scss';

const Container = ({ children }) => {
  return (
    <div className={style.container}>{children}</div>
  )
};

Container.propTypes = {
  children: PropTypes.node,
};

Container.dedaultProps = {
  children: null,
};

export default Container;
