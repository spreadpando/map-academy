import styled from 'styled-components'

const Foot = styled('footer')`
position: absoluite;
bottom: 0;
left: 0;
background-color: ${({ theme }) => theme.colors.paper};
padding: 15px;`
const Footer = () => {
  return (
    <Foot>
      <p>&copy; 2020 make-a-plan academy&trade;</p>
    </Foot>
  )
}

export default Footer
