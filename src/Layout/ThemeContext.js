import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Theme from './Theme'

const ThemeContext = React.createContext({})

const ThemedStyles = {
	dark: {
		name: 'dark',
		background: 'black',
		color: 'white',
		blue: 'rgba(10, 132, 255, 1)',
		borderColor: '#aaa',
		secondary: '#aaa',
		tertiary: '#222',
		unfocused: '#aaa',
	},
	light: {
		name: 'light',
		background: 'white',
		color: '#454545',
		blue: 'rgba(10, 132, 255, 0.75)',
		borderColor: '#eee',
		secondary: '#444',
		tertiary: '#eee',
		unfocused: '#777',
	},
}

const ThemeContextProvider = ({ children }) => {
	const [mode, setMode] = useState('light')
	return (
		<ThemeContext.Provider value={[mode, setMode]}>
			<Theme theme={ThemedStyles[mode]}>{children}</Theme>
		</ThemeContext.Provider>
	)
}

ThemeContextProvider.propTypes = {
	children: PropTypes.any
}

export { ThemeContext, ThemeContextProvider }
