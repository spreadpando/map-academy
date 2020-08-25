import styled from 'styled-components'
import TeamMember from './TeamMember'

const TeamContainer = styled('div')`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const TeamHeader = styled('h1')`
  text-align: center;
  margin: 4rem 0;
`

const Team = () => {
  return (
    <>
      <TeamHeader>Team</TeamHeader>
      <TeamContainer>
        <TeamMember name='Mimi Ward MA, CALP' title='Founder & CEO' img='/img/team/mimi-avatar.jpg' />
        <TeamMember name='Whitaker Fanestil' title='COO' img='/img/team/whit-avatar.jpg' />
        <TeamMember name='Wilson Fanestil' title='CTO' img='/img/team/wilson-avatar.png' />
        <TeamMember name='Brad Fanestil MD' title='Mind/Body Specialist' img='/img/team/whit-avatar.jpg' />

      </TeamContainer>
    </>

  )
}

export default Team
