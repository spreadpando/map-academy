import styled from 'styled-components'
import NavBar from '../src/NavBar'
import ContactForm from '../src/ContactForm'
import Footer from '../src/Footer'

const RootContainer = styled('div')`
  width: 100%;
  padding: 0 3rem;
`

const Home = ({ components }) => {
  return (
    <RootContainer>
      <NavBar />
      <ContactForm />
      <Footer />
    </RootContainer>
  )
}
export default Home
