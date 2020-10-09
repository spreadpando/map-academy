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
      <TeamHeader id='team'>Team</TeamHeader>
      <TeamContainer>
        <TeamMember
          name='Mimi Ward MA, CALP' title={'Dyslexia Therapist, Teacher\nBoulder Dyslexia Therapy'} img='/img/team/mimi-avatar.jpg'
        />
        <TeamMember name='Brad Fanestil MD' title={'Mind Body Specialist\nBCH Center for Mind Body Medicine'} img='/img/team/brad-avatar.jpg' />
        <TeamMember name='Cathy Clark MA' title={'Executive Skills Coach\nBolderED Strategies LLC'} img='/img/team/cathy-avatar.jpg' />
        <TeamMember
          name='Eleni Arapkiles' title={'Literature and Writing Specialist \n 32 yr BVSD Teacher'} img='/img/team/leni-avatar.jpg'
        />
      </TeamContainer>
    </>

  )
}

export default Team
