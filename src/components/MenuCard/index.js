import React from 'react'
import propTypes from 'prop-types'

import Card from '../Card'
import Icon from '../Icon'

import './menucard.scss'

/**
 * Component to display a menu card.
 */
const MenuCard = ({
  onClick,
  iconColor,
  icon,
  label,
  buttonLabel,
  description,
  iconContainerColor,
}) => (
  <Card className="flex menucard" onClick={onClick}>
    <div className="flex menucard__innercontainer">
      <div
        className="menucard__iconcontainer"
        style={{ background: iconContainerColor }}
      >
        <Icon
          className="center-vertically"
          name={icon}
          height={25}
          width={25}
          color={iconColor}
        />
      </div>
      <div className="flex flex-column flex-auto menucard__textscontainer">
        <h3 className="space-stack-s menucard__text">{label}</h3>
        <p className="menucard__description">{description}</p>
      </div>
    </div>
  </Card>
)

/**
 * MenuCard custom props.
 */
MenuCard.propTypes = {
  iconColor: propTypes.string,
  iconContainerColor: propTypes.string,
  icon: propTypes.string,
  buttonLabel: propTypes.string,
  label: propTypes.string,
  onClick: propTypes.func,
  description: propTypes.string,
  smallWindow: propTypes.bool,
}

export default MenuCard
