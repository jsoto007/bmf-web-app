import React from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Footer />
    </div>
   
  )
}
