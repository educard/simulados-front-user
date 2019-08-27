import React from 'react'
import cn from 'classnames'

import Icon from '../Icon'
import './button.scss'

const Button = ({
  children,
  ghost,
  disabled,
  onClick,
  icon,
  block,
  size = 'md',
  className,
}) => (
  <button
    className={cn(
      'button',
      ghost && 'button--ghost',
      block && 'button--block',
      !children && 'button--empty',
      icon && 'button--with-icon',
      size && `button--${size}`,
      className,
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {icon && (
      <span className="button__icon">
        <Icon name={icon} height={16} width={16} />
      </span>
    )}
    {children}
  </button>
)

export default Button
