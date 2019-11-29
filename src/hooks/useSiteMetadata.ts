import { useStaticQuery, graphql } from 'gatsby';
import { GetSiteQuery } from '../graphql';

const useSiteMetadata = () => {
  const { site } = useStaticQuery<GetSiteQuery>(
    graphql`
      query getSite {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
