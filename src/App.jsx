import { useState } from 'react'
import './App.css'
import { Herosection } from './components/HeroSection'
import { SectionTwo } from './components/SectionTwo';
import { SectionThree } from './components/SectionThree';
import { SectionFour } from './components/SectionFour';
import { SectionFive } from './components/SectionFive';
import { SectionSix } from './components/SectionSix';
import { SectionSeven } from './components/SectionSeven';
import { SectionEight } from './components/SectionEight';
import { SectionNine } from './components/SectionNine';
import { SectionTen } from './components/SectionTen';
import { SectionEleven } from './components/SectionEleven';







function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Herosection/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
       <SectionEight/>
       <SectionNine/>
       <SectionTen/>
       <SectionEleven/>

      
      
    </>
  )
}

export default App
