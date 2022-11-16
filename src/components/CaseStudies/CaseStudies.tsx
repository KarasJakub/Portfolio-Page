import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as S from "./CaseStudies.styled"
import CaseStudyCard from "./CaseStudyCard/CaseStudyCard"
import SButtons from "components/Buttons/Buttons.styled"

const CaseStudies = () => {
  const {
    allMarkdownRemark: { edges }
  } = useStaticQuery(graphql`
    query HomeCaseStudiesQuery {
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
    <>
      <S.ProjectsWrapper>
        <S.SectionTitle>My Projects</S.SectionTitle>
        <S.CardsWrapper>
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
        </S.CardsWrapper>
        <Link to="/portfolio">
          <SButtons.CaseStudiesButton>Show more</SButtons.CaseStudiesButton>
        </Link>
      </S.ProjectsWrapper>
    </>
  )
}

export default CaseStudies
