import React from "react"
import * as S from "./ButtonComponent.styled"

interface ButtonProps {
  children: React.ReactNode | React.ReactNode[]
  disabled?: boolean
  submit?: boolean
  onClick?: () => void
}

const ButtonComponent = (props: ButtonProps) => {
  return (
    <S.ButtonComponent {...props} disabled={props.disabled ?? false}>
      {props.children}
    </S.ButtonComponent>
  )
}

export default ButtonComponent
