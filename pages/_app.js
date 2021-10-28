import React, { Fragment } from 'react';
import { useStore } from '../redux/Store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';
import Layout from '../common/Layout';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/404.css';
import '../styles/loader.css';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps?.initialReduxState);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnVisibilityChange draggable pauseOnHover />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Fragment>
  );
};

export default MyApp;
