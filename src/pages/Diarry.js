import { useContext } from "react"
import { Link } from "react-router-dom"
import { MobileBar, Sidebar, NewEntry } from "../components"
import EntriesContext from "../context/context"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Diarry() {
  const { text, setText, isEditing, handleSubmit } = useContext(EntriesContext)

  return (
    <>
      <section className="diarry-hero"></section>
      <div className="relative z-50 px-5">
        <article>
          <MobileBar />
          <Sidebar />
        </article>
        <article className="md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl pt-10 pb-32 lg:py-14">
          <form onSubmit={handleSubmit}>
            {/* Add markdown support */}
            {/* Toggle for "Enter key is submit" */}
            <div className="mb-2 flex items-start flex-col md:flex-row">
              <p className="text-sm lg:text-base text-slate-700 mb-10">
                This textarea supports{" "}
                {/* <a
                  href="https://www.markdownguide.org/getting-started/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 underline"
                > */}
                Markdown :).
                {/* </a>{" "} */}{" "}
                <Link to="/markdown-help" className="underline text-indigo-600">
                  Read this article
                </Link>{" "}
                if you don't know how you use Markdown
              </p>
              <article>
                {/* <button className="text-xs text-emerald-500">
                  Learn more about Markdown
                </button> */}
              </article>
            </div>

            <textarea
              name="new-entry"
              id="new-entry"
              cols="30"
              rows="8"
              className="w-full p-3 rounded-md shadow resize-none text-sm lg:text-base"
              placeholder="So today..."
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button className="btn-submit mt-10" onClick={handleSubmit}>
              {isEditing ? "Editing Entry" : "Add New Entry"}
            </button>
          </form>
          <ToastContainer theme="colored" />

          <NewEntry />
        </article>
      </div>
    </>
  )
}
