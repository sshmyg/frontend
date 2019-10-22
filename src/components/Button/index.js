import { createElement } from 'react';
import PropTypes from 'prop-types';

export default function Button({ elementType, children, ...restProps }) {
  if (elementType === 'button' && !restProps.type) {
    restProps.type = elementType;
  }

  return createElement(elementType, restProps, children);
}

Button.propTypes = {
  elementType: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  type: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  elementType: 'button',
};
