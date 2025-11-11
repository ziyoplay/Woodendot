import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './style.css'

const Idk2 = () => {
  const testimonials = [
    {
      id: 1,
      text: "The team from Woodendot has displayed utmost professionalism from order to deliver and customer support. We placed an order to the UK and would definitely recommend friends to order from Woodendot!",
      author: "R. Aoun",
      location: "United Kingdom"
    },
    {
      id: 2,
      text: "Excellent quality and service! The furniture arrived exactly as described and the customer support was outstanding throughout the entire process.",
      author: "Sarah Johnson",
      location: "United States"
    },
    {
      id: 3,
      text: "Beautiful craftsmanship and attention to detail. Our living room looks amazing with the new pieces from Woodendot.",
      author: "Michael Chen",
      location: "Canada"
    },
    {
      id: 4,
      text: "Fast shipping and great communication. The products exceeded our expectations in terms of quality and design.",
      author: "Emma Williams",
      location: "Australia"
    },
    {
      id: 5,
      text: "Highly recommend Woodendot! The furniture is not only beautiful but also very well made. Great value for money.",
      author: "David Brown",
      location: "Germany"
    },
    {
      id: 6,
      text: "Professional service from start to finish. The team helped us choose the perfect pieces for our home.",
      author: "Lisa Anderson",
      location: "Sweden"
    }
  ]

  return (
    <section className='idk2-section'>
      <div className='idk2-swiper-container'>
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="idk2-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className='idk2-testimonial'>
                <p className='idk2-text'>{testimonial.text}</p>
                <p className='idk2-author'>{testimonial.author}, {testimonial.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Idk2
