import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './style.css'

const Idk = () => {
  const images = [
    {
      id: 1,
      src: "/images/IMAGE (6).png",
      handle: "@paula.rl",
      alt: "Home decor by @paula.rl"
    },
    {
      id: 2,
      src: "/images/IMAGE (11).png",
      handle: "@lindan.kaelsen",
      alt: "Home decor by @lindan.kaelsen"
    },
    {
      id: 3,
      src: "/images/IMAGE (10).png",
      handle: "@martagtarrio_",
      alt: "Home decor by @martagtarrio_"
    },
    {
      id: 4,
      src: "/images/IMAGE (15).png",
      handle: "@user4",
      alt: "Home decor"
    },
    {
      id: 5,
      src: "/images/IMAGE (16).png",
      handle: "@user5",
      alt: "Home decor"
    },
    {
      id: 6,
      src: "/images/IMAGE (17).png",
      handle: "@user6",
      alt: "Home decor"
    },
    {
      id: 7,
      src: "/images/IMAGE (18).png",
      handle: "@user7",
      alt: "Home decor"
    },
    {
      id: 8,
      src: "/images/IMAGE (19).png",
      handle: "@user8",
      alt: "Home decor"
    },
    {
      id: 9,
      src: "/images/IMAGE (20).png",
      handle: "@user9",
      alt: "Home decor"
    },
    {
      id: 10,
      src: "/images/IMAGE (21).png",
      handle: "@user10",
      alt: "Home decor"
    },
    {
      id: 11,
      src: "/images/IMAGE (22).png",
      handle: "@user11",
      alt: "Home decor"
    }
  ]

  return (
    <section className='idk-section'>
      <div className='idk-header'>
        <h2 className='idk-title'>Our pieces inside your home</h2>
        <p className='idk-subtitle'>Get inspired by our products in real-life. Tag us and be featured!</p>
      </div>
      
      <div className='idk-swiper-container'>
        <Swiper
          modules={[Pagination, Autoplay ]}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            576: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            992: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          className="idk-swiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className='idk-image-card'>
                <div className='idk-instagram-handle'>{image.handle}</div>
                <img src={image.src} alt={image.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Idk

