import styled from 'styled-components'

const TeamMemberContainer = styled('div')`
    width: 15rem;
    height: 15rem;
    text-align: center;
    display: inline-block;
    h5{
      margin: 1rem 0 0 0;
    }
    p {
      margin: 0;
      font-size: 0.8rem;
    }
`

const TeamMemberAvatar = styled('div')`
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: 5px 5px 25px #000;
    overflow: hidden;
    img{
      width: 100%;
    }
`

const TeamMember = ({ name, title, img }) => {
  return (
    <TeamMemberContainer>
      <TeamMemberAvatar>
        <img src={img} />
      </TeamMemberAvatar>
      <h5>{name}</h5>
      <p>
        {title.split('\n').map((item, key) => {
          return (
            <span key={key}>
              {item} <br />
            </span>
          )
        })}
      </p>
    </TeamMemberContainer>
  )
}

export default TeamMember
