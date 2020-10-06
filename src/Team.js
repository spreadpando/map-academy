import styled from 'styled-components'
import TeamMember from './TeamMember'

const TeamContainer = styled('div')`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem 0;
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
        <TeamMember name='Brad Fanestil MD' title='Mind/Body Specialist' img='/img/team/brad-avatar.jpg' />
        <TeamMember name='Cathy Clark MA' title='Executive Coach Boulder Ed. Strategies' img='/img/team/cathy-avatar.jpg' />
        <TeamMember
          name='Eleni Arapkiles' title='
          Literature and writing specialist
          32 yr Bvsd English teacher' img='/img/team/leni-avatar.jpg'
        />
      </TeamContainer>
    </>

  )
}

export default Team
