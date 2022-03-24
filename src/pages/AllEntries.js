import React, { useContext } from "react"
import { AiOutlineDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import { MobileBar, Sidebar } from "../components"
import EntriesContext from "../context/context"
import { Remarkable } from "remarkable"

const md = new Remarkable()

export default function AllEntries() {
  const { entries, handleDelete } = useContext(EntriesContext)

  return (
    <>
      <section className="diarry-hero"></section>
      <div className="relative z-50 px-5">
        <article>
          <MobileBar />
          <Sidebar />
        </article>

        <article className="md:max-w-xl md:mx-auto lg:max-w-3xl xl:max-w-4xl pt-10 pb-32 lg:py-14">
          <div>
            {entries.length <= 0 ? (
              <div className="text-center">
                <p className="mb-5">
                  It's quiet. Too quiet. Try adding a new entry in your diary
                  and it will appear here
                </p>
                <Link to="/diarry" className="btn-icon text-sm text-white">
                  Go to Diarry
                </Link>
              </div>
            ) : (
              <div>
                <p className="text-center text-sm md:text-left">
                  You have made {entries.length} diarry entries. You're amazing!
                </p>
                <div className="grid grid-cols-1 gap-5 mt-5">
                  {entries.map(({ id, description, date }) => (
                    <React.Fragment key={id}>
                      <article
                        key={id}
                        className="flex flex-col justify-center md:items-start md:justify-between md:flex-row"
                      >
                        <div className="description rounded-md shadow md:mr-5 md:w-full">
                          <small className="block text-xs px-5 pt-2">
                            Date of entry: {date}
                          </small>
                          <p
                            className="px-5 pb-2 text-white"
                            dangerouslySetInnerHTML={{
                              __html: md.render(description),
                            }}
                          ></p>
                        </div>

                        <ul className="flex items-center justify-end md:justify-start mt-3 md:mt-0">
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
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </>
  )
}
