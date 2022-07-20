import Link from 'next/link';
import images_url from '../../assets/images_url.json';
import { HeaderContainer, Pbutton } from './Styles';

const Header = () => {

  const { logo }  = images_url;

  return(
    <HeaderContainer>
        <div className="header_page-container">
          <div className="logo_area">
            <Link href="/">
              <a>
                <img src={logo} width="150" alt="Web Colmeia" />
              </a>
            </Link>
          </div>
          <div className="header_page-right">
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Encode SVG</a>
                </li>
                <li>
                  <a href="#">Encode Image</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </nav>
            <Pbutton type="button" label="Store" icon="pi pi-shopping-cart"/>
          </div>
        </div>
      </HeaderContainer>
  );
};

export default Header;