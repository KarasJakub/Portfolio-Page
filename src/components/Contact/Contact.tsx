import React from "react"
import * as S from "./Contact.styled"

const Contact = () => {
  return (
    <S.ContactWrapper>
      <S.ContactTitle>Get in Touch</S.ContactTitle>
      <S.FormWrapper>
        <S.Form>
          <S.TopInputsWrapper>
            <S.Input type="text" placeholder="Name" />
            <S.Input type="text" placeholder="E-mail" />
            <S.Textarea
              as="textarea"
              placeholder="Hey, I'am writing to you..."
            />
          </S.TopInputsWrapper>
        </S.Form>
      </S.FormWrapper>
    </S.ContactWrapper>
  )
}

export default Contact
