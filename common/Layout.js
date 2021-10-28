import React, { Fragment } from 'react';
// import getConfig from 'next/config';

// const { publicRuntimeConfig } = getConfig();

const Layout = (props) => {
  return (
    <Fragment>
      <header className="bg-white shadow"></header>

      {props.children}

      <footer className="footerRow"></footer>
    </Fragment>
  );
};

export default Layout;
