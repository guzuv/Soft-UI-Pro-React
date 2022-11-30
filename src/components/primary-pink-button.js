import React from 'react'

import PropTypes from 'prop-types'

import './primary-pink-button.css'

const PrimaryPinkButton = (props) => {
  return (
    <div className="primary-pink-button-container">
      <button className="primary-pink-button-button button ButtonSmall">
        {props.Review}
      </button>
    </div>
  )
}

PrimaryPinkButton.defaultProps = {
  Review: 'Review',
}

PrimaryPinkButton.propTypes = {
  Review: PropTypes.string,
}

export default PrimaryPinkButton
