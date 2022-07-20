import React from 'react';
import Header from '../layout/Header';

const Layout = (props) => {
  const { children } = props;
  return(
    <>
        <Header />
        {children}
    </>
  );
}

export default Layout;