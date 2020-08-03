import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import 'src/styles/index.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0,width=device-width" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
