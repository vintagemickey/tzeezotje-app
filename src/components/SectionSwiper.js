import React from 'react'
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import slides from '../slides.js'
import './SectionSwiper.css'

function SectionSwiper() {
    function createSlide(item) {
        return (
            <SwiperSlide>
                <img src='quotes.png'/>
                <h6 className='swiper-header'>{item.header}</h6>
                <p className='swiper-text'>{item.text}</p>
                <span className='swiper-author'>{item.author}</span>
            </SwiperSlide>
        )
    }

    return (
    <section className='swiper-slides'>
        <div className='container'>
            <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            //autoplay={{"delay": 3000,"disableOnInteraction": false}}
            >
                {slides.map(createSlide)}
            </Swiper>
        </div>
    </section>
  )
}

export default SectionSwiper