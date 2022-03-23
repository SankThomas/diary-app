import React from "react"
import { Link } from "react-router-dom"

export default function Error() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-bold">
          Error 404
          <span className="font-light">
            | We could not find the page you were looking for
          </span>
        </h1>
        <Link className="block">
          {/* Insert svg error 404 image */}
          &larr; Back Home
        </Link>
      </section>
    </>
  )
}
