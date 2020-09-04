import styled from 'styled-components'

const Foot = styled('footer')`
position: relative;
width: 100%;
background-color: ${({ theme }) => theme.colors.paper};
padding: 15px;`

const Footer = () => {
  return (
    <Foot>
      <p>&copy; 2020 make-a-plan academy</p>
    </Foot>
  )
}

export default Footer
