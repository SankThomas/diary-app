import React, { useEffect, useState } from "react"
import { Entries, Sidebar } from "../components"
import { v4 as uuidv4 } from "uuid"

const getStoredEntries = () => {
  let entries = localStorage.getItem("entries")

  if (entries) {
    return JSON.parse(localStorage.getItem("entries"))
  } else {
    return []
  }
}

export default function Diarry() {
  const [entries, setEntries] = useState(getStoredEntries())
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("There's no entry in your diarry")
    } else {
      const newEntry = {
        id: uuidv4(),
        description: text,
      }
      setEntries([newEntry, ...entries])
      setText("")
    }
  }

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries))
  }, [entries])

  return (
    <>
      <section className="diarry-hero"></section>
      <div className="relative z-50">
        <article>
          <Sidebar />
        </article>
        <article className="lg:max-w-5xl lg:mx-auto py-10 lg:py-14">
          <form onSubmit={handleSubmit}>
            {/* Add markdown support */}
            {/* Toggle for "Enter key is submit" */}
            <textarea
              name="new-entry"
              id="new-entry"
              cols="30"
              rows="8"
              className="w-full p-3 rounded shadow resize-none"
              placeholder="So today..."
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button className="btn-submit mt-3" onClick={handleSubmit}>
              Add new entry
            </button>
          </form>

          <Entries entries={entries} />
        </article>
      </div>
    </>
  )
}
