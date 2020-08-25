
import styled from 'styled-components'

const Card = styled('div')`
  width: 30rem;
  border-radius: 10px;
  box-shadow: 5px 5px 25px #000;
  margin: 2rem;
`
const CardLeft = styled('div')`
  display: inline-block;
  text-align: center;
  width: 100%;
  height: 30%;
  border-radius: 10px 10px 0 0;
  background-color: ${({ theme }) => theme.colors.primary};
  @media(min-width: 1000px){
    max-width: 50%;
    height: 100%;
    border-radius: 10px 0 0 10px;
  }

`
const CardRight = styled('div')`
  display: inline-block;
  max-width: 100%;
  height: 50%;
  vertical-align: top;
  padding: 2rem;
  border-radius: 0 0 10px 10px;
  font-size: 12px;
  @media(min-width: 1000px){
    max-width: 50%;
    height: 100%;
    border-radius: 0 10px 10px 0;
  }
`

const Avatar = styled('img')`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  object-position: top;
  max-width: 15rem;
  margin: 1rem;
  border-radius: 50%;
  box-shadow: 5px 5px 25px #000;
`

const FscCard = ({ name, img, bio }) => {
  return (
    <>
      <Card>
        <CardLeft>
          <Avatar src={img} />
          <h2>{name}</h2>
        </CardLeft>
        <CardRight>
          {bio}
        </CardRight>
      </Card>
    </>)
}
export default FscCard
