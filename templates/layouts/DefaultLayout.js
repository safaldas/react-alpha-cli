module.exports = `import React from 'react'
import PropTypes from 'prop-types';
import Header from '../components/shared/DefaultLayout/Header'

export default function DefaultLayout({ children }) {
    return (<div><Header />{children}</div>)
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired
}`