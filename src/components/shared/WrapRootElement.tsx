import * as React from "react"
import { GatsbyBrowser } from "gatsby"
import ImagesContextProvider from "context/ImagesContext"
import { ThemeProvider } from "styled-components"
import theme from "layout/theme"
import { ScrollingProvider } from "react-scroll-section"

/* eslint-disable react/prop-types */
const WrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => (
  <>
    <ScrollingProvider offset={-50}>
      <ImagesContextProvider>
        <ThemeProvider theme={theme}>{element}</ThemeProvider>
      </ImagesContextProvider>
    </ScrollingProvider>
  </>
)

export default WrapRootElement
