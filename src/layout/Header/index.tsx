const Header = () => {
  return(
    <div className="header_page">
        <div className="header_page-container">
          <div className="logo_area">
            <img v-biind:src="logo_url" width="150" alt="Web Colmeia" />
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
          </div>
        </div>
      </div>
  );
};