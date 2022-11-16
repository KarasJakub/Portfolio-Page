import type { GatsbyNode } from "gatsby"
import path from "path"

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  getConfig,
  actions
}) => {
  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false
    })
  }
}

type BasicArticleData = {
  node: {
    id: string
    frontmatter: {
      slug: string
    }
  }
}

interface QueryData {
  allMarkdownRemark: {
    edges: BasicArticleData[]
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql
}) => {
  const { data } = await graphql<QueryData>(`
    query Articles {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const createPostPromise = data.allMarkdownRemark.edges?.map(({ node }) => {
    actions.createPage({
      path: `${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/CaseStudyTemplate.tsx`),
      context: { id: node.id }
    })

    // eslint-disable-next-line no-console
    return console.log(
      `Article with slug: ${node.frontmatter.slug} has been created.`
    )
  })

  await Promise.all([createPostPromise])
}
