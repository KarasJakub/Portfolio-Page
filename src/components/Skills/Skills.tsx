import React from "react"
import * as S from "./Skills.styled"
import SkillsCard from "./SkillsCard/SkillsCard"
import Languages_Icon from "assets/icons/Languages_Icon.svg"
import Programming_Icon from "assets/icons/Programming_Icon.svg"
import Design_Icon from "assets/icons/Design_Icon.svg"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const steps = [
  {
    name: "Languages",
    description:
      "I understand English very well. Learning from English documentation, and video tutorials isn’t a challenge for me. I’m developing my English skillset every day, now I’m focused on improving my fluency in speaking. Polish is my native language.",
    image: Languages_Icon
  },
  {
    name: "Programming skills",
    description:
      "After I learned the basics of creating pages, I started learning new technologies: webpack, node.js, react.js, etc… They were totally game changers, projects I’ve built with them taught (and still are teaching 😛) me so much about problem-solving, humility and specific mindset in programming. I think these experiences are making me a better developer every day. Currently, my leading technology is React (especially Gatsby).",
    image: Programming_Icon
  },
  {
    name: "Design skills",
    description:
      "I adore pretty websites, but design just isn’t my cup of tea. I prefer coding websites rather than designing them. I designed several websites in my career, but I haven’t made any UI/UX course, I like the idea of Just-In-Time-Learning 😛. For occasionally designing I use Figma",
    image: Design_Icon
  }
]

const Skills = () => {
  const [activeStep, setActiveStep] = React.useState(0)

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
    <S.RootWrapper ref={ref}>
      <S.MobilesWrapper>
        <S.SectionTitle
          as={motion.h2}
          animate={animation}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          {steps[activeStep].name}
        </S.SectionTitle>
        <S.Content>
          {steps.map((step, index) => (
            <S.MotionWrapper
              as={motion.div}
              animate={animation}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2 * index }}
              key={step.name}
            >
              <SkillsCard
                title={step.name}
                image={step.image}
                key={step.name}
                active={index === activeStep}
                onClick={() => setActiveStep(index)}
              />
            </S.MotionWrapper>
          ))}
          <S.Text
            as={motion.p}
            animate={animation}
            initial={{ opacity: 0 }}
            transition={{ delay: 1 }}
          >
            {steps[activeStep].description}
          </S.Text>
        </S.Content>
      </S.MobilesWrapper>
      <S.ComputerWrapper>
        <S.ComputerTextWrapper>
          <S.SectionTitle
            as={motion.h2}
            animate={animation}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {steps[activeStep].name}
          </S.SectionTitle>
          <S.Text
            as={motion.p}
            animate={animation}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            {steps[activeStep].description}
          </S.Text>
        </S.ComputerTextWrapper>
        <S.Content>
          {steps.map((step, index) => (
            <S.MotionWrapper
              as={motion.div}
              animate={animation}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2 * index }}
              key={step.name}
            >
              <SkillsCard
                title={step.name}
                image={step.image}
                key={step.name}
                active={index === activeStep}
                onClick={() => setActiveStep(index)}
              />
            </S.MotionWrapper>
          ))}
        </S.Content>
      </S.ComputerWrapper>
    </S.RootWrapper>
  )
}

export default Skills
