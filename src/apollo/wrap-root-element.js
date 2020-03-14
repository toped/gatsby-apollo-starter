import React from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './client'
import Layout from '../Layout/Layout'

export const wrapRootElement = ({ element }) => (
	<ApolloProvider client={client}>
		<Layout>{element}</Layout>
	</ApolloProvider>
)

wrapRootElement.propTypes = {
	element: PropTypes.any
}