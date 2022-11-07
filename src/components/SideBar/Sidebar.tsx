import React from "react"
import * as S from "./SideBar.styled"
import GitHubIcon from "assets/icons/Github.svg"
import LinkedinIcon from "assets/icons/LinkedIn.svg"
import MailIcon from "assets/icons/Mail.svg"

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
      {Icons.map(icon => (
        <S.IconLink key={icon.name} href={icon.link} target="_blank">
          <S.Icon src={icon.icon} alt={icon.name} key={icon.name} />
        </S.IconLink>
      ))}
    </S.SideBarWrapper>
  )
}

export default Sidebar
