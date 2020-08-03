import React, { ReactElement } from 'react';
import BasicLayout from 'src/components/layouts/Basic';
import BlogGrid from 'src/components/blocks/BlogGrid';

interface Props {}

function BlogList({}: Props): ReactElement {
  return (
    <BasicLayout id="blog-list-page" title="Blog List">
      <BlogGrid />
    </BasicLayout>
  );
}

export default BlogList;
