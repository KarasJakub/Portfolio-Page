import React from "react"
import { Helmet } from "react-helmet"
import favicon from "assets/icons/favicon.svg"

interface Props {
  children?: string
  title?: string
}

const SEOComponent = (props: Props) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "pl"
      }}
    >
      <meta charSet="utf-8" />
      <title>{props.title}</title>
      <meta name="description" content={props.children} />
      <link rel="icon" href={favicon} />
      <meta property="og:url" content="https://jakubkaras.pl" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.children} />
      <meta
        property="og:site_name"
        content="Jakub Karaś - Front End Developer Portfolio"
      />
      <meta property="og:locale" content="pl_PL" />
    </Helmet>
  )
}

export default SEOComponent
