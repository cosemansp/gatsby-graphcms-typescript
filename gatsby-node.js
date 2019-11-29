const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/post.tsx`);

  // query all pages
  const { data, errors } = graphql(`
    {
      graphCMS {
        allPosts: postsConnection {
          edges {
            node {
              id
              title
              slug
              coverImage {
                handle
              }
              content
            }
          }
        }
      }
    }
  `);

  // abort when errors
  if (errors) {
    console.log(errors);
    return;
  }

  // create gatsby pages
  data.graphCMS.allPosts.edges.map(({ node }) => {
    createPage({
      path: `/post/${node.slug}`,
      component: postTemplate,
      // the context is passed to the template query
      context: {
        slug: node.slug,
      },
    });
  });
};
