import garasi from '/image/garasi.jpg'
import garasi1 from '/image/f.jpg'
import garasi2 from '/image/xexd.jpg'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
const Hero = () => {
    return (    
        <section className='md:p-6 '>
            <Swiper
                // install Swiper modules
                modules={[ 
                    Autoplay, 
                    Pagination
                ]}
                spaceBetween={50}
                slidesPerView={1}
                pagination = {{
                    clickable: true, 
                    dynamicBullets: true,
                }}
                autoplay = {{
                    delay: 5000
                }}
                scrollbar={{ 
                    draggable: true 
                }}
            >

                <SwiperSlide>
                    <img 
                        src={garasi} 
                        alt="image car"
                        className='md:h-[500px] w-full md:rounded-md bg-center bg-cover' 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src={garasi1}
                        alt="image car" 
                        className='md:h-[500px] w-full md:rounded-md bg-center bg-cover' 
                    />
                </SwiperSlide> 
                <SwiperSlide>
                    <img 
                        src={garasi2} 
                        alt="image car"
                        className='md:h-[500px] w-full md:rounded-md bg-center bg-cover'  
                    />
                </SwiperSlide> 
            </Swiper>
        </section>
    )
}
export default Hero;
