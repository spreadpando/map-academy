import { animateScroll } from 'react-scroll'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Sticky = styled(motion.div)`
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: #fff;
    border: 2px solid black;
    margin: 5px;
    padding: 0 5px;
    box-shadow: 5px 5px 25px #000;
    border-radius: 5px;
    z-index: 1000;
`

const ScrollTop = () => {
  return (
    <Sticky initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => { animateScroll.scrollToTop() }}>

      <p>Return to Top</p>

    </Sticky>
  )
}

export default ScrollTop
