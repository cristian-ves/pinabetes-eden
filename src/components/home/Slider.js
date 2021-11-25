
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export const Slider = () => {

    const imagesPath = [
        './assets/img/bosque1.jpeg',
        './assets/img/bosque2.jpeg',
        './assets/img/bosque3.jpeg',
        './assets/img/bosque4.jpeg',
        './assets/img/bosque5.jpeg',
        './assets/img/bosque6.jpeg',
        './assets/img/bosque7.jpeg',
    ]

    return (
        <Splide
            options={ {
                arrows       : 'slider',
                autoplay     : true,
                gap          : '1rem',
                lazyLoad     : 'sequential',
                pauseOnHover : false,
                resetProgress: false,
                type         : 'loop',
                width        : '80%',
            } }
            hasSliderWrapper
            hasAutoplayProgress
            className='home__slider'
        >
            {
                imagesPath.map((path, i)=>{
                    return (
                        <SplideSlide className='splideSlide__img' key={ i }>
                            <img 
                                src={ path } 
                                alt={`Bosque de pinabetes ${i + 1}`}
                            />
                        </SplideSlide>
                    )
                })
            }
        </Splide>
    )}
