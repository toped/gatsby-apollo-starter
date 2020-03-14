import React from 'react'
import styled from 'styled-components'
import GatsbyIcon from '../assets/img/svgs/gatsby.svg'
import GraphQLIcon from '../assets/img/svgs/graphql.svg'
import ApolloIcon from '../assets/img/svgs/apollo.svg'

const HomePageWrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 40px;
`

const Icons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	padding: 0 40px;
`

const Author = styled.div`
	font-size: 24px;
	margin: 25px 0;
`

const Plus = styled.div`
	&::after {
		content: '+';
		font-size: 48px;
		margin: 0 15px;
	}
`

const Home = () => {
	return (
		<HomePageWrapper>
			<Icons>
				<GatsbyIcon height={216} />
				<Plus />
				<GraphQLIcon height={216} />
				<Plus />
				<ApolloIcon height={216} />
			</Icons>
			<Author>Gatsby Starter by <a href="https://topedaramola.com">toped</a></Author>
		</HomePageWrapper>
	)
}

export default Home
