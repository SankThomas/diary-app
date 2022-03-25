import React from "react"
import { Link } from "react-router-dom"
import { ProductHunt } from "../../buttons"
import logo from "../../images/logo.svg"

export default function HomeHero() {
  return (
    <>
      <section className="hero"></section>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-5 2xl:px-0">
        <img src={logo} alt="Diarry" className="block mx-auto mb-5" />
        <h1 className="text-white font-bold mb-5 text-4xl md:text-5xl">
          Diarry
        </h1>
        <p className="text-white text-center px-5 mb-10 lg:text-xl">
          Free, responsive and accessible diary app for you.
        </p>
        <ul className="flex flex-col md:flex-row items-center justify-center">
          <li className="mb-5 md:mb-0 md:mr-5">
            <Link to="/diarry" className="btn">
              I want this
            </Link>
          </li>
          <li>
            <ProductHunt />
          </li>
        </ul>
      </div>
    </>
  )
}
