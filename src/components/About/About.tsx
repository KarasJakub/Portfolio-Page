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
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const About = () => {
  const { Personal_Image } = useImagesContext()
  const { ref, inView } = useInView({
    threshold: 0.3
  })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1
      })
    }
  }, [inView])

  return (
    <S.AboutWrapper ref={ref}>
      <S.TextWrapper>
        <S.SectionTitle
          as={motion.h2}
          animate={animation}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.1 }}
        >
          About me
        </S.SectionTitle>
        <S.SectionParagraph
          as={motion.p}
          animate={animation}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          I&apos;m Junior Front-End Developer from <strong>Poland</strong>. My
          work is my passion, I <strong>enjoy</strong> building websites and
          developing my skillset because, as I said I&apos;m really into the
          idea of <strong>creating something out of nothing</strong> on the web.
          I started back in 2020 with fundamentals of web development and
          started creating my first&apos;s websites. At this point,{" "}
          <strong>my main focus</strong> is building modern and good-looking
          websites along with new technologies, especially my favorite –{" "}
          <strong>React.js</strong>.
        </S.SectionParagraph>
        <S.SectionParagraph
          as={motion.p}
          animate={animation}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          I&apos;m in 4th-grade Secondary School of Information Technology
        </S.SectionParagraph>
        <S.SectionParagraph
          as={motion.p}
          animate={animation}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          What technologies am I working with?
        </S.SectionParagraph>
        <S.Icons>
          <S.IconBar
            as={motion.div}
            animate={animation}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <img src={GatsbyIcon} alt="Gatsby Icon" />
            <p>Gatsby.js</p>
          </S.IconBar>
          <S.IconBar
            as={motion.div}
            animate={animation}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <img src={ReactIcon} alt="React Icon" />
            <p>React.js</p>
          </S.IconBar>
          <S.IconBar
            as={motion.div}
            animate={animation}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.7 }}
          >
            <img src={TypeScriptIcon} alt="Typescript Icon" />
            <p>Typescript</p>
          </S.IconBar>
          <S.IconBar
            as={motion.div}
            animate={animation}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            <img src={WebpackIcon} alt="Webpack Icon" />
            <p>Webpack</p>
          </S.IconBar>
          <S.IconBar
            as={motion.div}
            animate={animation}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.9 }}
          >
            <img src={NodeIcon} alt="Node.js Icon" />
            <p>Node.js</p>
          </S.IconBar>
          <S.IconBar
            as={motion.div}
            animate={animation}
            initial={{ opacity: 0 }}
            transition={{ delay: 1 }}
          >
            <img src={JavaScriptIcon} alt="Javascript Icon" />
            <p>Javascript</p>
          </S.IconBar>
        </S.Icons>
      </S.TextWrapper>
      <S.MotionWrapper
        as={motion.div}
        animate={animation}
        initial={{ opacity: 0 }}
        transition={{ delay: 1.2 }}
      >
        <S.Image image={getImage(Personal_Image)} alt="Photo of author" />
      </S.MotionWrapper>
    </S.AboutWrapper>
  )
}

export default About
