import { graphql } from 'gatsby'

export const query = graphql`
  fragment pageFields on ContentfulPage {
    title
    subtitle {
      remark: childMarkdownRemark {
        html
      }
    }
    cover {
      ...image
    }
    caption {
      remark: childMarkdownRemark {
        html
      }
    }
    caption {
      remark: childMarkdownRemark {
        html
      }
    }
    toc
    body {
      remark: childMarkdownRemark {
        excerpt
        html
      }
    }
    updatedAt(formatString: "D. MMM YYYY", locale: "de")
  }
`
