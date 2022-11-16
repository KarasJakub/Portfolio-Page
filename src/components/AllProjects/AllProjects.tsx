import React from "react"
import * as S from "./AllProjects.styled"
import CaseStudyCard from "components/CaseStudies/CaseStudyCard/CaseStudyCard"
import { graphql, useStaticQuery } from "gatsby"

const AllProjects = () => {
  const {
    allMarkdownRemark: { edges }
  } = useStaticQuery(graphql`
    query AllCaseStudiesQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              description
              firstTechnology
              secondTechnology
              alt
              photo {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <S.ContentWrapper>
      {edges.map(({ node: { frontmatter } }: any) => (
        <>
          <CaseStudyCard
            title={frontmatter.title}
            description={frontmatter.description}
            firstTechnology={frontmatter.firstTechnology}
            secondTechnology={frontmatter.secondTechnology}
            image={frontmatter.photo.childImageSharp.gatsbyImageData}
            alt={frontmatter.alt}
          />
        </>
      ))}
    </S.ContentWrapper>
  )
}

export default AllProjects
