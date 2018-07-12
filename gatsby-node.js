const path = require('path')

const pageTemplate = path.resolve('./src/templates/page.js')
const postTemplate = path.resolve('./src/templates/post.js')
const blogCategoryTemplate = path.resolve('./src/templates/blogCategory.js')
const wikiSubsectionTemplate = path.resolve('./src/templates/wikiSubsection.js')
const wikiSectionTemplate = path.resolve('./src/templates/wikiSection.js')
const wikiArticleTemplate = path.resolve('./src/templates/wikiArticle.js')

const contentfulQuery = (contentType, fragment = ``) => `
  {
    content: allContentful${contentType} {
      edges {
        node {
          parent {
            id
          }
          slug
          ${fragment}
        }
      }
    }
  }
`

const wikiSubsectionFragment = `
  sections: wiki_section {
    slug
  }
`

const wikiArticleFragment = `
  section {
    slug
  }
  subsection {
    slug
  }
`

const pageSets = [
  { query: contentfulQuery(`Page`), component: pageTemplate },
  { query: contentfulQuery(`Post`), component: postTemplate },
  { query: contentfulQuery(`BlogCategory`), component: blogCategoryTemplate },
  { query: contentfulQuery(`WikiSection`), component: wikiSectionTemplate },
  {
    query: contentfulQuery(`WikiSubsection`, wikiSubsectionFragment),
    component: wikiSubsectionTemplate
  },
    {
    query: contentfulQuery(`WikiArticle`, wikiArticleFragment),
    component: wikiArticleTemplate
  },
]

const pagePath = node => {
  switch (node.parent.id) {
    case `Post`:
    case `Blog Category`:
      return `/blog/` + node.slug
    case `Wiki Section`:
      return `/wiki/${node.slug}`
    case `Wiki Subsection`:
      return `/wiki/${node.sections[0].slug}/${node.slug}`
    case `Wiki Article`:
      if (!node.subsection) return `/wiki/${node.section.slug}/${node.slug}`
      return `/wiki/${node.section.slug}/${node.subsection.slug}/${node.slug}`
    default:
      return node.slug
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  pageSets.forEach(async ({ query, component }) => {
    const response = await graphql(query)
    if (response.errors) {
      console.error(response.errors)
      throw new Error(response.errors)
    }
    response.data.content.edges.forEach(({ node }) => {
      createPage({
        path: pagePath(node),
        component,
        context: {
          slug: node.slug,
        },
      })
    })
  })
}