import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HeroText = styled(motion.h1)`
  margin: 0 0 0 5rem;
  @media(min-width: 1000px){
    max-width: 50%;
  }
`
const InnerCarousel = styled('div')`
  width: 100vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text_secondary};
  box-shadow: inset -12px -55px 100px #000;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
`
const Carousel = ({ slides, bg }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < 2) {
        setIndex(index + 1)
      } else {
        setIndex(0)
      }
    }, 6000)
    return () => clearInterval(interval)
  })

  return (
    <InnerCarousel bg={bg}>
      <HeroText
        key={index}
        initial={{ opacity: 0.1 }}
        animate={{ x: 10, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        {slides[index].title}
      </HeroText>
    </InnerCarousel>
  )
}
export default Carousel
