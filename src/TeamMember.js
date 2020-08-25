import styled from 'styled-components'

const TeamMemberContainer = styled('div')`
    width: 15rem;
    height: 20rem;
    text-align: center;
`

const TeamMemberAvatar = styled('img')`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
    box-shadow: 5px 5px 25px #000;

`

const TeamMember = ({ name, title, img }) => {
  return (
    <TeamMemberContainer>
      <TeamMemberAvatar src={img} />
      <p>{name}<br />
        {title}
      </p>
    </TeamMemberContainer>
  )
}

export default TeamMember
