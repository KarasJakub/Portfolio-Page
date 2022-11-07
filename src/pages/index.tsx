import React from "react"
import GradientWrapper from "components/GradientWrapper/GradientWrapper"
import Navigation from "components/Navigation/Navigation"
import Hero from "components/Hero/Hero"
import About from "components/About/About"
import CaseStudies from "components/CaseStudies/CaseStudies"
import Skills from "components/Skills/Skills"
import Sidebar from "components/SideBar/Sidebar"

export default function Home() {
  return (
    <>
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
    </>
  )
}
