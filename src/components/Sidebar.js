import React from "react"
import { RiChatNewLine } from "react-icons/ri"
import { AiOutlineFolder, AiOutlineRollback } from "react-icons/ai"
import { Link } from "react-router-dom"
// when opened import {AiOutlineFolderOpen} from "react-icons/ai"

export default function Sidebar() {
  return (
    <>
      <aside className="hidden md:block bg-slate-800 h-full fixed left-0 top-0 px-5">
        <ul className="mt-10">
          <li>
            <Link
              to="/diarry"
              className="mb-5 flex items-center justify-center"
            >
              <button className="btn-icon xl:mr-2">
                <RiChatNewLine className="text-white" />{" "}
              </button>
              <span className="hidden xl:block text-slate-400 text-xs">
                New entry
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/all-entries"
              className="flex items-center justify-center"
            >
              <button className="btn-icon xl:mr-2">
                <AiOutlineFolder className="text-white" />
              </button>
              <span className="hidden xl:block text-slate-400 text-xs">
                All entries
              </span>
            </Link>
          </li>

          <li className="absolute left-5 bottom-5">
            <Link to="/" className="flex items-center justify-center">
              <button className="btn-icon xl:mr-2">
                <AiOutlineRollback className="text-white" />
              </button>
              <span className="hidden xl:block text-slate-400 text-xs">
                Homepage
              </span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  )
}
