import React from 'react';
import Navbar from './Navbar';
import { Button } from './Button';
import './SectionIntro.css';

function SectionIntro() {
  return (
    <section className='intro'>
        <div className='container'>
            <Navbar />
            <div className='intro-text'>
                <h6 className='intro-openhours'>OPEN EVERYDAY 6AM - 9PM</h6>
                <h2 className='intro-motto'>A bad day with lunch is better than a good day without it.</h2>
            </div>
            <div className='intro-buttons'>
                <Button buttonStyle='btn--primary' buttonSize='btn--large'>Reserve a table</Button>
                <div className='intro-buttons-social'>
                    <Button buttonStyle='btn--social' buttonSize='btn--small'>Fb</Button>
                    <Button buttonStyle='btn--social' buttonSize='btn--small'>Ig</Button>
                    <Button buttonStyle='btn--social' buttonSize='btn--small'>Tw</Button>
                    <Button buttonStyle='btn--social' buttonSize='btn--small'>Yt</Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionIntro
