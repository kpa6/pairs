
import 'babel-polyfill';
import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="robots" content="index,follow"/>
          <meta name="googlebot" content="index,follow"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
