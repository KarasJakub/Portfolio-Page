import React from "react"
import HamburgerButton from "./HamburgerButton/HamburgerButton"
import MobileNavigation from "./MobileNavigation/MobileNavigation"
import SButtons from "../Buttons/Buttons.styled"
import * as S from "./Navigation.styled"
import logo from "assets/icons/logo_icon.svg"
import { useScrollDirection } from "../../hooks/useScrollDirection"
import { useLocation } from "@reach/router"
import { navigate } from "gatsby"
import { Link } from "gatsby"
import { useScrollSections } from "react-scroll-section"

export const items = [
  {
    id: "home",
    content: "Home"
  },
  {
    id: "about",
    content: "About me"
  },
  {
    id: "portfolio",
    content: "Portfolio"
  },
  {
    id: "skills",
    content: "Skills"
  }
]

const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false)
  const sections = useScrollSections()
  const location = useLocation()

  const toggleNavigation = () => {
    setIsMobileNavOpen(prevState => !prevState)
  }

  const scrollDirection = useScrollDirection()
  console.log(scrollDirection)

  return (
    <S.NavigationWrapper>
      <S.NavigationContent
        className={`${scrollDirection === "up" ? "showNav" : "hideNav"}`}
      >
        <Link to="/">
          <S.Logo src={logo} alt="Personal Logo" />
        </Link>
        <S.NavigationList>
          {items.map(link => (
            <S.NavigationItem
              onClick={() =>
                location.pathname === "/"
                  ? sections.find(section => section.id === link.id).onClick()
                  : navigate("/")
              }
              key={link.id}
            >
              {link.content}
            </S.NavigationItem>
          ))}
          <SButtons.NavigationButton
            onClick={() =>
              location.pathname === "/"
                ? sections.find(section => section.id === "contact").onClick()
                : navigate("/")
            }
          >
            Contact
          </SButtons.NavigationButton>
        </S.NavigationList>
        <HamburgerButton
          toggleNavigation={toggleNavigation}
          isMobileNavOpen={isMobileNavOpen}
        />
      </S.NavigationContent>
      <MobileNavigation
        isMobileNavOpen={isMobileNavOpen}
        disableNavigation={() => setIsMobileNavOpen(false)}
      />
    </S.NavigationWrapper>
  )
}

export default Navigation
