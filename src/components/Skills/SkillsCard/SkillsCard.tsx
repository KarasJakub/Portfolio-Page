import React from "react"
import * as S from "./SkillsCard.styled"

export interface Props {
  title: string
  image: string
}

const SkillsCard = (props: Props) => {
  return (
    <S.SkillCardWrapper>
      <S.Title>{props.title}</S.Title>
      <S.Icon src={props.image} alt="Language Icon" />
    </S.SkillCardWrapper>
  )
}

export default SkillsCard
