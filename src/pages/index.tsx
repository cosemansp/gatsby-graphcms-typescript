import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';

import styles from '../styles/index.module.css';
import { GetAllPostsQuery } from '../graphql/types';

const ALL_POST_QUERY = graphql`
  query getAllPosts {
    gcms {
      allPosts: postsConnection(orderBy: dateAndTime_DESC) {
        edges {
          node {
            id
            title
            slug
            coverImage {
              handle
            }
          }
        }
      }
    }
  }
`;

const IndexPage = () => {
  const { gcms } = useStaticQuery<GetAllPostsQuery>(ALL_POST_QUERY);
  return (
    <Layout>
      <section>
        <ul className={styles.ul}>
          {gcms.allPosts.edges.map(post => (
            <li className={styles.li} key={post.node.id}>
              <Link to={`/post/${post.node.slug}`} className={styles.a}>
                <div className={styles.placeholder}>
                  <img
                    alt={post.node.title}
                    className={styles.img}
                    src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${post.node.coverImage.handle}`}
                  />
                </div>
                <h3>{post.node.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default IndexPage;
