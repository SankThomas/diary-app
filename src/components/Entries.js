import React from "react"

export default function Entries({ entries }) {
  return (
    <>
      <section>
        {entries.map(({ id, description }) => (
          <article
            key={id}
            className="flex flex-col justify-center md:items-start md:justify-between md:flex-row mt-10"
          >
            <div className="description rounded-md shadow mr-5">
              <p className="px-5 py-2 text-white">{description}</p>
            </div>
            <ul className="flex items-center">
              <li className="mr-2">
                <button className="py-1 px-4 rounded shadow bg-green-500 text-white border border-green-500 hover:bg-transparent transition-all duration-150 text-xs">
                  Edit
                </button>
              </li>
              <li>
                <button className="py-1 px-4 rounded shadow bg-red-500 text-white border border-red-500 hover:bg-transparent transition-all duration-150 text-xs">
                  Delete
                </button>
              </li>
            </ul>
          </article>
        ))}
      </section>
    </>
  )
}
