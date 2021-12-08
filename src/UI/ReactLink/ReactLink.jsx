import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './ReactLink.module.scss'
import { Link, NavLink } from 'react-router-dom'

const ReactLink = ({
  children, onClick, className, disabled, active, ...attr
}) => {
  const onClickAction = e => {
    if (disabled) {
      e.preventDefault()
    } else {
      return onClick(e)
    }
  }

  const classes = classNames(
    style.link,
    className,
    { active },
  )

  const Tag = attr.nav ? NavLink : Link

  return (
    <Tag
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
      {...attr}
    >
      {children}
    </Tag>
  )
}

ReactLink.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
}

ReactLink.defaultProps = {
  children: 'Ссылка',
  onClick: () => { },
  className: '',
  disabled: false,
  active: false,
}

export default ReactLink
