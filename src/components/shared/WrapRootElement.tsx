import * as React from "react"
import { GatsbyBrowser } from "gatsby"
import ImagesContextProvider from "context/ImagesContext"
import { ThemeProvider } from "styled-components"
import theme from "layout/theme"

/* eslint-disable react/prop-types */
const WrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => (
  <ImagesContextProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </ImagesContextProvider>
)

export default WrapRootElement
