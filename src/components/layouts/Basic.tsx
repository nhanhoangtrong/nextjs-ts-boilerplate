import React, { ReactNode, FunctionComponent } from 'react';
import classNames from 'classnames';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export type BasicLayoutProps = {
  id?: string;
  title?: string;
  className?: string;
  description?: string;
};

const BasicLayout: FunctionComponent<BasicLayoutProps> = ({ id, className, title, description, children }) => {
  const pageTitle = title || 'No Title';
  return (
    <div id={id} className={classNames('layout-basic', className)}>
      <DefaultSeo
        title={pageTitle}
        titleTemplate={'%s - NextJS TS Boilerplate'}
        description={
          description || 'Quickly start your next React Server-side Rendering with NextJS Framework and TailwindCSS'
        }
      />

      <Header />

      <div className="layout-basic-content">{children}</div>

      <Footer />
    </div>
  );
};

export default BasicLayout;
