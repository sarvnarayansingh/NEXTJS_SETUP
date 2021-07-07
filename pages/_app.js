import '../styles/globals.css';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import { useStore } from '../Redux/Store';
import { Fragment } from 'react';

function MyApp ({ Component, pageProps }) {
  const store = useStore(pageProps?.initialReduxState);
  return (
    <Fragment>
      <Provider store = {store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Fragment>
  );
}

export default MyApp;
