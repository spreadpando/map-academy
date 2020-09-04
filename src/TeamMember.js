import styled from 'styled-components'

const TeamMemberContainer = styled('div')`
    width: 15rem;
    height: 15rem;
    text-align: center;
    display: inline-block;
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
      <h5>{name}<br />
        {title}
      </h5>
    </TeamMemberContainer>
  )
}

export default TeamMember
