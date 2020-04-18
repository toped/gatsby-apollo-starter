import React from 'react'
import styled from 'styled-components'
import { Heading, Link } from 'evergreen-ui'
import GatsbyIcon from '../assets/img/svgs/gatsby.svg'
import GraphQLIcon from '../assets/img/svgs/graphql.svg'
import ApolloIcon from '../assets/img/svgs/apollo.svg'

const HomePageWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin: 0 10%;
`

const StarterDescription = styled(Heading)`
	display:block !important;
	font-size:3rem !important;
	font-style:normal !important;
	font-weight:300 !important;
	line-height: inherit !important;
	width:100% !important;

	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) { 
		width:50% !important;
 	}

	span:first-child {
		color: rgba(109, 79, 152, .7) !important;
		font-weight: bold;
	}

	span:nth-child(2) {
		color: rgba(239, 53, 171, .7) !important;
		font-weight: bold;
	}

`

const Icons = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 10px 0;
`

const Author = styled.div`
	font-size: 24px;
	margin: 25px 0;

	a {
		font-size: 24px !important;
		color: inherit !important;
		text-decoration: none;
	}
`

const Plus = styled.div`
	&::after {
		content: '+';
		font-size: 16px;
		margin: 0 10px;
	}
`

const Home = () => {
	return (
		<HomePageWrapper>
			<StarterDescription>
					An opinionated <span>gatsby starter</span> with <span>apollo graphql</span> integration. Happy coding! 
				<Author>created by <Link href="https://topedaramola.com">toped</Link></Author>
			</StarterDescription>
			<Icons>
				<GatsbyIcon height={36} />
				<Plus />
				<GraphQLIcon height={36} />
				<Plus />
				<ApolloIcon height={36} />
			</Icons>
			{/* <Author>Gatsby Starter by <a href="https://topedaramola.com">toped</a></Author> */}
		</HomePageWrapper>
	)
}

export default Home
