import React from 'react';
import Markdown from 'react-markdown';
import { graphql } from 'gatsby';

import styles from '../styles/post.module.css';
import { GetPostsQuery } from '../graphql/types';

interface PostProps {
  data: GetPostsQuery;
}

const Post: React.SFC<PostProps> = ({ data }) => {
  const post = data.graphCMS.posts[0];
  return (
    <article>
      <h1>{post.title}</h1>
      <div className={styles.placeholder}>
        <img
          alt={post.title}
          src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${post.coverImage.handle}`}
        />
      </div>
      <Markdown source={post.content} escapeHtml={false} />
    </article>
  );
};

export const query = graphql`
  query getPosts($slug: String!) {
    graphCMS {
      posts(where: { slug: $slug }) {
        id
        slug
        title
        coverImage {
          handle
        }
        content
      }
    }
  }
`;

export default Post;
