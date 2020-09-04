import styled from 'styled-components'
import TeamMember from './TeamMember'

const AboutContainer = styled('div')`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.paper};
  padding: 3rem;
  @media(min-width: 1200px) {
    padding: 3rem 25rem;
  }
`

const Rscs = styled('ul')`
  float: right;
  padding: 0;
  text-align: right;
  list-style: none;
  width: 50%;
`

const Subheading = styled('h5')`
  display: block;
  width: 100%;
`

const InlineP = styled('p')`
  display: inline-block;
  width: 90%;
  margin: 0 15px 2rem 15px;
  @media(min-width: 1500px){
      width: 70%;
  }
`

const About = () => {
  return (
    <AboutContainer>
      <div id='about'>
        <h2>MAP Academy</h2>
        <Subheading>
        Make a Plan provides a consistent, safe, high quality learning experience for your child regardless of what is happening with your brick and mortar school.
        </Subheading>
        <TeamMember name='Mimi Ward MA, CALP' title='Founder & CEO' img='/img/team/mimi-avatar.jpg' />
        <InlineP>
        MAP Academy was launched the summer of 2020 in response to the pain experienced by children trying to learn remotely and parents trying to simultaneously support their child’s learning while working remotely from home. Parents needed help “making a plan” and turned to me. I have been a teacher for 35 years--teaching elementary school in the inner city and at elite private schools, teaching college students to write at CU Boulder, homeschooling my own neurodiverse children for 15 years  and maintaining my dyslexia therapy practice for the past 11 years. This extensive experience with diverse learners working in a variety of settings has given me a unique skill set that I use to find, train and support educational facilitators who work with your children.  Having a Make a Plan facilitator in your home is like having an on call team--TAG coordinator, dyslexia therapist, executive skills coach and mind/body coach and experienced teacher to make learning at home an optimal learning experience.
        </InlineP>
        <Rscs>
          <h2>External Resources</h2>
          <h5>Here are some quick youtube videos</h5>
          <li>
            <p>
              <a href='https://youtu.be/KoqaUANGvpA'>
                Great explanation of learning brain vs survival brain
              </a>
            </p>
          </li>
          <hr />
          <li>
            <p>
              <a href='https://youtu.be/6NehuwDA45Q'>
                Why train the adults instead of give them advice
              </a>
            </p>
          </li>
          <hr />
          <li>
            <p>
              <a href='https://youtu.be/UYvxlkCGmbQ'>
                How emotions affect your cognitive functioning
              </a>
            </p>
          </li>
        </Rscs>
      </div>
    </AboutContainer>
  )
}
export default About
