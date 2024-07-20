import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import SearchIcon from "@/components/icons/SearchIcon";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import LogoImage from "@/public/logo.png"; // Assuming you have the logo image in the public directory
import Image from 'next/image'; // Importing Image from next/image

const StyledHeader = styled.header`
  background-color: #f0f0f1; /* Light grey background */
  position: sticky;
  top: 0;
  z-index: 10;
  transition: top 0.3s; /* Add smooth transition for hiding/showing */
  ${({ scrolled }) => scrolled && `
    top: -60px; /* Move header up to hide */
  `}
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000; /* Black text color */
  padding: 3px; /* Adjust padding for space */
  margin-top: 1px; /* Move logo up */
  z-index: 3;

  /* Adjust the width and height of the Image component */
  & > div {
    width: 140px; /* Adjust width as needed */
    height: 70px; /* Adjust height as needed */
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px; /* Adjusted padding */
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px; /* Adjusted gap */
  margin-right: 16px; /* Increased right margin */

  @media screen and (max-width: 768px) {
    display: ${props => props.mobileNavActive ? 'block' : 'none'};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 60px 16px 16px;
    background-color: #333; /* Dark grey background */
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  color: #000; /* Black text color */
  text-decoration: none;
  padding: 8px;
  font-size: 16px; /* Increased font size */
  display: flex;
  align-items: center;

  svg {
    width: 20px; /* Increased icon size */
    height: 20px;
    margin-right: 5px;
    color: #000; /* Black icon color */
  }

  @media screen and (max-width: 768px) {
    padding: 8px 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 28px;
  height: 28px;
  border: 0;
  color: #000; /* Black color */
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    z-index: 3;
  }
`;

const SideIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 27px; /* Adjusted gap */
  padding: 8px;

  a {
    display: flex;
    align-items: center;
    color: #000; /* Black text color */
    font-size: 16px; /* Increased font size */

    svg {
      width: 20px; /* Increased icon size */
      height: 20px;
      color: #000; /* Black icon color */
    }
  }

  @media screen and (max-width: 768px) {
    padding: 8px 0;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        // scrolling down
        setScrolled(true);
      } else {
        // scrolling up
        setScrolled(false);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <StyledHeader scrolled={scrolled}>
      <Center>
        <Wrapper>
          <Logo href={'/'}>
            <Image src={LogoImage} alt="Logo" width={120} height={60} />
          </Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={'/'}>Ansayfa</NavLink>
            <NavLink href={'/products'}>Tüm ürünler</NavLink>
            <NavLink href={'/categories'}>Kategoriler</NavLink>
            <NavLink href={'/about'}>Hakimizda</NavLink>
          </StyledNav>
          <SideIcons>
            <Link href={'/search'}><SearchIcon size={20} /></Link>
            <Link href={'/account'}>
              <FaUser size={20} />
            </Link>
            <Link href={'/cart'}>
              <FaShoppingCart size={20} /> ({cartProducts.length})
            </Link>
            <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
              <BarsIcon size={20} />
            </NavButton>
          </SideIcons>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
