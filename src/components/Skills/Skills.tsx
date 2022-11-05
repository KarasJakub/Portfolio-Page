import React from "react"
import * as S from "./Skills.styled"
import SkillsCard from "./SkillsCard/SkillsCard"
import Languages_Icon from "assets/icons/Languages_Icon.svg"
import Programming_Icon from "assets/icons/Programming_Icon.svg"
import Design_Icon from "assets/icons/Design_Icon.svg"

const Skills = () => {
  return (
    <S.RootWrapper>
      <S.MobilesWrapper>
        <S.SectionTitle>Languages</S.SectionTitle>
        <S.Content>
          <SkillsCard title="Languages" image={Languages_Icon} />
          <SkillsCard title="Programming" image={Programming_Icon} />
          <SkillsCard title="Design" image={Design_Icon} />
          <S.Text></S.Text>
        </S.Content>
      </S.MobilesWrapper>
    </S.RootWrapper>
  )
}

export default Skills
