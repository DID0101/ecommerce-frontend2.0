import React, { useState } from 'react';
import Link from 'next/link';
import { footMenu, footSocial } from '../data/footerData';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f0f0f0; /* Light grey background */
  padding: 48px 16px;
  color: #000; /* Black text color */
`;

const Separator = styled.div`
  margin: 20px 0;
  opacity: 0.7;
  border-top: 1px solid #ccc; /* Light grey separator */
`;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.4fr repeat(3, 1fr);
  justify-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const FootAbout = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 16px;
    color: #e60023; /* Red color for X-Beat */
    text-transform: uppercase;
  }

  h2 a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;

    &:hover {
      color: #333; /* Darker grey on hover */
    }
  }
`;

const FootSubs = styled.div`
  p {
    margin: 16px 0;
    font-size: 14px;
  }

  .input_field {
    width: 100%;
    padding: 8px;
    margin-top: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    color: #000;
  }

  .btn {
    margin-top: 16px;
    padding: 10px 20px;
    background-color: #e60023;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #c9001f;
    }
  }
`;

const FootMenu = styled.div`
  h4 {
    font-size: 16px;
    margin-bottom: 12px;
  }

  ul {
    display: grid;
    gap: 8px;

    a {
      font-size: 14px;
      color: #000; /* Black text color */
      transition: color 0.3s;

      &:hover {
        color: #333; /* Darker grey on hover */
      }
    }
  }
`;

const SubFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #ccc;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const FootCopyright = styled.div`
  font-size: 14px;

  a {
    color: #000; /* Black text color */
    transition: color 0.3s;

    &:hover {
      color: #333; /* Darker grey on hover */
    }
  }
`;

const FootSocial = styled.div`
  display: flex;
  gap: 16px;
  font-size: 24px;

  a {
    color: #000; /* Black text color */
    transition: color 0.3s;

    &:hover {
      color: #333; /* Darker grey on hover */
    }
  }
`;

const Footer = () => {
  const [subValue, setSubValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubValue('');
    alert('Thank you, you are subscribed to receive our daily newsletter');
  };

  const currYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="container">
        <FooterWrapper>
          <FootAbout>
            <h2>
              <Link href="/">ermersa</Link>
            </h2>
            <FootSubs>
              <p>Erken indirim teklifleri ve yeni ürün bilgileri almak için E-posta uyarılarımıza abone olun.</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="input_field"
                  placeholder="Email Address*"
                  required
                  value={subValue}
                  onChange={(e) => setSubValue(e.target.value)}
                />
                <button type="submit" className="btn">Abone</button>
              </form>
            </FootSubs>
          </FootAbout>

          {footMenu.map(item => {
            const { id, title, menu } = item;
            return (
              <FootMenu key={id}>
                <h4>{title}</h4>
                <ul>
                  {menu.map(subItem => {
                    const { id, link, path } = subItem;
                    return (
                      <li key={id}>
                        <Link href={path}>{link}</Link>
                      </li>
                    );
                  })}
                </ul>
              </FootMenu>
            );
          })}
        </FooterWrapper>
      </div>

      <Separator />

      <div className="container">
        <SubFooterWrapper>
          <FootCopyright>
            <p>
              {currYear} | Ermersa. Her hakkı saklıdır.
              Tarafından inşa edildi | <a href="https://b2bpixel.com">B2b Pixel</a>
            </p>
          </FootCopyright>
          <FootSocial>
            {footSocial.map(item => {
              const { id, icon, path } = item;
              return (
                <Link href={path} key={id}>{icon}</Link>
              );
            })}
          </FootSocial>
        </SubFooterWrapper>
      </div>
    </FooterContainer>
  );
};

export default Footer;
