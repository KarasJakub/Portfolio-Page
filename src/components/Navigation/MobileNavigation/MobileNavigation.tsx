import React from "react"
import { items } from "../Navigation"
import { useLocation } from "@reach/router"
import { navigate } from "gatsby"
import { useScrollSections } from "react-scroll-section"
import * as S from "./MobileNavigation.styled"
import * as SS from "../Navigation.styled"
import SButtons from "components/Buttons/Buttons.styled"

interface Props {
  isMobileNavOpen: boolean
  disableNavigation: () => void
}

const MobileNavigation = (props: Props) => {
  const sections = useScrollSections()
  const location = useLocation()

  return (
    <S.MobileNavigationWrapper isOpen={props.isMobileNavOpen}>
      <S.NavigationList>
        {items.map(item => (
          <SS.NavigationItem
            onClick={() => {
              location.pathname === "/"
                ? sections.find(section => section.id === item.id).onClick()
                : navigate("/")
              return props.disableNavigation()
            }}
            key={item.id}
          >
            {item.content}
          </SS.NavigationItem>
        ))}
        <SButtons.NavigationButton
          onClick={() => {
            location.pathname === "/"
              ? sections.find(section => section.id === "contact").onClick()
              : navigate("/")
            return props.disableNavigation()
          }}
        >
          Contact
        </SButtons.NavigationButton>
      </S.NavigationList>
    </S.MobileNavigationWrapper>
  )
}

export default MobileNavigation
