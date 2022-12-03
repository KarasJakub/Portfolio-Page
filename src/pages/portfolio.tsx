import React from "react"
import Navigation from "components/Navigation/Navigation"
import Footer from "components/Footer/Footer"
import SEO from "components/SEO/SEO"
import AllProjects from "components/AllProjects/AllProjects"
import GradientWrapper from "components/GradientWrapper/GradientWrapper"

const Portfolio = () => {
  return (
    <>
      <SEO title="Jakub Karaś - Front End Developer Portfolio">
        I&apos;m Junior Front-End Developer from Poland. My work is my passion,
        I enjoy building websites and developing my skillset because, as I said
        I&apos;m really into the idea of creating something out of nothing on
        the web.
      </SEO>
      <Navigation />
      <GradientWrapper>
        <AllProjects />
        <Footer />
      </GradientWrapper>
    </>
  )
}

export default Portfolio
