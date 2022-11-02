import React from "react"
import * as S from "./CaseStudies.styled"
import CaseStudyCard from "./CaseStudyCard/CaseStudyCard"

const CaseStudies = () => {
  return (
    <S.ProjectsWrapper>
      <S.SectionTitle>My Projects</S.SectionTitle>
      <S.CardsWrapper>
        <CaseStudyCard />
        <CaseStudyCard />
        <CaseStudyCard />
      </S.CardsWrapper>
    </S.ProjectsWrapper>
  )
}

export default CaseStudies
