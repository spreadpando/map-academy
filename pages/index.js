import { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import ImgBanner from '../src/ImgBanner'
import Services from '../src/Services'
import About from '../src/About'
import Facilitators from '../src/Facilitators'
import Financials from '../src/Financials'
import Team from '../src/Team'
import ScrollTop from '../src/ScrollTop'

const RootContainer = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
`

const slides = [
  {
    0: { title: 'Turn crisis into opportunity' },
    1: { title: 'An optimal learning environment for all students' },
    2: { title: 'The Future of Education' }
  },
  {
    0: { title: 'We value neurodiversity.' },
    1: { title: 'Unique training creates rockstar mentors.' },
    2: { title: 'Your own team of education professionals' }
  },
  {
    0: { title: 'Comitted, kind and professional' },
    1: { title: 'Lifelong learners who value self-awareness' },
    2: { title: 'People who delight in learning and life' }
  },
  {
    0: { title: 'Maximum 1:4 teacher student ratio' },
    1: { title: '6 hour school day' },
    2: { title: '3 days a week or 5 days a week' }
  }

]

const Home = ({ components }) => {
  const pageRef = useRef(null)
  // const aboutRef = useRef(null)
  // const fscRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const checkScroll = () => {
      if (window.pageYOffset > 350) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', checkScroll)
    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  })

  return (
    <RootContainer ref={pageRef}>
      <ImgBanner bg='/img/IMG_20200817_102142_Bokeh.jpg' slides={slides[0]} />
      <Services />
      <ImgBanner bg='/img/IMG_20200817_103734.jpg' slides={slides[1]} />
      <About />
      <ImgBanner bg='/img/IMG_20200817_102320_Bokeh.jpg' slides={slides[2]} />
      <Facilitators />
      <Team />
      <ImgBanner bg='/img/IMG_20200817_102428.jpg' slides={slides[3]} />
      <Financials />
      {scrolled
        ? (<ScrollTop />)
        : null}
    </RootContainer>
  )
}
export default Home
