import React from "react"
import * as S from "./CaseStudyTemplate.styled"
import Navigation from "components/Navigation/Navigation"
import Footer from "components/Footer/Footer"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import SEO from "components/SEO/SEO"

const CaseStudyTemplate = () => {
  const {
    allMarkdownRemark: { edges }
  } = useStaticQuery(graphql`
    query TemplateQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            html
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
      {edges.map(({ node: { frontmatter } }: any) => (
        <SEO title={frontmatter.title} key={frontmatter.title}>
          {frontmatter.description}
        </SEO>
      ))}
      <Navigation />
      <S.MainContainer>
        {edges.map(({ node: { frontmatter } }: any) => (
          <>
            <S.TopContainer>
              <S.TitleContainer>
                <S.Title>{frontmatter.title}</S.Title>
                <S.TitleParagraph>{frontmatter.description}</S.TitleParagraph>
              </S.TitleContainer>
              <S.ImageWrapper>
                <GatsbyImage
                  image={
                    getImage(
                      frontmatter.photo.childImageSharp.gatsbyImageData
                    ) as IGatsbyImageData
                  }
                  alt="Image"
                />
              </S.ImageWrapper>
            </S.TopContainer>
          </>
        ))}
        {edges.map(({ node: { html } }: any) => (
          <>
            <S.ContentContainer
              dangerouslySetInnerHTML={{ __html: html }}
            ></S.ContentContainer>
          </>
        ))}
      </S.MainContainer>
      <Footer />
    </>
  )
}

export default CaseStudyTemplate
