import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className="feature-card-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card-image"
      />
      <h5 className="feature-card-text HeadingThree">{props.new_prop}</h5>
    </div>
  )
}

FeatureCard.defaultProps = {
  image_src: '/playground_assets/logo-attlasian.svg',
  image_alt: 'image',
  new_prop: 'Games',
}

FeatureCard.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  new_prop: PropTypes.string,
}

export default FeatureCard
