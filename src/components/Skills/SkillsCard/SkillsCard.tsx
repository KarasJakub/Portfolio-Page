import React from "react"
import * as S from "./SkillsCard.styled"
import { Custom } from "./SkillsCard.styled"

export interface Props extends Custom {
  title: string
  image: string
  onClick?: () => void
}

const SkillsCard = (props: Props) => {
  return (
    <S.SkillCardWrapper onClick={props.onClick} active={props.active}>
      <S.Title>{props.title}</S.Title>
      <S.Icon src={props.image} alt="Language Icon" />
    </S.SkillCardWrapper>
  )
}

export default SkillsCard
