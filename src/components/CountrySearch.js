import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'
import { Pane, Heading, Text, Combobox, Button, Spinner } from 'evergreen-ui'
import CountryDialog from './CountryDialog'
import { GET_COUNTRIES } from '../graphql/quries'

const SearchContainer = styled.div`
	display: flex;
	width: 100%;
	padding: 1rem 5%;

	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) { 
		width: 50%;
 	}
`

const CountrySearch = () => {

	const { loading, error, data } = useQuery(GET_COUNTRIES, {
		onCompleted: () => {
			console.log(data)
			
		}
	})

	const [showDialog, setShowDialog] = useState(false)
	const [selectedCountry, setSelectedCountry] = useState({})
	
	if (error) return (
		<Pane display="flex" flexDirection="column" width="100vw" paddingY="10rem" justifyContent="center" alignItems="center">
			<Heading fontSize={24}>Error contacting demo API</Heading>
			<Text marginY=".5rem">Sorry for the inconvenience. Please try again later.</Text>
		</Pane>
	)

	if (loading) return (
		<Pane display="flex" flexDirection="column" width="100vw" paddingY="10rem" justifyContent="center" alignItems="center">
			<Spinner/>
		</Pane>
	)

	return (
		<Pane display="flex" flexDirection="column" width="100vw" paddingY="10rem" justifyContent="center" alignItems="center">
			<Heading fontSize={24}>Explore Countries</Heading>
			<Text marginY=".5rem">🌎 Public GraphQL API for information about countries</Text>
			<SearchContainer>
				<Combobox
					placeholder="Select a country to learn more..."
					width="100%"
					initialSelectedItem={null}
					items={data.countries}
					itemToString={item => item ? item.name : ''}
					onChange={selectedItem => {setShowDialog(true); setSelectedCountry(selectedItem)}}
					autocompleteProps={{popoverMinWidth:50}}
				/>
			</SearchContainer>
			<Pane display="flex">
				<Button appearance="primary" marginRight=".5rem">Explore using GraphQL Playground!</Button>
			</Pane>
			<CountryDialog 
				showDialog={showDialog} 
				country={selectedCountry} 
				closeDialog={()=>{setShowDialog(false)}}
			/>
		</Pane>
	)
}

export default CountrySearch
