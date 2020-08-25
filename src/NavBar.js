import Link from 'next/link'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import styled from 'styled-components'

const BrandTitle = styled('h1')`
  line-height: 0.8;
  span {
    font-size: 1.3rem;
  }
`

const ScrollTo = styled(motion.span)`
  display: inline-block;
  border: 2px solid #000;
  border-radius: 3px;
  padding: 3px 10px;
  margin: 10px 10px;
`

const Nav = styled('nav')`
  display: flex;
  flex-wrap: wrap;
`

const PageLink = styled('a')`
  display: inline-block;
  border: 2px solid #000;
  border-radius: 3px;
  padding: 3px 10px;
  margin: 10px 10px;
`

const Header = styled('header')`
  max-width: 100%;
`

const NavBar = ({ scrollOne, scrollTwo, scrollThree, scrollFour }) => {
  return (
    <Header>
      <BrandTitle><nobr>Make A Plan</nobr><br /><span>Academy</span> </BrandTitle>
      <h3> At home educational facilitators who work to create the optimal at-home learning environment.</h3>
      <Nav>
        <div>
          <ScrollTo>
            <ScrollLink
              offset={-550}
              duration={750} to='services'
            >
        Services
            </ScrollLink>
          </ScrollTo>

          <ScrollTo>
            <ScrollLink
              offset={-550}
              duration={750} to='about'
            >
        About
            </ScrollLink>
          </ScrollTo>

          <ScrollTo>
            <ScrollLink
              offset={-550}
              duration={750} to='facilitators'
            >
        Facilitators
            </ScrollLink>
          </ScrollTo>

          <ScrollTo>
            <ScrollLink
              offset={-550}
              duration={750} to='financials'
            >
        Tuition
            </ScrollLink>
          </ScrollTo>
        </div>
        <div>
          <Link href='/contact'>
            <PageLink>Contact Us</PageLink>
          </Link>
        </div>
      </Nav>

    </Header>
  )
}
export default NavBar
