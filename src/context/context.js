import { createContext, useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { toast } from "react-toastify"

const EntriesContext = createContext({
  entries: [],
  text: "",
  isEditing: false,
  getLocalStorage: () => {},
  handleSubmit: () => {},
  handleEdit: () => {},
  handleDelete: () => {},
})

export const EntriesContextProvider = ({ children }) => {
  const getLocalStorage = () => {
    let entries = localStorage.getItem("entries")

    if (entries) {
      return JSON.parse(localStorage.getItem("entries"))
    } else {
      return []
    }
  }

  const [entries, setEntries] = useState(getLocalStorage())
  const [text, setText] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  // Submit function
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      toast.info("Oops. Sorry, there's no entry in your diarry")
    } else {
      const newEntry = {
        id: uuidv4(),
        description: text,
        date: new Date().toLocaleString(),
      }
      setEntries([newEntry, ...entries])
      setText("")
      setIsEditing(false)
    }
  }

  // Delete function
  const handleDelete = (id) =>
    setEntries(entries.filter((entry) => entry.id !== id))

  // Edit function
  const handleEdit = (id) => {
    const editingEntry = entries.find((entry) => entry.id === id)
    setEntries(entries.filter((entry) => entry.id !== id))
    setIsEditing(true)
    setText(editingEntry.description)
  }

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries))
  }, [entries])

  const context = {
    entries,
    text,
    setText,
    isEditing,
    handleSubmit,
    handleDelete,
    handleEdit,
  }

  return (
    <EntriesContext.Provider value={context}>
      {children}
    </EntriesContext.Provider>
  )
}

export default EntriesContext
