import styled from 'styled-components'
import FscCard from './FscCard'

const FscContainer = styled.div`
  padding: 3rem;
  @media(min-width: 1200px) {
    padding: 3rem 25rem;
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Subheading = styled('p')`
  @media(min-width: 1500px){
    width: 50%;
  }
`

const DaneBio = 'Dane Fisher is a passionate children’s educator with several years of experience in outdoor education. In the summer he works for Avid 4 Adventure in Boulder and in the winter he ski instructs at Loveland Ski Area. Dane has a BA double majoring in Design Engineering and Philosophy.  A Renaissance person, he also studied neuroscience, physics, astronomy, literature, film, and theatre. Hiking, climbing, biking, skiing, snowboarding, and more recently rollerblading and riding a unicycle get Dane outside. He loves to read and is teaching himself to play the guitar slowly but surely.'

const AlanaBio = "Alana is passionate about helping young people lead healthier, more balanced lives while working toward their academic and personal goals. Graduating magna cum laude from the University of Denver with a BA in psychology she worked closely with the learning effectiveness program mentoring incoming students and teaching them strategies for academic success.  She has extensive experience with anxious children, working in one of the university's research labs where she conducted a study about clinical anxiety in children and adolescence. In her free time, Alana loves to be active outdoors, skiing or snowshoeing in the winter and hiking year-round. She is also an avid fan of the arts and enjoys creative activities."

const JoeBio = 'After years of working alongside children of all ages while being homeschooled and teaching music in Boulder, Joe Goodhew went on to receive a BA in Philosophy and Religious Studies from Stanford University. At Stanford, he worked as part of the staff of Stanford’s Bing Nursery School where he gained experience working in a state-of-the-art laboratory/classroom alongside experienced teachers, psychologists, and musician-educators.  Since his time at Stanford, Joe has only become more excited to work alongside children in new schooling environments. Joe loves to cook, hike, read poetry, and play both piano and guitar.'

const Facilitators = () => {
  return (
    <FscContainer>
      <div id='facilitators'>
        <h2>Facilitators</h2>
        <Subheading>
          All our Make a Plan facilitators have undergone a rigorous interview process and background checks.  We look for people who are excited to learn and have experience working with children and young adults. Meet some of our fantastic team!
        </Subheading>
      </div>
      <CardContainer>
        <FscCard name='Dane F.' img='/img/fsc/dane.jpg' bio={DaneBio} />
        <FscCard name='Alana R.' img='/img/fsc/alana.jpg' bio={AlanaBio} />
        <FscCard name='Joe G.' img='/img/fsc/joe.jpg' bio={JoeBio} />

      </CardContainer>
    </FscContainer>
  )
}
export default Facilitators
