import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    /* font-size: 62.5%; */
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    padding: 0;
    background: ${props => props.theme.background} !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
  }
`

const Theme = ({ theme, children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle theme={theme} />
			{children}
		</ThemeProvider>
	)
}

Theme.propTypes = {
	children: PropTypes.any,
	theme: PropTypes.any
}

export default Theme
