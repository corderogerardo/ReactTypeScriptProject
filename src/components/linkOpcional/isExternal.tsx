import React, { Component } from 'react';
//import { Link } from 'react-router';
import isExternal from 'is-url-external';

const propTypes = {
  to: PropTypes.string.isRequired,
};

/**
 * Link that also works for external URL's
 */
export default class LinkDuo extends Component {
  render() {
    return isExternal(this.props.to) ?
      <a
        href={this.props.to}
        {...this.props}
      />
      :
      <Link {...this.props} />;
  }
}

LinkDuo.propTypes = propTypes;


zz