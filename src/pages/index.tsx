import React from "react"
import GradientWrapper from "components/GradientWrapper/GradientWrapper"
import Navigation from "components/Navigation/Navigation"
import Hero from "components/Hero/Hero"
import About from "components/About/About"
import CaseStudies from "components/CaseStudies/CaseStudies"
import Skills from "components/Skills/Skills"
import Sidebar from "components/SideBar/Sidebar"
import Footer from "components/Footer/Footer"
import Contact from "components/Contact/Contact"
import SEO from "components/SEO/SEO"

export default function Home() {
  return (
    <>
      <SEO title="Jakub Karaś - Front End Developer Portfolio">
        I&apos;m Junior Front-End Developer from Poland. My work is my passion,
        I enjoy building websites and developing my skillset because, as I said
        I&apos;m really into the idea of creating something out of nothing on
        the web.
      </SEO>
      <Sidebar />
      <GradientWrapper>
        <>
          <Navigation />
          <Hero />
        </>
        <About />
      </GradientWrapper>
      <CaseStudies />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}
