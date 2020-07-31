import React from 'react';

import styles from './PostList.module.css';
import PostCard from '@components/PostCard/PostCard';

const PostList = ({ posts }) => {
  if (posts === 'undefined') return null;

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <>
        <h2>Latest posts</h2>
        <div className={styles.postList}>
          {posts.map((post) => {
            return <PostCard key={post.slug} post={post} />;
          })}
        </div>
      </>
    </div>
  );
};

export default PostList;
