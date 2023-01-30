import React from 'react'
import SectionIntro from '../components/SectionIntro';
import SectionMenu from '../components/SectionMenu';
import SectionSwiper from '../components/SectionSwiper';
import '../App.css'

function Main() {
  return (
    <div>
        <SectionIntro />
        <SectionMenu />
        <SectionSwiper />
    </div>
  )
}

export default Main
