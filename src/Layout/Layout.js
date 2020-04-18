import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeContextProvider } from './ThemeContext'
import Navigation from './Navigation'

const SiteBody = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 93vh;
`

function Layout({ children }) {
	return (
		<ThemeContextProvider>
			<Navigation/>
			<SiteBody>
				{children}
			</SiteBody>
		</ThemeContextProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
