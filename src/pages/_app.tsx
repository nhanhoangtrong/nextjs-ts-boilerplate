import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '../index.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Hello world!</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
