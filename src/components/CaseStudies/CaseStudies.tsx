import React from "react"
import * as S from "./CaseStudies.styled"
import CaseStudyCard from "./CaseStudyCard/CaseStudyCard"
import SButtons from "components/Buttons/Buttons.styled"

const CaseStudies = () => {
  return (
    <>
      <S.ProjectsWrapper>
        <S.SectionTitle>My Projects</S.SectionTitle>
        <S.CardsWrapper>
          <CaseStudyCard />
          <CaseStudyCard />
          <CaseStudyCard />
          <CaseStudyCard />
        </S.CardsWrapper>
        <SButtons.CaseStudiesButton>Show more</SButtons.CaseStudiesButton>
      </S.ProjectsWrapper>
    </>
  )
}

export default CaseStudies
