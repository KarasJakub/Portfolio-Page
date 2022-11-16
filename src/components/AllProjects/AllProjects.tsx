import React from "react"
import * as S from "./AllProjects.styled"
import CaseStudyCard from "components/CaseStudies/CaseStudyCard/CaseStudyCard"

const AllProjects = () => {
  return (
    <S.ContentWrapper>
      <CaseStudyCard />
      <CaseStudyCard />
      <CaseStudyCard />
      <CaseStudyCard />
    </S.ContentWrapper>
  )
}

export default AllProjects
