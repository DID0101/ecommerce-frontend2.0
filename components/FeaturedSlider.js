import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { displayMoney } from '../helpers/utils'; // Adjust the import path as needed
import productsData from '../data/productsData'; // Adjust the import path as needed
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const FeaturedSwiper = styled.div`
  margin-top: 3rem;

  .swiper-slide {
    text-align: center;
    overflow: hidden;

    @media (min-width: 768px) {
      width: 16rem;
    }
  }

  .featured_img {
    margin: 2rem 0;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .products_price {
    margin-top: 1rem;
  }
`;

const FeaturedSlider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const featuredProducts = productsData.filter(item => item.tag === 'featured-product');

  return (
    <FeaturedSwiper>
      {isClient && (
        <Swiper
          className="featured_swiper"
          modules={[EffectCoverflow, Pagination, Autoplay]}
          loop={true}
          speed={400}
          spaceBetween={100}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          effect="coverflow"
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 70,
            modifier: 3,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 250,
            },
          }}
        >
          {featuredProducts.map((item) => {
            const { id, images, title, finalPrice, originalPrice, path } = item;
            const newPrice = displayMoney(finalPrice);
            const oldPrice = displayMoney(originalPrice);

            return (
              <SwiperSlide key={id}>
                <div className="featured_title">{title}</div>
                <figure className="featured_img">
                  <Link href={`${path}`} passHref>
                    <img src={images[0]} alt={title} />
                  </Link>
                </figure>
                <h2 className="products_price">
                  {newPrice} &nbsp;
                  <small><del>{oldPrice}</del></small>
                </h2>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </FeaturedSwiper>
  );
};

export default FeaturedSlider;
