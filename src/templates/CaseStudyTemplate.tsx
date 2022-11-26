import React from "react"
import * as S from "./CaseStudyTemplate.styled"
import Navigation from "components/Navigation/Navigation"
import Footer from "components/Footer/Footer"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import SEO from "components/SEO/SEO"

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        slug: string
        title: string
        description: string
        alt: string
        photo: IGatsbyImageData
      }
    }
  }
}

const CaseStudyTemplate = ({ data }: Props) => {
  return (
    <>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        key={data.markdownRemark.frontmatter.title}
      >
        {data.markdownRemark.frontmatter.description}
      </SEO>
      <Navigation />
      <S.MainContainer>
        <>
          <S.TopContainer>
            <S.TitleContainer>
              <S.Title>{data.markdownRemark.frontmatter.title}</S.Title>
              <S.TitleParagraph>
                {data.markdownRemark.frontmatter.description}
              </S.TitleParagraph>
            </S.TitleContainer>
            <S.ImageWrapper>
              <GatsbyImage
                image={
                  getImage(
                    data.markdownRemark.frontmatter.photo
                  ) as IGatsbyImageData
                }
                alt={data.markdownRemark.frontmatter.alt}
              />
            </S.ImageWrapper>
          </S.TopContainer>
        </>
        <>
          <S.ContentContainer
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></S.ContentContainer>
        </>
      </S.MainContainer>
      <Footer />
    </>
  )
}

export const query = graphql`
  query ArticleDataQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        description
        alt
        photo {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
export default CaseStudyTemplate
