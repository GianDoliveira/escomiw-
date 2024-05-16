import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const BannerImage = () => {
    return (
        <div className='relative top-32 w-screen'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Navigation, Autoplay, Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <img src="./modern-blue.jpg" alt="" className='w-full h-96' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./modern-blue.jpg" alt="" className='w-full h-96' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./modern-blue.jpg" alt="" className='w-full h-96' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./modern-blue.jpg" alt="" className='w-full h-96' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
};
export const BannerInfo = () => {
    return (
        <section className='text-center lg:w-full lg:h-96 max-lg:m-16 lg:m-40'>
            <h1 className='text-4xl pb-10 font-bold text-[#080451]'>DADOS</h1>
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                className="mySwiper bg-[#282626] lg:w-2/3 h-80 text-white text-5xl">
                <SwiperSlide className='relative top-32'>
                    <h1>41 etnias</h1>
                </SwiperSlide>
                <SwiperSlide className='relative top-32'>
                    <h1>18 países</h1>
                </SwiperSlide>
                <SwiperSlide className='relative top-32'>
                    <h1>4 continentes</h1>
                </SwiperSlide>
                <SwiperSlide className='relative top-32'>
                    <h1>2 brasil</h1>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
