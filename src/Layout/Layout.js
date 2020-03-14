import React from 'react'
import PropTypes from 'prop-types'

import { ThemeContextProvider } from './ThemeContext'

function Layout({ children }) {
	return (
		<ThemeContextProvider>
			<div>
				{children}
			</div>
		</ThemeContextProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
