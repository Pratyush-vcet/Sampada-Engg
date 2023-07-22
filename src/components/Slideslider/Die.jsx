import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import './Prods.css'
import { sliderSettings } from './Common';
import data from './Products.json';

const Die = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStarts">
                    <span className="primaryText">Our Developed Dies</span>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderButtons></SliderButtons>
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="home" />
                                    <span className="secondaryText r-price">
                                        {/* <span style={{ color: "orange" }}>$</span>
                                        <span> {card.price}</span> */}
                                    </span>
                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section >

    )
}

export default Die

const SliderButtons = () => {
    const swiper =  useSwiper();
    return(
        <div className="flexCenter r-buttons">
        <button onClick={()=> swiper.slidePrev()}>&lt;</button>
        <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}