import React from "react"
import * as S from "./GradientWrapper.styled"

type BoxProps = {
  children: React.ReactNode | React.ReactNode[]
}

const GradientWrapper = (props: BoxProps) => {
  return <S.GradientWrapper>{props.children}</S.GradientWrapper>
}

export default GradientWrapper
