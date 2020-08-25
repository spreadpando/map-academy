// import { useRef } from 'react'
import styled from 'styled-components'
import NavBar from '../src/NavBar'
import ContactForm from '../src/ContactForm'
import Footer from '../src/Footer'

const RootContainer = styled('div')`
  width: 100%;
  padding: 0 3rem;
`

const Home = ({ components }) => {
  // const svcRef = useRef(null)
  // const aboutRef = useRef(null)
  // const fscRef = useRef(null)

  return (
    <RootContainer>
      <NavBar />
      <ContactForm />
      <Footer />
    </RootContainer>
  )
}
export default Home
