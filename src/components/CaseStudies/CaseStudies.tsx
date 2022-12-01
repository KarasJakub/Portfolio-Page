import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as S from "./CaseStudies.styled"
import CaseStudyCard from "./CaseStudyCard/CaseStudyCard"
import SButtons from "components/Buttons/Buttons.styled"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const CaseStudies = () => {
  const {
    allMarkdownRemark: { edges }
  } = useStaticQuery(graphql`
    query HomeCaseStudiesQuery {
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

  const { ref, inView } = useInView({
    threshold: 0.3
  })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1
      })
    }
  }, [inView])
  return (
    <>
      <S.ProjectsWrapper ref={ref}>
        <S.SectionTitle
          as={motion.h2}
          animate={animation}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          My Projects
        </S.SectionTitle>
        <S.CardsWrapper>
          {edges.map(({ node: { frontmatter } }: any, index: number) => (
            <>
              <S.MotionWrapper
                as={motion.div}
                animate={animation}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <CaseStudyCard
                  title={frontmatter.title}
                  description={frontmatter.description}
                  firstTechnology={frontmatter.firstTechnology}
                  secondTechnology={frontmatter.secondTechnology}
                  image={frontmatter.photo.childImageSharp.gatsbyImageData}
                  alt={frontmatter.alt}
                  url={"/portfolio/" + frontmatter.slug}
                />
              </S.MotionWrapper>
            </>
          ))}
        </S.CardsWrapper>
        <Link to="/portfolio">
          <SButtons.CaseStudiesButton
            as={motion.button}
            animate={animation}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            Show more
          </SButtons.CaseStudiesButton>
        </Link>
      </S.ProjectsWrapper>
    </>
  )
}

export default CaseStudies
