import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

function Carousel() {
    return (
        <div className='relative top-28 w-screen'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img src="./modern-blue.jpg" alt="" className='w-full h-96'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./modern-blue.jpg" alt="" className='w-full h-96'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./modern-blue.jpg" alt="" className='w-full h-96'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./modern-blue.jpg" alt="" className='w-full h-96'/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
};

export default Carousel;
