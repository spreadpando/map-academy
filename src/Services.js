import styled from 'styled-components'

const ServiceTitle = styled('h3')`
    width: 100%;
    text-align: center;`

const CenteredIcon = styled('img')`
    padding: 1rem;
    width: 5rem;
    height: 5rem;
    margin: 0 calc(50% - 2.5rem);
`

const Third = styled('div')`
    width: 100%;
    // display: inline-flex;
    // flex-wrap: wrap;
    // justify-content: center;
    padding: 15px;
    @media(min-width: 1000px){
      width: 33%;
    }
`
const ServicesContainer = styled('div')`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const Services = () => {
  return (
    <div id='services'>
      <ServicesContainer>
        <Third>
          <ServiceTitle>At home educational facilitators</ServiceTitle>
          <CenteredIcon src='/mdi/round_home_black_48dp.png' />
          <p>
          Homeschooling can be difficult at best, but for working parents it is practically impossible. Make a Plan Academy places education facilitators into the home to help families create an optimal learning environment for students of all ages.  Facilitators manage student on-line classes, tutor difficult subjects and extend learning in areas of student strength.  Facilitators also participate in fun daily physical exercise alongside students as exercise is a central component for attention and learning.  When school work is finished, facilitators provide enrichment activities tailored to the interests of the students.  Using strategies unique to MAP, facilitators coach students in executive skills, self-regulation and good communication always prioritizing the specific academic and emotional needs of each student.  The goal of all MAP facilitators is not only a successful academic year, but a year where a student shows growth in self-knowledge, self-regulation, and self-esteem.
          </p>
        </Third>
        <Third>
          <ServiceTitle>Training</ServiceTitle>

          <CenteredIcon src='/mdi/round_engineering_black_48dp.png' />
          <p>
          Make a Plan training equips educational facilitators with powerful tools and strategies they use to create optimal learning environments for your children.  Children’s brains are designed to learn, however, stress switches the brain into survival mode and no learning happens. Resistance, emotional meltdowns, perfectionism or sneaking off to play Fortnite are examples of a kid in “survival brain”.  MAP training in self-regulation, mindfulness, and good communication empowers our facilitators to model and teach students how to recognize when they are suffering from “survival brain” and then work to move themselves into “learning brain”.  In addition, MAP training in pedagogy for neurodiverse learners prepares our facilitators to effectively remediate subjects of struggle and creatively extend areas of student strength.
          </p>
        </Third>
        <Third>
          <ServiceTitle>Monitoring</ServiceTitle>
          <CenteredIcon src='/mdi/round_supervised_user_circle_black_48dp.png' />
          <p>
          Make a Plan Academy monitors your child’s progress twice each week. Facilitators check in with a team of educational therapists, executive skills coaches, and mind/body professionals to review your child’s progress.  This support allows facilitators to effectively troubleshoot areas of struggle and extend areas of excellence. In addition to providing support, weekly monitoring provides a forum where facilitators are encouraged to share their successes and struggles.   Sharing their experience with a community of professionals, all who take pride in creating optimal learning situations, motivates MAP facilitators to bring their best to your children everyday.  Regardless of your child’s specific needs or neurodiversity, having a Make a Plan facilitator in your home is like having an on-call TAG coordinator, dyslexia therapist, executive skills coach, mind/body coach and experienced teacher--all who are working to make homeschool the optimal learning experience for your child.
          </p>
        </Third>
      </ServicesContainer>
    </div>
  )
}
export default Services
