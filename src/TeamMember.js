import styled from 'styled-components'

const TeamMemberContainer = styled('div')`
    width: 15rem;
    height: 15rem;
    text-align: center;
    display: inline-block;
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
      <h5>{name}<br />
        {title}
      </h5>
    </TeamMemberContainer>
  )
}

export default TeamMember
