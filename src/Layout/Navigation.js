import React from 'react'
import styled from 'styled-components'
import { Position, Popover, Menu, Button } from 'evergreen-ui'
import { Link } from 'gatsby'
import { AiFillGithub, AiOutlineMenu } from 'react-icons/ai'
import { DiOpensource } from 'react-icons/di'

const TopBar = styled.div`
  align-items:center;
  background-color:rgb(255, 255, 255);
  box-shadow:rgba(67, 90, 111, 0.37) 0px 0px 1px 0px, rgba(67, 90, 111, 0.2) 0px 2px 4px -2px;
  color:rgb(67, 90, 111);
  display:flex;
  height:7vh;
  line-height:16px;
  padding:0 10%;
  position:sticky;
  text-size-adjust:100%;
  width:100vw;
`

const TopBarNav = styled.nav`
  color:rgb(67, 90, 111);
  display:flex;
  flex-basis:0%;
  flex-grow:1;
  flex-shrink:1;
  height:32px;
  line-height:16px;
  position:relative;
  text-size-adjust:100%;
`

const MenuButton = styled(Button)`
  background: none !important;
  box-shadow: none !important;
`

const TopBarLink = styled(Link)`
  align-items:center;
  border-radius: 3px;
  color:rgb(66, 90, 112);
  cursor:pointer;
  display:flex;
  font-size:16px;
  height:32px;
  letter-spacing:0.4px;
  line-height:16px;
  margin-right:8px;
  padding: 10px 12px;
  text-decoration-color:rgb(66, 90, 112);
  text-decoration-line:none;
  text-decoration-style:solid;
  text-size-adjust:100%;
  text-transform:lowercase;
  
  &:hover {
    text-decoration: none;
  }

  svg {
    font-size:20px;
    margin: 0 5px;
  }
`

const TopBarLinkExternal = styled.a`
  align-items:center;
  border-radius: 3px;
  color:rgb(66, 90, 112);
  cursor:pointer;
  display:flex;
  font-size:16px;
  height:32px;
  letter-spacing:0.4px;
  line-height:16px;
  margin-right:8px;
  padding: 10px 12px;
  text-decoration-color:rgb(66, 90, 112);
  text-decoration-line:none;
  text-decoration-style:solid;
  text-size-adjust:100%;
  text-transform:lowercase;
  
  &:hover {
    text-decoration: none;
  }

  svg {
    font-size:20px;
    margin: 0 5px;
  }
`

const TopBarNavRight = styled.div`
  align-items:center;
  color:rgb(67, 90, 111);
  display:flex;
  height:32px;
  line-height:16px;
  text-size-adjust:100%;

  ${TopBarLink}, ${TopBarLinkExternal} {
      display: none !important;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) { 
    ${MenuButton} {
      display: none !important;
    }

    ${TopBarLink}, ${TopBarLinkExternal} {
      display: flex !important;
  }
  }
`

const TopBarFocus = styled(TopBarLink)`
  color:rgb(0, 0, 0) !important;
`

const Navigation = () => {
	return (
		<TopBar>
			<TopBarNav>
				<TopBarFocus to="/"><b>gatsby-apollo.</b>starter</TopBarFocus>
			</TopBarNav>
			<TopBarNavRight>
				<TopBarLink to="/examples"><DiOpensource/>Example API</TopBarLink>
				<TopBarLinkExternal href="https://github.com/toped/gatsby-apollo-starter"><AiFillGithub/>GitHub</TopBarLinkExternal>
				<Popover
					position={Position.BOTTOM_LEFT}
					content={
						<Menu>
							<Menu.Group>
								<Menu.Item>				
									<TopBarLink to="/examples"><DiOpensource/>Example API</TopBarLink>
								</Menu.Item>
								<Menu.Item>				
									<TopBarLinkExternal href="https://github.com/toped/gatsby-apollo-starter"><AiFillGithub/>GitHub</TopBarLinkExternal>
								</Menu.Item>
							</Menu.Group>
						</Menu>
					}
				>
					<MenuButton><AiOutlineMenu size={20}/></MenuButton>
				</Popover>
			</TopBarNavRight>
		</TopBar>
	)
}

export default Navigation
