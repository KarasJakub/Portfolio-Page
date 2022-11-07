import React from "react"
import * as S from "./Skills.styled"
import SkillsCard from "./SkillsCard/SkillsCard"
import Languages_Icon from "assets/icons/Languages_Icon.svg"
import Programming_Icon from "assets/icons/Programming_Icon.svg"
import Design_Icon from "assets/icons/Design_Icon.svg"

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
      "After I learned the basics of creating pages, I started learning new technologies: webpack, node.js, react.js, etc… They were totally game changers, projects I’ve built with them taught (and still are teaching :P) me so much about problem-solving, humility and specific mindset in programming. I think these experiences are making me a better developer every day. Currently, my leading technology is React (especially Gatsby).",
    image: Programming_Icon
  },
  {
    name: "Design skills",
    description:
      "I adore pretty websites, but design just isn’t my cup of tea. I prefer coding websites rather than designing them :P. I designed several websites in my career, but I haven’t made any UI/UX course, I like the idea of Just-In-Time-Learning :P. For occasionally designing I use Figma",
    image: Design_Icon
  }
]

const Skills = () => {
  const [activeStep, setActiveStep] = React.useState(0)

  return (
    <S.RootWrapper>
      <S.MobilesWrapper>
        <S.SectionTitle>Languages</S.SectionTitle>
        <S.Content>
          {steps.map((step, index) => (
            <SkillsCard
              title={step.name}
              image={step.image}
              key={step.name}
              active={index === activeStep}
              onClick={() => setActiveStep(index)}
            />
          ))}
          <S.Text>{steps[activeStep].description}</S.Text>
        </S.Content>
      </S.MobilesWrapper>
    </S.RootWrapper>
  )
}

export default Skills
