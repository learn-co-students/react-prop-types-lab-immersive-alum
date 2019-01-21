// Code Product Component Here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        return (
            <div className="product">
                <p>Name: {this.props.name}</p>
                {this.props.producer ? <small>{this.props.producer}</small> : null}
                <p>{this.props.hasWatermark ? 'Watermarked' : 'Not watermarked'}</p>
                <p>Weight: {this.props.weight}</p>
            </div>
        );
    }
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: (props, propName) => {
      const weight = props[propName];

      if (weight === undefined) {
        return new Error('The `weight` prop is required.');
      }

      if (isNaN(weight)) {
        return new Error('The `weight` prop is not a number.');
      }

      const isValidWeight = weight > 80 && weight < 300;

      if (!isValidWeight) {
        return new Error('The `weight` prop should range between 80 and 300.');
      }
    }
};

Product.defaultProps = {
    hasWatermark: false
};

export default Product;
