import React from "react";
import Slider from "react-slick";
import styles from './carousel.module.css'
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'

const Carousel = () => {

    // Custom Arrow
    const NextArrow = ({onClick}) => (
        <IoIosArrowForward
        className={`${styles.slickArrows} ${styles.slickNext}`}
         onClick={onClick} />
      );
    
      const PrevArrow = ({onClick}) => (
        <IoIosArrowBack
        className={`${styles.slickArrows} ${styles.slickPrev}`}
         onClick={onClick} />
      );


    // Carousel Settings
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
            <Slider className={`${styles.sliderBox}`} {...settings}>
                <div className={`${styles.slideItem}`}>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className={`${styles.slideItem}`}>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </Slider>
    )
}

export default Carousel
