import React from "react"
import * as S from "./CaseStudyCard.styled"
import { getImage, IGatsbyImageData } from "gatsby-plugin-image"

interface Props {
  title: string
  description: string
  firstTechnology: string
  secondTechnology: string
  image: IGatsbyImageData
  alt: string
  url: string
}

const CaseStudyCard = (props: Props) => {
  return (
    <>
      <S.StyledLink to={props.url}>
        <S.CardWrapper>
          <S.CardImage image={getImage(props.image)} alt={props.alt} />
          <S.Title>{props.title}</S.Title>
          <S.Paragraph>{props.description}</S.Paragraph>
          <S.TechnologiesBar>
            <S.Technology>{props.firstTechnology}</S.Technology>
            <S.Technology>{props.secondTechnology}</S.Technology>
          </S.TechnologiesBar>
        </S.CardWrapper>
      </S.StyledLink>
    </>
  )
}

export default CaseStudyCard
