import React from "react"
import * as S from "./Contact.styled"
import ReCAPTCHA from "react-google-recaptcha"
import SButtons from "components/Buttons/Buttons.styled"

const Contact = () => {
  return (
    <S.ContactWrapper>
      <S.ContactTitle>Get in Touch</S.ContactTitle>
      <S.FormWrapper>
        <S.Form>
          <S.TopInputsWrapper>
            <S.Input type="text" placeholder="Name" />
            <S.Input type="text" placeholder="E-mail" />
          </S.TopInputsWrapper>
          <S.Textarea as="textarea" placeholder="Hey, I'am writing to you..." />
        </S.Form>
        <S.BottomWrapper>
          <ReCAPTCHA
            theme="dark"
            sitekey="6Lcv2vIiAAAAAAGGWr5-nJWdDlUIyftdPCTdJyen"
          />
          <SButtons.FormButton>send into space 😛</SButtons.FormButton>
        </S.BottomWrapper>
      </S.FormWrapper>
    </S.ContactWrapper>
  )
}

export default Contact
