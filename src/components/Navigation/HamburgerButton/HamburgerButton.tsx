import React from "react"
import * as S from "./HamburgerButton.styled"
import { motion } from "framer-motion"

interface Props {
  isMobileNavOpen: boolean
  toggleNavigation: () => void
}

const HamburgerButton = (props: Props) => {
  return (
    <S.Button
      onClick={props.toggleNavigation}
      isOpen={props.isMobileNavOpen}
      as={motion.button}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <S.ButtonBar isOpen={props.isMobileNavOpen} />
    </S.Button>
  )
}

export default HamburgerButton
