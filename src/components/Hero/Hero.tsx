import React from "react"
import * as S from "./Hero.styled"
import SButtons from "components/Buttons/Buttons.styled"
import HeroImage from "../../assets/images/Hero_Image.svg"

const Hero = () => {
  return (
    <>
      <S.HeroWrapper>
        <S.HeadingWrapper>
          <S.PreName>Hello, I am</S.PreName>
          <S.BigHeading>Jakub Karaś.</S.BigHeading>
          <S.SmallHeading>
            I create <strong> something out of nothing</strong>.
          </S.SmallHeading>
          <S.Paragraph>
            I&apos;m Junior Front-End Developer focused on building and
            sometimes designing modern, fast and good-looking websites.
            Currently, I&apos;m working in{" "}
            <a
              href="https://ModernityCloud.pl"
              target="_blank"
              rel="noreferrer"
            >
              ModernityCloud
            </a>
            .
          </S.Paragraph>
          <SButtons.HeroButton>Check my work!</SButtons.HeroButton>
        </S.HeadingWrapper>
        <S.Image src={HeroImage} alt="Person working on computer" />
      </S.HeroWrapper>
    </>
  )
}

export default Hero