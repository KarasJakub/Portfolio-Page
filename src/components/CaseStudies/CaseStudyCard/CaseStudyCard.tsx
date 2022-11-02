import React from "react"
import * as S from "./CaseStudyCard.styled"
import { useImagesContext } from "context/ImagesContext"
import { getImage } from "gatsby-plugin-image"

const CaseStudyCard = () => {
  const { API } = useImagesContext()
  return (
    <S.CardWrapper>
      <S.CardImage image={getImage(API)} alt="Image" />
      <S.Title>Weather API</S.Title>
      <S.Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </S.Paragraph>
    </S.CardWrapper>
  )
}

export default CaseStudyCard
