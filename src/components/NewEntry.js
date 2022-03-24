import React, { useContext } from "react"
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import EntriesContext from "../context/context"
import { Remarkable } from "remarkable"

const md = new Remarkable()

export default function NewEntry() {
  const { entries, handleDelete, handleEdit } = useContext(EntriesContext)

  return (
    <>
      <section className="grid grid-cols-1 gap-5 mt-10">
        {entries.map(({ id, description, date }) => (
          <article
            key={id}
            className="flex flex-col justify-center md:items-start md:justify-between md:flex-row"
          >
            <div className="description rounded-md shadow md:mr-5 md:w-full">
              <small className="block text-xs px-5 pt-2">
                Date of entry: {date}
              </small>
              <div
                className="md px-5 pb-2 text-white"
                dangerouslySetInnerHTML={{ __html: md.render(description) }}
              ></div>
            </div>

            <ul className="flex items-center justify-end md:justify-start mt-3 md:mt-0">
              <li className="mr-2">
                <button
                  onClick={() => handleEdit(id)}
                  className="py-1 px-4 rounded shadow bg-emerald-500 text-white border border-emerald-500 hover:bg-transparent transition-all duration-150 hover:text-emerald-500"
                >
                  <AiOutlineEdit />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleDelete(id)}
                  className="py-1 px-4 rounded shadow bg-red-500 text-white border border-red-500 hover:bg-transparent transition-all duration-150 hover:text-red-500"
                >
                  <AiOutlineDelete />
                </button>
              </li>
            </ul>
          </article>
        ))}
      </section>
    </>
  )
}
