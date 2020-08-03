import React from 'react';

import BasicLayout from 'src/components/layouts/Basic';
import FeatureBlock from 'src/components/blocks/Features';
import CTA from 'src/components/blocks/CTA';
import Pricing from 'src/components/blocks/Pricing';
import Banner from 'src/components/blocks/Banner';
import Content from 'src/components/blocks/Content';

function HomePage() {
  return (
    <BasicLayout title="Homepage">
      <Banner />
      <Content />
      <FeatureBlock />
      <Pricing />
      <CTA />
    </BasicLayout>
  );
}

export default HomePage;
