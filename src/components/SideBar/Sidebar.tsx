import React from "react"
import * as S from "./SideBar.styled"
import GitHubIcon from "assets/icons/Github.svg"
import LinkedinIcon from "assets/icons/LinkedIn.svg"
import MailIcon from "assets/icons/Mail.svg"
import { motion } from "framer-motion"

const Icons = [
  {
    link: "https://github.com/KarasJakub/",
    name: "Github Icon",
    icon: GitHubIcon
  },
  {
    link: "https://www.linkedin.com/in/jakub-kara%C5%9B-825244238/",
    name: "Linkedin Icon",
    icon: LinkedinIcon
  },
  {
    link: "mailto:contact@jakubkaras.pl",
    name: "Mail Icon",
    icon: MailIcon
  }
]

const Sidebar = () => {
  return (
    <S.SideBarWrapper>
      {Icons.map((icon, index) => (
        <S.IconLink key={icon.name} href={icon.link} target="_blank">
          <S.Icon
            src={icon.icon}
            alt={icon.name}
            key={icon.name}
            as={motion.img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 * index }}
          />
        </S.IconLink>
      ))}
    </S.SideBarWrapper>
  )
}

export default Sidebar
