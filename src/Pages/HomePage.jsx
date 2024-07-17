import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import Hero from '../Components/Hero'
import Card from '../Components/cards/Card'
import Help from '../Components/Help'
import Funfacts from '../Components/Funfacts'
import WhoWeAre from '../Components/WhoWeAre'
import StartACall from '../Components/StartACall'
import Maintain from '../Components/Maintain'
import Header from '../Components/Header'
import Offer from '../Components/Offer'
import Pricing from '../Components/Pricing'
import StartBlog from '../Components/StartBlog'
import Contact from '../Components/Contact';
export default function HomePage() {
  return (
    <Box className=' text-black' id='#'>
      {/* <Header/> */}
      <Hero/>
      <Box mt={{'2xl': '-14vh',xl: '-19vh', md: 14,base: 14}} position={{md: 'absolute', base: 'static'}}>
        <Card/>
      </Box>
      <Box mt={{'2xl': '20vh', xl: '27vh', md: '57vh', base: '10'}}>
        <Help/>
        <Funfacts/>
        <WhoWeAre/>
        <StartACall/>
        <Maintain/>
        <Offer/>
        <Pricing/>
        <StartBlog/>
        <Contact/>
      </Box>
    </Box>
  )
}
