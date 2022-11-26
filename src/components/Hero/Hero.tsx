import React from "react"
import * as S from "./Hero.styled"
import SButtons from "components/Buttons/Buttons.styled"
import HeroImage from "../../assets/images/Hero_Image.svg"
import { useScrollSection } from "react-scroll-section"
import { motion } from "framer-motion"

const Hero = () => {
  const portfolioSection = useScrollSection("portfolio")
  return (
    <>
      <S.HeroWrapper>
        <S.HeadingWrapper
          as={motion.header}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <S.PreName
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Hello, I am
          </S.PreName>
          <S.BigHeading
            as={motion.h2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Jakub Karaś.
          </S.BigHeading>
          <S.SmallHeading
            as={motion.h1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            I create <strong> something out of nothing</strong>.
          </S.SmallHeading>
          <S.Paragraph
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
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
          <SButtons.HeroButton
            onClick={portfolioSection.onClick}
            as={motion.button}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            Check my work!
          </SButtons.HeroButton>
        </S.HeadingWrapper>
        <S.Image
          src={HeroImage}
          alt="Person working on computer"
          as={motion.img}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.5 }}
        />
      </S.HeroWrapper>
    </>
  )
}

export default Hero
