import React from 'react'
import PropTypes from 'prop-types'

const Product = props =>
  <div>
    <p>{props.name}</p>
    <p>{props.producer}</p>
    <p>{props.hasWatermark}</p>
    <p>{props.color}</p>
    <p>{props.weight}</p>
  </div>

const weightValidator = isRequired => (
  function (props, propName, componentName) {
    if (props[propName] == null && isRequired) {
      return new Error('Weight is required but was given null.')
    }
    else if (typeof props[propName] !== 'number') {
      return new Error('Weight must be a number')
    }
    else if (props[propName] < 80 || props[propName] > 300) {
      return new Error(
        'Weight must be a number in between the range of 80 and 300.'
      )
    }
  }
)
const weightType = weightValidator(false)
weightType.isRequired = weightValidator(true)


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightType.isRequired
}

Product.defaultProps = {
  hasWatermark: false
}

export default Product
