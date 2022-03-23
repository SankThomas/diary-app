import React from "react"
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"

export default function HomeHero() {
  return (
    <>
      <section className="hero">
        <div className="overlay flex flex-col items-center justify-center h-screen px-5 2xl:px-0">
          <img src={logo} alt="Diarry" className="block mx-auto mb-5" />
          <h1 className="text-white font-bold mb-5 text-4xl md:text-5xl">
            Diarry
          </h1>
          <p className="text-white text-center px-5 mb-10 lg:text-xl">
            Free, responsive and accessible diary app for you.
          </p>
          <Link to="/diarry" className="btn">
            Test it out
          </Link>
        </div>
      </section>
    </>
  )
}
