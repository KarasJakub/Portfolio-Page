import * as React from "react"
import { GatsbyBrowser } from "gatsby"
import GlobalStyles from "layout/GlobalStyles"

/* eslint-disable react/prop-types */
const WrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  return (
    <main>
      {element}
      <GlobalStyles />
    </main>
  )
}

export default WrapPageElement
