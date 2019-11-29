import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';

import styles from '../styles/about.module.css';
import { GetAllAuthorsQuery } from '../graphql/types';

const ALL_POST_QUERY = graphql`
  query getAllAuthors {
    gcms {
      allAuthors: authorsConnection {
        edges {
          node {
            id
            name
            bibliography
            avatar {
              handle
            }
          }
        }
      }
    }
  }
`;

const AboutPage = () => {
  const { gcms } = useStaticQuery<GetAllAuthorsQuery>(ALL_POST_QUERY);
  return (
    <Layout>
      <div>
        {gcms.allAuthors.edges.map(author => (
          <div className={styles.author} key={author.node.id}>
            <div className={styles.infoHeader}>
              <img
                className={styles.img}
                alt={author.node.name}
                src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${author.node.avatar.handle}`}
              />
              <h1>Hello! My name is {author.node.name}</h1>
            </div>
            <p>{author.node.bibliography}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default AboutPage;
