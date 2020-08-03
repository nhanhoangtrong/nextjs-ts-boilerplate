import React, { ReactElement } from 'react';
import BasicLayout from 'src/components/layouts/Basic';
import PostDetail from 'src/components/blocks/PostDetail';
import BlogGrid from 'src/components/blocks/BlogGrid';

interface Props {}

function PostDetailPage({}: Props): ReactElement {
  return (
    <BasicLayout id="post-detail-page" title="Post Detail">
      <PostDetail />

      <BlogGrid title="Related Posts" />
    </BasicLayout>
  );
}

export default PostDetailPage;
