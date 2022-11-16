import React from "react"
import { Link } from "gatsby"
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
        <Link to="/portfolio">
          <SButtons.CaseStudiesButton>Show more</SButtons.CaseStudiesButton>
        </Link>
      </S.ProjectsWrapper>
    </>
  )
}

export default CaseStudies
