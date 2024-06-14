import React, { useRef } from 'react';
import Link from 'next/link';
import images_url from '../../assets/images_url.json';
import { HeaderContainer, Pbutton } from './Styles';
import { Toast } from 'primereact/toast';

const Header = () => {

  const { logo }  = images_url;

  const toastRef = useRef(null);

  const handleShowMessage = (e) => {
    e.preventDefault();
    toastRef.current.show({
      severity: 'warn',
      summary: 'Ops!',
      detail: "Sorry, this option is not available at the moment. Please wait until they become available."
    });
  };

  return(
    <HeaderContainer>
        <div className="header_page-container">
          <div className="logo_area">
            <Link href="/">
                <img src={logo} width="150" alt="Web Colmeia" />
            </Link>
          </div>
          <div className="header_page-right">
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#" onClick={handleShowMessage}>Encode SVG</a>
                </li>
                <li>
                  <a href="#" onClick={handleShowMessage}>Encode Image</a>
                </li>
                <li>
                  <a href="#" onClick={handleShowMessage}>About</a>
                </li>
              </ul>
            </nav>
            <Pbutton type="button" label="Store" icon="pi pi-shopping-cart" onClick={() => window.open('https://webcolmeia.com.br', "_blank")}/>
          </div>
        </div>
        <Toast ref={toastRef} />
      </HeaderContainer>
  );
};

export default Header;