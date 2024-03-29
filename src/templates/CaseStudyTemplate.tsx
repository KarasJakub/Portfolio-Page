import React from "react"
import * as S from "./CaseStudyTemplate.styled"
import Navigation from "components/Navigation/Navigation"
import Footer from "components/Footer/Footer"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import SEO from "components/SEO/SEO"
import { motion } from "framer-motion"
import GradientWrapper from "components/GradientWrapper/GradientWrapper"
import SButtons from "components/Buttons/Buttons.styled"
import Sidebar from "components/SideBar/Sidebar"

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
        destination: string
      }
    }
  }
}

const CaseStudyTemplate = ({ data }: Props) => {
  return (
    <>
      <SEO
        title={`Project: ${data.markdownRemark.frontmatter.title}`}
        key={data.markdownRemark.frontmatter.title}
      >
        {data.markdownRemark.frontmatter.description}
      </SEO>
      <Sidebar />
      <GradientWrapper>
        <Navigation />
        <S.MainContainer>
          <>
            <S.TopContainer>
              <S.TitleContainer>
                <S.Title
                  as={motion.h2}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {data.markdownRemark.frontmatter.title}
                </S.Title>
                <S.TitleParagraph
                  as={motion.p}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {data.markdownRemark.frontmatter.description}
                </S.TitleParagraph>
                <a
                  href={data.markdownRemark.frontmatter.destination}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SButtons.TemplateButton
                    as={motion.button}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Show
                  </SButtons.TemplateButton>
                </a>
              </S.TitleContainer>
              <S.ImageWrapper
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
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
              as={motion.article}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            ></S.ContentContainer>
          </>
        </S.MainContainer>
        <Footer />
      </GradientWrapper>
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
        destination
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
