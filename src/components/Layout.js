import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Den lille prinsen" />
    <Navbar />
    <div>{children}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

export default TemplateWrapper
