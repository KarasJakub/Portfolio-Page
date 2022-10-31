import { useImagesContext } from "context/ImagesContext"
import { getImage } from "gatsby-plugin-image"
import React from "react"
import * as S from "./About.styled"
import GatsbyIcon from "assets/icons/Gatsby.svg"
import ReactIcon from "assets/icons/React.svg"
import TypeScriptIcon from "assets/icons/Typescript.svg"
import WebpackIcon from "assets/icons/Webpack.svg"
import NodeIcon from "assets/icons/Node.svg"
import JavaScriptIcon from "assets/icons/Javascript.svg"

const About = () => {
  const { Personal_Image } = useImagesContext()

  return (
    <S.AboutWrapper>
      <S.TextWrapper>
        <S.SectionTitle>About me</S.SectionTitle>
        <S.SectionParagraph>
          I&apos;m 19 years Junior Front-End Developer from Poland. My work is
          my passion, I enjoy building websites and developing my skillset
          because, as I said I&apos;m really into the idea of creating something
          out of nothing on the web. I started back in 2020 with fundamentals of
          web development and started creating my first&apos;s websites. At this
          point, my main focus is building modern and good-looking websites
          along with new technologies, especially my favorite –{" "}
          <strong>React.js</strong>. I&apos;m in 4th-grade Secondary School of
          Information Technology
        </S.SectionParagraph>
        <S.SectionParagraph>
          I&apos;m in 4th-grade Secondary School of Information Technology
        </S.SectionParagraph>
        <S.SectionParagraph>
          What technologies am I working with?
        </S.SectionParagraph>
        <S.Icons>
          <S.IconBar>
            <img src={GatsbyIcon} alt="Gatsby Icon" />
            <p>Gatsby.js</p>
          </S.IconBar>
          <S.IconBar>
            <img src={ReactIcon} alt="React Icon" />
            <p>React.js</p>
          </S.IconBar>
          <S.IconBar>
            <img src={TypeScriptIcon} alt="Typescript Icon" />
            <p>Typescript</p>
          </S.IconBar>
          <S.IconBar>
            <img src={WebpackIcon} alt="Webpack Icon" />
            <p>Webpack</p>
          </S.IconBar>
          <S.IconBar>
            <img src={NodeIcon} alt="Node.js Icon" />
            <p>Node.js</p>
          </S.IconBar>
          <S.IconBar>
            <img src={JavaScriptIcon} alt="Javascript Icon" />
            <p>Javascript</p>
          </S.IconBar>
        </S.Icons>
      </S.TextWrapper>
      <S.Image image={getImage(Personal_Image)} alt="Photo of author" />
    </S.AboutWrapper>
  )
}

export default About
