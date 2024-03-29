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
import { motion } from "framer-motion"

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
  const isBrowser = typeof window !== "undefined"

  const ShowNav = () => {
    if (isBrowser) {
      if (scrollDirection === "up" && window.pageYOffset > 220) {
        return "showNav"
      }
      if (scrollDirection === "down") {
        return "hideNav"
      }
      return "showNavTop"
    }
    return
  }

  return (
    <S.NavigationWrapper className={`${ShowNav()}`}>
      <S.NavigationContent>
        <Link to="/">
          <S.Logo
            src={logo}
            alt="Personal Logo"
            as={motion.img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
        </Link>
        <S.NavigationList>
          {items.map((link, index) => (
            <S.NavigationItem
              onClick={() =>
                location.pathname === "/"
                  ? sections.find(section => section.id === link.id).onClick()
                  : navigate("/")
              }
              key={link.id}
              as={motion.li}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index }}
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
            as={motion.button}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
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
