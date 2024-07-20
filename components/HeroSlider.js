import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper/modules';
import { displayMoney } from '../helpers/utils';
import productsData from '../data/productsData';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper {
    width: 100%;
    height: 100%;
    padding: 5rem 0.75rem;
  }

  .swiper-pagination {
    bottom: 30px;
  }
`;

const HeroWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: center;
  place-items: center;
  gap: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 10%;
    font-size: 15rem;
    font-weight: 700;
    opacity: 0.05;

    @media (min-width: 1200px) {
      font-size: 12rem;
    }

    @media (max-width: 640px) {
      font-size: 8rem;
    }
  }

  &.hero_slide-0::before {
    content: "Over Ear";
  }

  &.hero_slide-1::before {
    content: "In Ear";
  }

  &.hero_slide-2::before {
    content: "Over Ear";
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HeroItemTxt = styled.div`
  position: relative;
  text-shadow: var(--text-shadow);
  text-align: left;

  h1 {
    font-size: 3rem;
    text-transform: capitalize;
    word-spacing: 3px;
    margin: 0.8rem 0 1rem;

    @media (min-width: 1200px) {
      font-size: 2.4rem;
    }

    @media (max-width: 640px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 600;

    @media (max-width: 640px) {
      font-size: 1rem;
    }
  }

  .hero_price {
    margin: 2rem 0 3rem;

    @media (max-width: 640px) {
      margin: 1.5rem 0 2rem;
    }
  }
`;

const HeroItemImg = styled.figure`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    grid-row: 1;
  }

  @media (max-width: 640px) {
    max-width: 18rem;
    width: 75%;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: red;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  border-radius: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkred;
  }
`;

const HeroSlider = () => {
  const heroProducts = productsData.filter(item => item.tag === 'hero-product');

  return (
    <HeroContainer>
      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        loop={true}
        speed={400}
        spaceBetween={100}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {heroProducts.map((item, i) => {
          const { id, title, tagline, heroImage, finalPrice, originalPrice, path } = item;
          const newPrice = displayMoney(finalPrice);
          const oldPrice = displayMoney(originalPrice);

          return (
            <SwiperSlide key={id} className={`wrapper hero_wrapper hero_slide-${i}`}>
              <HeroWrapper className={`hero_wrapper hero_slide-${i}`}>
                <HeroItemTxt>
                  <h3>{title}</h3>
                  <h1>{tagline}</h1>
                  <h2 className="hero_price">
                    {newPrice} &nbsp;
                    <small><del>{oldPrice}</del></small>
                  </h2>
                  <Button href={`${path}`}>Shop Now</Button>
                </HeroItemTxt>
                <HeroItemImg>
                  <img src={heroImage} alt="product-img" />
                </HeroItemImg>
              </HeroWrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </HeroContainer>
  );
};

export default HeroSlider;


// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay, A11y } from 'swiper/modules';
// import styled from 'styled-components';
// import { displayMoney } from '../helpers/utils';
// import { getProducts } from '../data/productsData';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

// const HeroContainer = styled.div`
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   .swiper {
//     width: 100%;
//     height: 100%;
//     padding: 5rem 0.75rem;
//   }

//   .swiper-pagination {
//     bottom: 30px;
//   }
// `;

// const HeroWrapper = styled.div`
//   position: relative;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   place-content: center;
//   place-items: center;
//   gap: 2rem;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 10%;
//     font-size: 15rem;
//     font-weight: 700;
//     opacity: 0.05;

//     @media (min-width: 1200px) {
//       font-size: 12rem;
//     }

//     @media (max-width: 640px) {
//       font-size: 8rem;
//     }
//   }

//   &.hero_slide-0::before {
//     content: "Over Ear";
//   }

//   &.hero_slide-1::before {
//     content: "In Ear";
//   }

//   &.hero_slide-2::before {
//     content: "Over Ear";
//   }

//   @media (min-width: 1024px) {
//     grid-template-columns: 1fr 1fr;
//     gap: 4rem;
//   }

//   @media (max-width: 640px) {
//     grid-template-columns: 1fr;
//     gap: 2rem;
//   }
// `;

// const HeroItemTxt = styled.div`
//   position: relative;
//   text-shadow: var(--text-shadow);
//   text-align: left;

//   h1 {
//     font-size: 3rem;
//     text-transform: capitalize;
//     word-spacing: 3px;
//     margin: 0.8rem 0 1rem;

//     @media (min-width: 1200px) {
//       font-size: 2.4rem;
//     }

//     @media (max-width: 640px) {
//       font-size: 1.8rem;
//     }

//     @media (max-width: 480px) {
//       font-size: 1.5rem;
//     }
//   }

//   h3 {
//     font-size: 1.3rem;
//     font-weight: 600;

//     @media (max-width: 640px) {
//       font-size: 1rem;
//     }
//   }

//   .hero_price {
//     margin: 2rem 0 3rem;

//     @media (max-width: 640px) {
//       margin: 1.5rem 0 2rem;
//     }
//   }
// `;

// const HeroItemImg = styled.figure`
//   position: relative;
//   overflow: hidden;

//   img {
//     width: 100%;
//     height: auto;
//     object-fit: cover;
//   }

//   @media (min-width: 1024px) {
//     grid-row: 1;
//   }

//   @media (max-width: 640px) {
//     max-width: 18rem;
//     width: 75%;
//   }
// `;

// const Button = styled(Link)`
//   display: inline-block;
//   padding: 0.75rem 1.5rem;
//   background-color: red;
//   color: white;
//   font-weight: bold;
//   text-transform: uppercase;
//   text-align: center;
//   border-radius: 0.5rem;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: darkred;
//   }
// `;

// const HeroSlider = () => {
//   const [heroProducts, setHeroProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products when component mounts
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const products = await getProducts();
//       setHeroProducts(products);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   return (
//     <HeroContainer>
//       <Swiper
//         modules={[Pagination, Autoplay, A11y]}
//         loop={true}
//         speed={400}
//         spaceBetween={100}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//       >
//         {heroProducts.map((item, i) => {
//           const { id, title, tagline, heroImage, finalPrice, originalPrice, path } = item;
//           const newPrice = displayMoney(finalPrice);
//           const oldPrice = displayMoney(originalPrice);

//           return (
//             <SwiperSlide key={id} className={`wrapper hero_wrapper hero_slide-${i}`}>
//               <HeroWrapper className={`hero_wrapper hero_slide-${i}`}>
//                 <div>
//                   <h3>{title}</h3>
//                   <h1>{tagline}</h1>
//                   <h2 className="hero_price">
//                     {newPrice} &nbsp;
//                     <small><del>{oldPrice}</del></small>
//                   </h2>
//                   <Button href={path}>Shop Now</Button>
//                 </div>
//                 <div>
//                   <img src={heroImage} alt="product-img" />
//                 </div>
//               </HeroWrapper>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </HeroContainer>
//   );
// };

// export default HeroSlider;
