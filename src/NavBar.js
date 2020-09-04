import Link from 'next/link'
import router from 'next/router'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import styled from 'styled-components'

const BrandTitle = styled('h1')`
  line-height: 1;
  background-color: ${({ theme }) => theme.colors.paper};
  padding: 15px;
  span {
    font-size: 1.3rem;
  }
`

const ScrollTo = styled(motion.span)`
  display: inline-block;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 3px;
  padding: 3px 10px;
  margin: 10px 10px;
  :hover {
    background-color: ${({ theme }) => theme.colors.paper_variant};
    color: ${({ theme }) => theme.colors.secondary};
  }
  transition: all 0.5s;
`

const Nav = styled('nav')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const PageLink = styled('a')`
  display: inline-block;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 3px;
  padding: 3px 10px;
  margin: 10px 10px;
  :hover {
    background-color: ${({ theme }) => theme.colors.paper_variant};
    color: ${({ theme }) => theme.colors.secondary};
  }
  transition: all 0.5s;
`

const Header = styled('header')`
  max-width: 100%;
  padding: 5%;
`

const NavBar = () => {
  const [currentRoute, setCurrentRoute] = useState('')
  useEffect(() => {
    setCurrentRoute(router.pathname)
  })
  return (

    <Header>
      <Link href='/'>
        <a>
          <BrandTitle><nobr>Make A Plan</nobr><br /><span>Academy</span> </BrandTitle>
        </a>
      </Link>
      <h3> At home educational facilitators who work to create the optimal at-home learning environment.</h3>
      <Nav>
        {
          currentRoute === '/'
            ? <>
              <ScrollTo>
                <ScrollLink
                  style={{ color: 'inherit' }}
                  offset={-550}
                  duration={750} to='services'
                >
        Services
                </ScrollLink>
              </ScrollTo>

              <ScrollTo>
                <ScrollLink
                  style={{ color: 'inherit' }}
                  offset={-550}
                  duration={750} to='about'
                >
        About
                </ScrollLink>
              </ScrollTo>

              <ScrollTo>
                <ScrollLink
                  style={{ color: 'inherit' }}
                  offset={-550}
                  duration={750} to='facilitators'
                >
        Facilitators
                </ScrollLink>
              </ScrollTo>

              <ScrollTo>
                <ScrollLink
                  style={{ color: 'inherit' }}
                  offset={-550}
                  duration={750} to='financials'
                >
        Tuition
                </ScrollLink>
              </ScrollTo>
              </>// eslint-disable-line
            : <Link href='/'>
              <PageLink>Home</PageLink>
            </Link>//eslint-disable-line
        }

        <Link href='/contact'>
          <PageLink>Contact Us</PageLink>
        </Link>

      </Nav>

    </Header>
  )
}
export default NavBar
