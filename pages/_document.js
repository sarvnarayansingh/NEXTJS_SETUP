import getConfig from 'next/config';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const { publicRuntimeConfig } = getConfig();
const assetPrefix = publicRuntimeConfig.assetPrefix;

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Tracking Panel" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="application-name" content="Tracking Panel" />
          <meta name="theme-color" content="#652b80" />
          <meta name="msapplication-navbutton-color" content="#652b80" />
          <meta name="msapplication-TileColor" content="#fff" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="description" content="GyFTR" />

          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" />
          <link rel="stylesheet" href={`${assetPrefix}/static/css/styles.css`} />

          <link rel="apple-touch-icon" type="image/png" sizes="192x192" href={`${assetPrefix}/static/icons/icon-192x192.png`} />
          <link rel="apple-touch-icon" type="image/png" sizes="512x512" href={`${assetPrefix}/static/icons/icon-512x512.png`} />
          <link rel="icon" type="image/png" sizes="192x192" href={`${assetPrefix}/static/icons/icon-192x192.png`} />
          <link rel="icon" type="image/png" sizes="512x512" href={`${assetPrefix}/static/icons/icon-512x512.png`} />
          <link rel="icon" type="image/png" sizes="16x16" href={`${assetPrefix}/favicon.png`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`${assetPrefix}/favicon.png`} />
          <link rel="icon" type="image/x-icon" href={`${assetPrefix}/favicon.png`} />
          <link rel="shortcut icon" type="image/x-icon" href={`${assetPrefix}/favicon.png`} />
          <link rel="manifest" href={`${assetPrefix}/static/manifest.json`} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src={`${assetPrefix}/static/js/custom.js`} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
