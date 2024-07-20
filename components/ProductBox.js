import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import Image from 'next/image'; // Import Image component from next/image
import FlyingButton from "@/components/FlyingButton";
import HeartOutlineIcon from "@/components/icons/HeartOutlineIcon";
import HeartSolidIcon from "@/components/icons/HeartSolidIcon";

const ProductWrapper = styled.div`
  border: 2px solid #ccc; /* Added border for the frame */
  border-radius: 12px; /* Added border-radius */
  padding: 20px; /* Added padding */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow for depth */
  background-color: #fff; /* Ensure the background is white */
  margin-bottom: 20px; /* Added margin-bottom for spacing between product boxes */
`;

const WhiteBox = styled(Link)`
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: .9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 10px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`;

const WishlistButton = styled.button`
  border: 0;
  width: 40px !important;
  height: 40px;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  cursor: pointer;
  ${props => props.wished ? `
    color: red;
  ` : `
    color: black;
  `}
  svg {
    width: 16px;
  }
`;

export default function ProductBox({
  _id, title, description, price, images, wished = false,
  onRemoveFromWishlist = () => {},
}) {
  const url = '/product/' + _id;
  const [isWished, setIsWished] = useState(wished);

  function addToWishlist(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    const nextValue = !isWished;
    if (nextValue === false && onRemoveFromWishlist) {
      onRemoveFromWishlist(_id);
    }
    axios.post('/api/wishlist', {
      product: _id,
    }).then(() => {});
    setIsWished(nextValue);
  }

  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <WishlistButton wished={isWished} onClick={addToWishlist}>
            {isWished ? <HeartSolidIcon /> : <HeartOutlineIcon />}
          </WishlistButton>
          <Image src={images?.[0]} alt={title} width={100} height={80} />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>
            {price} TL
          </Price>
          <FlyingButton _id={_id} src={images?.[0]}>Sepete ekle</FlyingButton>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
