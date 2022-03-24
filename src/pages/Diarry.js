import { useContext } from "react"
import { MobileBar, Sidebar, NewEntry } from "../components"
import EntriesContext from "../context/context"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Diarry() {
  const { text, setText, handleSubmit } = useContext(EntriesContext)

  return (
    <>
      <section className="diarry-hero"></section>
      <div className="relative z-50 px-5">
        <article>
          <MobileBar />
          <Sidebar />
        </article>
        <article className="md:max-w-xl md:mx-auto lg:max-w-3xl xl:max-w-4xl pt-10 pb-32 lg:py-14">
          <form onSubmit={handleSubmit}>
            {/* Add markdown support */}
            {/* Toggle for "Enter key is submit" */}
            <small>This textarea supports Markdown :)</small>
            <textarea
              name="new-entry"
              id="new-entry"
              cols="30"
              rows="8"
              className="w-full p-3 rounded-md shadow resize-none"
              placeholder="So today..."
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button className="btn-submit mt-3" onClick={handleSubmit}>
              Add new entry
            </button>
          </form>
          <ToastContainer />

          <NewEntry />
        </article>
      </div>
    </>
  )
}
