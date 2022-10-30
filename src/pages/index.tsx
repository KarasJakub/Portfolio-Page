import React from "react"
import GradientWrapper from "components/GradientWrapper/GradientWrapper"
import Navigation from "components/Navigation/Navigation"
import Hero from "components/Hero/Hero"

export default function Home() {
  return (
    <>
      <GradientWrapper>
        <>
          <Navigation />
          <Hero />
        </>
      </GradientWrapper>
    </>
  )
}
