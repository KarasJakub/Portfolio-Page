import React from "react"
import * as S from "./ButtonComponent.styled"

type ButtonProps = {
  children: React.ReactNode | React.ReactNode[]
}

const ButtonComponent = (props: ButtonProps) => {
  return <S.ButtonComponent {...props}>{props.children}</S.ButtonComponent>
}

export default ButtonComponent
