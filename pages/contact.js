import styled from 'styled-components'
import NavBar from '../src/NavBar'
import ContactForm from '../src/ContactForm'
import Footer from '../src/Footer'

const RootContainer = styled('div')`
  position: relative;
  width: 100%;
  min-height: 80vh;
  padding: 0 3rem;
`

const Home = ({ components }) => {
  return (
    <RootContainer>
      <ContactForm />
    </RootContainer>
  )
}
export default Home
